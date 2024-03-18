import { Controller, Get, Post, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

interface IPaymentResultData {
  payment_intent: string,
  payment_intent_client_secret: string,
  redirect_status: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/log')
  logData(@Query() paymentResult: IPaymentResultData, @Res() res: Response): void {
    console.log('Logged data:', paymentResult);

    res.redirect('http://localhost:3000/');
  }
}
