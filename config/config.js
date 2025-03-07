module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret', // JWT secret for authentication
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || 'your_stripe_secret_key', // Stripe secret for payments
  };
  