import { all, takeLatest } from 'redux-saga/effects'
import {
  RESTAURANTS_FETCH_REQUESTED,
  RESTAURANT_DELETE_REQUESTED,
  loadRestaurantsWorker,
  deleteRestaurantWorker,
} from '../ducks/restaurants';
import {
  RESTAURANT_DETAIL_FETCH_REQUESTED,
  loadRestaurantDetailWorker,
} from '../ducks/restaurantDetail';
import {
  RESTAURANT_CREATE_REQUESTED,
  createRestaurantWorker,
  RESTAURANT_EDIT_REQUESTED,
  editRestaurantWorker,
} from '../ducks/restaurantEdit'

import {
  REVIEW_CREATE_REQUESTED,
  REVIEW_EDIT_REQUESTED,
  REVIEW_DELETE_REQUESTED,
  createReviewWorker,
  editReviewWorker,  
  deleteReviewWorker,
} from '../ducks/reviewsEdit';

function* mySaga() {
  yield all([
    takeLatest(RESTAURANTS_FETCH_REQUESTED, loadRestaurantsWorker),
    takeLatest(RESTAURANT_DETAIL_FETCH_REQUESTED, loadRestaurantDetailWorker),
    takeLatest(RESTAURANT_CREATE_REQUESTED, createRestaurantWorker),
    takeLatest(RESTAURANT_EDIT_REQUESTED, editRestaurantWorker),
    takeLatest(REVIEW_CREATE_REQUESTED, createReviewWorker),
    takeLatest(REVIEW_EDIT_REQUESTED, editReviewWorker),
    takeLatest(REVIEW_DELETE_REQUESTED, deleteReviewWorker),
    takeLatest(RESTAURANT_DELETE_REQUESTED, deleteRestaurantWorker),
  ]);
}

export default mySaga;