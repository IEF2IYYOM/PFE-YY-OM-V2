const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  number: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  gain: { type: String, required: true },
  used: { type: Boolean, default: false },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
