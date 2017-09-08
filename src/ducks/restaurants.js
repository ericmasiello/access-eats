import { call, put } from 'redux-saga/effects';
import { fetchRestaurants } from '../util/api';

export const RESTAURANTS_FETCH_REQUESTED = 'RESTAURANTS_FETCH_REQUESTED';
export const RESTAURANTS_FETCH_SUCCEEDED = 'RESTAURANTS_FETCH_SUCCEEDED';
export const RESTAURANTS_FETCH_FAILED = 'RESTAURANTS_FETCH_FAILED';

export function loadRestaurants() {
  return {
    type: RESTAURANTS_FETCH_REQUESTED,
  };
}

export function loadRestaurantsSuccess(restaurants) {
  return {
    type: RESTAURANTS_FETCH_SUCCEEDED,
    payload: restaurants
  };
}

export function loadRestaurantsFailure(error) {
  console.error(error);
  return {
    type: RESTAURANTS_FETCH_FAILED,
    error: error.message,
  };
}

export function* loadRestaurantsWorker() {
   try {
      const restaurants = yield call(fetchRestaurants);
      yield put(loadRestaurantsSuccess(restaurants));
   } catch (error) {
      yield put(loadRestaurantsFailure(error));
   }
}

export default function restaurantsReducer(state = [], action = {}) {
  if (action.type === RESTAURANTS_FETCH_SUCCEEDED) {
    return action.payload;
  }
  return state;
}
