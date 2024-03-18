import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { FC, useState } from 'react';


const createPaymentIntent = async () => {
  try {
    const params = new URLSearchParams();
    params.append('amount', '100');
    params.append('currency', 'usd');

    const response = await fetch(process.env.REACT_APP_STRIPE_PAYMENT_INTENTS || "", {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_STRIPE_TEST_SECRET_KEY || ""}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });
    
    const data = await response.json();
    return data.client_secret;
  } catch (error) {
    console.error('Payment error: ', error);
    throw error;
  }
}

const Donation: FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const {error: submitError} = await elements.submit();
      if (submitError) {
        setErrorMessage(submitError.message);
        return;
      }

      const clientSecret = await createPaymentIntent();
      console.log('clientSecret:', clientSecret);

    const paymentReuslt = await stripe?.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: 'http://localhost:8000/log',
      },
    });

    if (paymentReuslt?.error) {
      setErrorMessage(paymentReuslt.error.message);
    }

    await fetch(`http://localhost:8000/log?data=${JSON.stringify(paymentReuslt)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default Donation;
