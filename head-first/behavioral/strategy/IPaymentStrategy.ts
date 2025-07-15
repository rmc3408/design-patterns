// Strategy interface - defines the contract for all strategies
export interface IPaymentStrategy {
    pay(amount: number): Promise<PaymentResult>;
    getPaymentMethod(): string;
    getTransactionFee(amount: number): number;
    isAvailable(): boolean;
}

export interface PaymentResult {
    success: boolean;
    transactionId: string;
    message: string;
    fee: number;
    method: string;
}