const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);  // Set the secret key in your .env

// Function to create a payment intent
const createPaymentIntent = async (amount, currency) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,  // Amount in the smallest currency unit (e.g., cents for USD)
      currency,
    });
    return paymentIntent;
  } catch (error) {
    throw new Error(`Payment Intent creation failed: ${error.message}`);
  }
};

// Function to confirm payment intent
const confirmPaymentIntent = async (paymentIntentId, paymentMethodId) => {
  try {
    const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId, {
      payment_method: paymentMethodId,
    });
    return paymentIntent;
  } catch (error) {
    throw new Error(`Payment confirmation failed: ${error.message}`);
  }
};

module.exports = { createPaymentIntent, confirmPaymentIntent };
