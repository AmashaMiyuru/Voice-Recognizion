const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: String,
  description: String,
  recommendedMileage: Number,
  carTypes: [String],
});

module.exports = mongoose.model('Service', ServiceSchema);
