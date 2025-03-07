const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  sessionTitle: { type: String, required: true },
  speaker: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
});

module.exports = mongoose.model('Schedule', scheduleSchema);
