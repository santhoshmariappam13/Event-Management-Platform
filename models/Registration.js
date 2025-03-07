// models/registration.js
const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  ticketType: { type: String, required: true },
  status: { type: String, default: 'registered' },
});

module.exports = mongoose.model('Registration', registrationSchema);
