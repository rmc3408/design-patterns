import { IPaymentStrategy, PaymentResult } from '../IPaymentStrategy'

export class BankTransferStrategy implements IPaymentStrategy {
    private accountNumber: string;
    private routingNumber: string;
    private bankName: string;

    constructor(accountNumber: string, routingNumber: string, bankName: string) {
        this.accountNumber = accountNumber;
        this.routingNumber = routingNumber;
        this.bankName = bankName;
    }

    async pay(amount: number): Promise<PaymentResult> {
        console.log(`🏦 Processing bank transfer of $${amount.toFixed(2)}`);
        console.log(`   Bank: ${this.bankName}`);
        console.log(`   Account: ****${this.accountNumber.slice(-4)}`);

        // Simulate bank transfer processing (longer delay)
        await new Promise(resolve => setTimeout(resolve, 3000));

        const fee = this.getTransactionFee(amount);
        return {
            success: true,
            transactionId: `BT_${Date.now()}`,
            message: 'Bank transfer initiated successfully',
            fee,
            method: this.getPaymentMethod()
        };
    }

    getPaymentMethod(): string {
        return 'Bank Transfer';
    }

    getTransactionFee(amount: number): number {
        return Math.max(5.00, amount * 0.001); // $5 minimum or 0.1%
    }

    isAvailable(): boolean {
        return this.accountNumber.length > 0 && 
               this.routingNumber.length > 0 && 
               this.bankName.length > 0;
    }
}