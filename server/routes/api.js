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

api.get('/restaruants', loadAllRestaurants);
api.get('/restaruants/:id', loadRestaurantById);
api.get('/restaruants/:id/reviews', loadReviewsByRestaurantId);
api.post('/restaruants', createRestaurant);
api.delete('/restaruants/:id', removeRestaurnt);
api.put('/restaruants/:id', updateRestaurnt);

api.get('/reviews', loadAllReviews);
api.get('/reviews/:id', loadReviewById);
api.post('/reviews', createReview);
api.put('/reviews/:id', updateReview);
api.delete('/reviews/:id', removeReview);

module.exports = api;