import { IPaymentStrategy, PaymentResult } from '../IPaymentStrategy'

export class CryptocurrencyStrategy implements IPaymentStrategy {
    private walletAddress: string;
    private currency: string;

    constructor(walletAddress: string, currency: string = 'BTC') {
        this.walletAddress = walletAddress;
        this.currency = currency;
    }

    async pay(amount: number): Promise<PaymentResult> {
        console.log(`₿ Processing ${this.currency} payment of $${amount.toFixed(2)}`);
        console.log(`   Wallet: ${this.walletAddress.slice(0, 8)}...${this.walletAddress.slice(-8)}`);

        // Simulate blockchain transaction
        await new Promise(resolve => setTimeout(resolve, 2000));

        const fee = this.getTransactionFee(amount);
        return {
            success: true,
            transactionId: `${this.currency}_${Date.now()}`,
            message: `${this.currency} payment processed successfully`,
            fee,
            method: this.getPaymentMethod()
        };
    }

    getPaymentMethod(): string {
        return `Cryptocurrency (${this.currency})`;
    }

    getTransactionFee(amount: number): number {
        return 10.00; // Fixed network fee
    }

    isAvailable(): boolean {
        return this.walletAddress.length >= 26; // Minimum Bitcoin address length
    }
}