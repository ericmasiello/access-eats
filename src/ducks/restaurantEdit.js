import { call, put } from 'redux-saga/effects';
import { createNewRestaurant } from '../util/api';

export const RESTAURANT_CREATE_EDIT_RESET = 'RESTAURANT_CREATE_EDIT_RESET';
export const RESTAURANT_CREATE_REQUESTED = 'RESTAURANT_CREATE_REQUESTED';
export const RESTAURANT_CREATE_REQUESTED_SUCCEEDED = 'RESTAURANT_CREATE_REQUESTED_SUCCEEDED';
export const RESTAURANT_CREATE_REQUESTED_FAILED = 'RESTAURANT_CREATE_REQUESTED_FAILED';

export function createEditReset() {
  return {
    type: RESTAURANT_CREATE_EDIT_RESET,
  };
}

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
    const restaurant = yield call(createNewRestaurant, action.payload);
    yield put(createRestaurantSuccess(restaurant));
  } catch (error) {
    yield put(createRestaurantFailure(error));
  }
}

export default function restaurantCreateEditReducer(state = null, action = {}) {
  switch(action.type) {
    case RESTAURANT_CREATE_REQUESTED:
    case RESTAURANT_CREATE_EDIT_RESET:
    case RESTAURANT_CREATE_REQUESTED_FAILED:
      return null;
    case RESTAURANT_CREATE_REQUESTED_SUCCEEDED:
      return action.payload;
    default:
      return state;
  }
}