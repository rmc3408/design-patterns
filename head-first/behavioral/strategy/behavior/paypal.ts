import { IPaymentStrategy, PaymentResult } from '../IPaymentStrategy'

export class PayPalStrategy implements IPaymentStrategy {
    private email: string;
    private password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    async pay(amount: number): Promise<PaymentResult> {
        console.log(`🟦 Processing PayPal payment of $${amount.toFixed(2)}`);
        console.log(`   Account: ${this.email}`);

        // Simulate PayPal API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        const fee = this.getTransactionFee(amount);
        return {
            success: true,
            transactionId: `PP_${Date.now()}`,
            message: 'PayPal payment processed successfully',
            fee,
            method: this.getPaymentMethod()
        };
    }

    getPaymentMethod(): string {
        return 'PayPal';
    }

    getTransactionFee(amount: number): number {
        return amount * 0.034; // 3.4% fee
    }

    isAvailable(): boolean {
        return this.email.includes('@') && this.password.length > 0;
    }
}