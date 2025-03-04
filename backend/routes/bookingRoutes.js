const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// POST request to create a new booking
router.post('/book', async (req, res) => {
  const { userId, serviceId, carModel, mileage, date } = req.body;

  // Validate the incoming request
  if (!userId || !serviceId || !carModel || !mileage || !date) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Create a new booking from the request body
    const newBooking = new Booking({
      userId,
      serviceId,
      carModel,
      mileage,
      date,
    });

    // Save the booking to the database
    await newBooking.save();

    // Return the saved booking in the response
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
