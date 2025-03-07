// controllers/eventController.js
const Event = require('../models/event');

const createEvent = async (req, res) => {
  const { title, description, date, location, ticketTypes } = req.body;

  const newEvent = new Event({ title, description, date, location, ticketTypes, createdBy: req.userId });
  await newEvent.save();
  
  res.status(201).json({ event: newEvent });
};

const getEvents = async (req, res) => {
  const events = await Event.find();
  res.status(200).json(events);
};

module.exports = { createEvent, getEvents };
