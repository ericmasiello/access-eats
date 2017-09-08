const express = require('express');
const {
  loadAllRestaurants,
  loadRestaurantById,
  createRestaurant,
  updateRestaurnt,
  removeRestaurnt,
} = require('../controllers/restaurantControllers');
const {
  loadAllReviews,
  loadReviewById,
  loadReviewsByRestaurantId,
  createReview,
  updateReview,
  removeReview,
} = require('../controllers/reviewControllers');

const api = express.Router();

api.get('/restaurants', loadAllRestaurants);
api.get('/restaurants/:id', loadRestaurantById);
api.get('/restaurants/:id/reviews', loadReviewsByRestaurantId);
api.post('/restaurants', createRestaurant);
api.delete('/restaurants/:id', removeRestaurnt);
api.put('/restaurants/:id', updateRestaurnt);

api.get('/reviews', loadAllReviews);
api.get('/reviews/:id', loadReviewById);
api.post('/reviews', createReview);
api.put('/reviews/:id', updateReview);
api.delete('/reviews/:id', removeReview);

module.exports = api;