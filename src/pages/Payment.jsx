import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';

const stripePromise = loadStripe('your_stripe_publishable_key');

function Payment() {
  const [paymentIntent, setPaymentIntent] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const createPaymentIntent = async () => {
      const response = await fetch('/api/payments/create-intent', {
        method: 'POST',
      });
      const data = await response.json();
      setPaymentIntent(data.clientSecret);
    };

    createPaymentIntent();
  }, []);

  if (!paymentIntent) return <div className="text-center py-10">Loading...</div>;

  return (
    <Elements stripe={stripePromise}>
      <div className="payment-container max-w-lg mx-auto mt-10">
        <h1 className="text-2xl font-semibold text-center mb-6">Complete Your Payment</h1>
        <CheckoutForm paymentIntent={paymentIntent} />
      </div>
    </Elements>
  );
}

export default Payment;
