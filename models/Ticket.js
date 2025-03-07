// models/ticket.js
const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  ticketType: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: String, default: 'purchased' },
});

module.exports = mongoose.model('Ticket', ticketSchema);
