const express = require('express');
const {
  loadAllRestaurants,
  loadRestaurantById,
  createRestaurant,
} = require('../controllers/restaurantControllers');
const {
  loadAllReviews,
  loadReviewsByRestaurantId,
  createReview,
} = require('../controllers/reviewControllers');

const api = express.Router();

api.get('/restaruants', loadAllRestaurants);
api.get('/restaruants/:id', loadRestaurantById);
api.get('/restaruants/:id/reviews', loadReviewsByRestaurantId);
api.post('/restaruants', createRestaurant);
// TODO add delete and update

api.get('/reviews', loadAllReviews);
api.post('/reviews', createReview);

module.exports = api;