import { all, takeLatest } from 'redux-saga/effects'
import {
  RESTAURANTS_FETCH_REQUESTED,
  loadRestaurantsWorker,
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
  createReviewWorker,
  editReviewWorker,
} from '../ducks/reviewsEdit';

function* mySaga() {
  yield all([
    takeLatest(RESTAURANTS_FETCH_REQUESTED, loadRestaurantsWorker),
    takeLatest(RESTAURANT_DETAIL_FETCH_REQUESTED, loadRestaurantDetailWorker),
    takeLatest(RESTAURANT_CREATE_REQUESTED, createRestaurantWorker),
    takeLatest(RESTAURANT_EDIT_REQUESTED, editRestaurantWorker),
    takeLatest(REVIEW_CREATE_REQUESTED, createReviewWorker),
    takeLatest(REVIEW_EDIT_REQUESTED, editReviewWorker),
  ]);
}

export default mySaga;