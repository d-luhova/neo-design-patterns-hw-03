import { PaymentProviderFactory } from "../core/PaymentProviderFactory";
import { PaymentProvider } from "../core/PaymentProvider";

export class PaymentContext {
  private provider;

  constructor(factory: PaymentProviderFactory) {
    this.provider = factory.createPaymentProvider();
  }

  processPayment(amount: number) {
    this.provider.authorize(amount);
    this.provider.capture("4g7rfa");
    this.provider.refund("4g7rfa");
  }
}