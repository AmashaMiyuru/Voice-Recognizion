const express = require('express');
const { getRecommendedService } = require('../services/recommendationService');
const router = express.Router();

router.post('/recommend', async (req, res) => {
  try {
    const recommendation = await getRecommendedService(req.body);
    res.json(recommendation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
