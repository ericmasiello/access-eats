import { call, put } from 'redux-saga/effects';
import { fetchRestaurants, removeRestaurant } from '../util/api';

export const RESTAURANTS_FETCH_REQUESTED = 'RESTAURANTS_FETCH_REQUESTED';
export const RESTAURANTS_FETCH_SUCCEEDED = 'RESTAURANTS_FETCH_SUCCEEDED';
export const RESTAURANTS_FETCH_FAILED = 'RESTAURANTS_FETCH_FAILED';
export const RESTAURANT_DELETE_REQUESTED = 'RESTAURANT_DELETE_REQUESTED';
export const RESTAURANT_DELETE_SUCCEEDED = 'RESTAURANT_DELETE_SUCCEEDED';
export const RESTAURANT_DELETE_FAILED = 'RESTAURANT_DELETE_FAILED';

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

export function deleteRestaurant(id) {
  return {
    type: RESTAURANT_DELETE_REQUESTED,
    payload: id,
  };
}

export function deleteRestaurantSuccess(id) {
  return {
    type: RESTAURANT_DELETE_SUCCEEDED,
    payload: id
  };
}

export function deleteRestaurantFailure(error) {
  console.error(error);
  return {
    type: RESTAURANT_DELETE_FAILED,
    error: error.message,
  };
}

export function* deleteRestaurantWorker(action) {
   try {
      const id = action.payload;
      yield call(removeRestaurant, id);
      yield put(deleteRestaurantSuccess(id));
   } catch (error) {
      yield put(deleteRestaurantFailure(error));
   }
}

export default function restaurantsReducer(state = [], action = {}) {
  switch(action.type) {
    case RESTAURANTS_FETCH_SUCCEEDED:
      return action.payload;
    case RESTAURANT_DELETE_SUCCEEDED:
      return state.filter(restaurant => restaurant.id !== action.payload);
    default:
      return state;
  }
}
