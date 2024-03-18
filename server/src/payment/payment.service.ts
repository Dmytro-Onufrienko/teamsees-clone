import { Injectable } from '@nestjs/common';
import { Stripe } from 'stripe';

@Injectable()
export class PaymentService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe('YOUR_STRIPE_SECRET_KEY', {
      apiVersion: '2023-10-16',
    });
  }

  async createPaymentIntent() {
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount: 100,
      currency: 'usd',
    });

    return {
      clientSecret: paymentIntent.client_secret,
    };
  }
}
