/**
 * Strategy Pattern Implementation
 * 
 * The Strategy pattern defines a family of algorithms, encapsulates each one,
 * and makes them interchangeable. It lets the algorithm vary independently
 * from clients that use it.
 */

import { CreditCardStrategy } from "./behavior/credit-card";
import { PayPalStrategy } from "./behavior/paypal";
import { PaymentProcessor } from "./Payment";

/**
 * Example usage and demonstration functions
 */
export class StrategyExample {
    public static async demonstrate(): Promise<void> {
        console.log('\n=== Strategy Pattern Demonstration ===');

        // Payment Processing Example
        console.log('\n1. Payment Processing Strategies:');
        const paymentProcessor = new PaymentProcessor();
        const amount = 100.00;

        // Show available strategies
        const availableStrategies = paymentProcessor.getAvailableStrategies();
        console.log('Available payment methods:');
        availableStrategies.forEach(strategy => {
            console.log(`  - ${strategy.getPaymentMethod()} (Fee: $${strategy.getTransactionFee(amount).toFixed(2)})`);
        });

        // Get recommendation
        const recommended = paymentProcessor.recommendStrategy(amount);
        paymentProcessor.setPaymentStrategy(recommended);
        await paymentProcessor.processPayment(amount);

        // Try different strategies
        const creditCard = new CreditCardStrategy('4532123456789012', '12/25', '123', 'Alice Smith');
        paymentProcessor.setPaymentStrategy(creditCard);
        await paymentProcessor.processPayment(75.00);

        const paypal = new PayPalStrategy('alice@example.com', 'securepassword');
        paymentProcessor.setPaymentStrategy(paypal);
        await paymentProcessor.processPayment(50.00);

        console.log('\nPayment History:');
        paymentProcessor.getPaymentHistory().forEach((payment, index) => {
            console.log(`  ${index + 1}. ${payment.method}: $${payment.fee.toFixed(2)} fee - ${payment.transactionId}`);
        });
        console.log(`Total fees paid: $${paymentProcessor.getTotalTransactionFees().toFixed(2)}`);
    }

    public static async getResults(): Promise<any> {
        // Payment strategies
        const paymentProcessor = new PaymentProcessor();
        const amount = 100;
        
        const strategies = paymentProcessor.getAvailableStrategies().map(strategy => ({
            method: strategy.getPaymentMethod(),
            fee: strategy.getTransactionFee(amount),
            available: strategy.isAvailable()
        }));

        // Process a test payment
        const recommended = paymentProcessor.recommendStrategy(amount);
        paymentProcessor.setPaymentStrategy(recommended);
        const paymentResult = await paymentProcessor.processPayment(amount);

        return {
            pattern: 'Strategy',
            description: 'Defines a family of algorithms and makes them interchangeable',
            examples: {
                payment: {
                    availableStrategies: strategies,
                    testPayment: paymentResult,
                    recommendedMethod: recommended.getPaymentMethod()
                },
            },
            benefits: [
                'Algorithms can vary independently from clients',
                'Eliminates conditional statements',
                'Provides different implementations of same behavior',
                'Runtime algorithm selection'
            ],
            components: [
                'Strategy interface',
                'Concrete strategies',
                'Context class'
            ]
        };
    }
}
