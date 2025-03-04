const Service = require('../models/Service');

async function getRecommendedService({ carModel, mileage }) {
  const services = await Service.find({});
  return services.filter(service => mileage >= service.recommendedMileage);
}

module.exports = { getRecommendedService };