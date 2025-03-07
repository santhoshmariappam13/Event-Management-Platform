
const Ticket = require('../models/ticket');

const buyTicket = async (req, res) => {
  const { eventId, ticketType } = req.body;
  
  const ticket = new Ticket({
    eventId,
    userId: req.userId,
    ticketType,
    price: 200, 
  });

  await ticket.save();
  res.status(201).json({ message: 'Ticket purchased successfully', ticket });
};

module.exports = { buyTicket };
