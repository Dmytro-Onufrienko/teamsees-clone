import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_TEST_PUBLIC_KEY || "");

export const options: StripeElementsOptions  = {
  mode: 'payment',
  amount: 100,
  currency: 'usd',
  appearance: {},
};