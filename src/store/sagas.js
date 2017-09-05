import { all, takeLatest } from 'redux-saga/effects'
import {
  RESTAURANTS_FETCH_REQUESTED,
  loadRestaurantsWorker,
} from '../ducks/restaurants';
import {
  RESTAURANT_DETAIL_FETCH_REQUESTED,
  loadRestaurantDetailWorker,
} from '../ducks/restaurantDetail';

function* mySaga() {
  yield all([
    takeLatest(RESTAURANTS_FETCH_REQUESTED, loadRestaurantsWorker),
    takeLatest(RESTAURANT_DETAIL_FETCH_REQUESTED, loadRestaurantDetailWorker)
  ]);
}

export default mySaga;