export declare class PaymentService {
    private stripe;
    constructor();
    createPaymentIntent(): Promise<{
        clientSecret: string;
    }>;
}
