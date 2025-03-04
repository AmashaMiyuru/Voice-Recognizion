const mongoose = require('mongoose');

// Define the Booking Schema
const BookingSchema = new mongoose.Schema({
  userId: String,
  serviceId: String,
  carModel: String,
  mileage: Number,
  date: Date,
  status: { type: String, default: 'pending' },
});

// Create and export the Booking model
module.exports = mongoose.model('Booking', BookingSchema);
