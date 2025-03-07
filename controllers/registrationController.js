
const Registration = require('../models/Registration');

const registerForEvent = async (req, res) => {
  const { eventId, ticketType } = req.body;
  const registration = new Registration({
    eventId,
    userId: req.userId,
    ticketType,
  });

  await registration.save();
  res.status(201).json({ message: 'Registered successfully' });
};

module.exports = { registerForEvent };
