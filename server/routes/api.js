const express = require('express');
const notFoundMiddleware = require('../middleware/notFound');
const {
  loadAllRestaurants,
  loadRestaurantById,
  createRestaurant,
  updateRestaurant,
  removeRestaurant,
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

/*
 Assignment:

 Using the following controllers:

 * loadAllRestaurants
 * loadRestaurantById
 * createRestaurant
 * updateRestaurant
 * removeRestaurant
 * loadReviewsByRestaurantId

 * loadAllReviews
 * loadReviewById 
 * createReview
 * updateReview
 * removeReview

 Pair each controller with the appropriate endpoint by defining
 1. The HTTP verb (e.g. get, put, post, delete)
 2. The relative path

 Follow the examples below. The pattern is:

 api.[verb]('/[path]', [controllerName]);
*/

api.get('/restaurants', loadAllRestaurants);
// Add missing restaurants endpoints


api.get('/reviews/:id', loadReviewById);
// Add missing review endpoints

api.use(notFoundMiddleware);

module.exports = api;