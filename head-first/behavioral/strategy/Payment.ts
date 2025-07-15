import { BankTransferStrategy } from "./behavior/bank";
import { CreditCardStrategy } from "./behavior/credit-card";
import { CryptocurrencyStrategy } from "./behavior/crypto";
import { PayPalStrategy } from "./behavior/paypal";
import { IPaymentStrategy, PaymentResult } from "./IPaymentStrategy";

export class PaymentProcessor {
    private strategy?: IPaymentStrategy;
    private paymentHistory: PaymentResult[] = [];

    setPaymentStrategy(strategy: IPaymentStrategy): void {
        this.strategy = strategy;
        console.log(`💰 Payment method set to: ${strategy.getPaymentMethod()}`);
    }

    async processPayment(amount: number): Promise<PaymentResult> {
        if (!this.strategy) {
            throw new Error('Payment strategy not set');
        }

        if (!this.strategy.isAvailable()) {
            throw new Error(`${this.strategy.getPaymentMethod()} is not available`);
        }

        console.log(`\n💰 Processing payment of $${amount.toFixed(2)} using ${this.strategy.getPaymentMethod()}`);
        console.log(`   Transaction fee: $${this.strategy.getTransactionFee(amount).toFixed(2)}`);

        try {
            const result = await this.strategy.pay(amount);
            this.paymentHistory.push(result);
            console.log(`✅ Payment successful: ${result.transactionId}`);
            return result;
        } catch (error) {
            console.log(`❌ Payment failed: ${error}`);
            throw error;
        }
    }

    getAvailableStrategies(): IPaymentStrategy[] {
        // In a real application, this would come from configuration
        return [
            new CreditCardStrategy('1234567890123456', '12/25', '123', 'John Doe'),
            new PayPalStrategy('user@example.com', 'password'),
            new BankTransferStrategy('123456789', '987654321', 'Example Bank'),
            new CryptocurrencyStrategy('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'BTC')
        ].filter(strategy => strategy.isAvailable());
    }

    recommendStrategy(amount: number): IPaymentStrategy {
        const strategies = this.getAvailableStrategies();

        // Find strategy with lowest total cost (amount + fee)
        let bestStrategy = strategies[0];
        let lowestCost = amount + bestStrategy.getTransactionFee(amount);

        for (const strategy of strategies) {
            const totalCost = amount + strategy.getTransactionFee(amount);
            if (totalCost < lowestCost) {
                lowestCost = totalCost;
                bestStrategy = strategy;
            }
        }

        console.log(`💡 Recommended payment method: ${bestStrategy.getPaymentMethod()} (Total cost: $${lowestCost.toFixed(2)})`);
        return bestStrategy;
    }

    getPaymentHistory(): PaymentResult[] {
        return [...this.paymentHistory];
    }

    getTotalTransactionFees(): number {
        return this.paymentHistory.reduce((total, payment) => total + payment.fee, 0);
    }
}