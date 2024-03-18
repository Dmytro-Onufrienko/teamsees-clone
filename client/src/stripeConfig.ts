import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe('pk_test_51OuWUZ074eZMbCDHlrloWFepdv3foRALa4zEq3XU53vaFnKoDn3ywSZPb8VyaAhSy7kFyOaje6b9cQfWTev1hpUq009rwfuswf');

export const options: StripeElementsOptions  = {
  mode: 'payment',
  amount: 100,
  currency: 'usd',
  appearance: {},
};