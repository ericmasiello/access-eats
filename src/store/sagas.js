import { takeLatest } from 'redux-saga/effects'
import {
  RESTAURANTS_FETCH_REQUESTED,
  loadRestaurantsWorker,
} from '../ducks/restaurants';
import {
  RESTAURANT_DETAIL_FETCH_REQUESTED,
  loadRestaurantDetailWorker,
} from '../ducks/restaurantDetail';


/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield [
    takeLatest(RESTAURANTS_FETCH_REQUESTED, loadRestaurantsWorker),
    takeLatest(RESTAURANT_DETAIL_FETCH_REQUESTED, loadRestaurantDetailWorker)
  ];
}

export default mySaga;