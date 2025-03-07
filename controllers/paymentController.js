
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Transaction = require('../models/Transaction');
const Ticket = require('../models/ticket');
const User = require('../models/user');
const { sendEmail } = require('../utils/emailUtils');
const { logInfo, logError } = require('../utils/logger');

const processPayment = async (req, res) => {
  const { ticketId, token } = req.body;

  const ticket = await Ticket.findById(ticketId);
  const amount = ticket.price;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // in cents
      currency: 'usd',
      payment_method: token,
      confirm: true,
    });

    const transaction = new Transaction({
      userId: req.userId,
      amount,
      paymentMethod: 'Stripe',
    });
    await transaction.save();

    ticket.status = 'purchased';
    await ticket.save();

    // Send a confirmation email
    const user = await User.findById(req.userId);
    await sendEmail(
      user.email,
      'Payment Confirmation',
      `Your payment of $${amount} for the ticket is successful.`,
      `<h3>Your payment was successful for the ticket!</h3><p>Amount: $${amount}</p>`
    );

    logInfo(`Payment successful for ticket ${ticketId} by user ${req.userId}`);

    res.status(200).json({ success: true, paymentIntent });
  } catch (error) {
    logError(`Payment failed for ticket ${ticketId} by user ${req.userId}: ${error.message}`);
    res.status(500).json({ message: 'Payment failed', error: error.message });
  }
};

module.exports = { processPayment };
