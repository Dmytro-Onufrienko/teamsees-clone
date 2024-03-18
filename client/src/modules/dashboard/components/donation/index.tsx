import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { FC, useState } from 'react';


const createPaymentIntent = async () => {
  try {
    const response = await fetch('https://api.stripe.com/v1/payment_intents', {
      method: 'POST',
      headers: {
        'Authorization': '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',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 100,
        currency: 'usd',
      }),
    });
    
    const data = await response.json();
    return data.client_secret;
  } catch (error) {
    console.error('Помилка при створенні платежного інтенту:', error);
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
        return_url: 'https://example.com/order/123/complete',
      },
    });

    if (paymentReuslt?.error) {
      setErrorMessage(paymentReuslt.error.message);
    } else {

    }
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
