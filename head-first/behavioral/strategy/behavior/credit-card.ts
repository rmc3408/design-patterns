import { IPaymentStrategy, PaymentResult } from '../IPaymentStrategy'

// Concrete strategies - different payment methods
export class CreditCardStrategy implements IPaymentStrategy {
    private cardNumber: string;
    private expiryDate: string;
    private cvv: string;
    private cardholderName: string;

    constructor(cardNumber: string, expiryDate: string, cvv: string, cardholderName: string) {
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
        this.cvv = cvv;
        this.cardholderName = cardholderName;
    }

    async pay(amount: number): Promise<PaymentResult> {
        console.log(`💳 Processing credit card payment of $${amount.toFixed(2)}`);
        console.log(`   Card: ****${this.cardNumber.slice(-4)}`);
        console.log(`   Cardholder: ${this.cardholderName}`);

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 100));

        const fee = this.getTransactionFee(amount);
        return {
            success: true,
            transactionId: `CC_${Date.now()}`,
            message: 'Credit card payment processed successfully',
            fee,
            method: this.getPaymentMethod()
        };
    }

    getPaymentMethod(): string {
        return 'Credit Card';
    }

    getTransactionFee(amount: number): number {
        return amount * 0.029; // 2.9% fee
    }

    isAvailable(): boolean {
        // Check if card details are valid
        return this.cardNumber.length >= 16 && 
               this.expiryDate.length > 0 && 
               this.cvv.length >= 3;
    }
}
