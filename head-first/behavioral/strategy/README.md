# Strategy Pattern

## Overview

The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it. It's particularly useful when you have multiple ways to perform a task and want to choose the approach at runtime.

## When to Use

- When you have multiple ways to perform a task
- When you want to avoid conditional statements for selecting algorithms
- When you need to switch algorithms at runtime
- When you want to isolate algorithm implementation details from clients

## Key Components

### 1. Strategy Interface
Defines a common interface for all concrete strategies.

### 2. Concrete Strategies
Implement different algorithms using the strategy interface.

### 3. Context
Maintains a reference to a strategy object and delegates algorithm execution to it.

## Implementation Examples

### 1. Payment Processing
Different payment methods (Credit Card, PayPal, Bank Transfer, Cryptocurrency) with varying fees and processing times.

```typescript
const processor = new PaymentProcessor();

// Use credit card strategy
const creditCard = new CreditCardStrategy('4532123456789012', '12/25', '123', 'John Doe');
processor.setPaymentStrategy(creditCard);
await processor.processPayment(100.00);

// Switch to PayPal strategy
const paypal = new PayPalStrategy('user@example.com', 'password');
processor.setPaymentStrategy(paypal);
await processor.processPayment(75.00);
