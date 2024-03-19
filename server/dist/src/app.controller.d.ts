import { AppService } from './app.service';
import { Response } from 'express';
interface IPaymentResultData {
    payment_intent: string;
    payment_intent_client_secret: string;
    redirect_status: string;
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    logData(paymentResult: IPaymentResultData, res: Response): void;
}
export {};
