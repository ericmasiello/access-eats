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
} from '../ducks/restaurantEdit'

function* mySaga() {
  yield all([
    takeLatest(RESTAURANTS_FETCH_REQUESTED, loadRestaurantsWorker),
    takeLatest(RESTAURANT_DETAIL_FETCH_REQUESTED, loadRestaurantDetailWorker),
    takeLatest(RESTAURANT_CREATE_REQUESTED, createRestaurantWorker)
  ]);
}

export default mySaga;