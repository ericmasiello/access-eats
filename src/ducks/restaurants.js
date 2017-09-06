import { call, put } from 'redux-saga/effects';
import {
  fetchRestaurants,
  createNewRestaurant,
} from '../util/api';

export const RESTAURANTS_FETCH_REQUESTED = 'RESTAURANTS_FETCH_REQUESTED';
export const RESTAURANTS_FETCH_SUCCEEDED = 'RESTAURANTS_FETCH_SUCCEEDED';
export const RESTAURANTS_FETCH_FAILED = 'RESTAURANTS_FETCH_FAILED';

export const RESTAURANT_CREATE_REQUESTED = 'RESTAURANT_CREATE_REQUESTED';
export const RESTAURANT_CREATE_REQUESTED_SUCCEEDED = 'RESTAURANT_CREATE_REQUESTED_SUCCEEDED';
export const RESTAURANT_CREATE_REQUESTED_FAILED = 'RESTAURANT_CREATE_REQUESTED_FAILED';

export function createRestaurant(restaurantProps) {
  return {
    type: RESTAURANT_CREATE_REQUESTED,
    payload: restaurantProps,
  };
}

export function createRestaurantSuccess(restaurant) {
  return {
    type: RESTAURANT_CREATE_REQUESTED_SUCCEEDED,
    payload: restaurant,
  };
}

export function createRestaurantFailure(error) {
  console.error(error);
  return {
    type: RESTAURANT_CREATE_REQUESTED_FAILED,
    error: error.message,
  };
}

export function* createRestaurantWorker(action) {
  try {
    debugger;
    const restaurant = yield call(createNewRestaurant, action.payload);
    yield put(createRestaurantSuccess(restaurant));
 } catch (error) {
    yield put(createRestaurantFailure(error));
 }
}

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
