import { call, put } from 'redux-saga/effects';
import {
  createNewRestaurant,
  updateRestaurant,
} from '../util/api';

export const RESTAURANT_CREATE_EDIT_RESET = 'RESTAURANT_CREATE_EDIT_RESET';
export const RESTAURANT_CREATE_REQUESTED = 'RESTAURANT_CREATE_REQUESTED';
export const RESTAURANT_CREATE_REQUESTED_SUCCEEDED = 'RESTAURANT_CREATE_REQUESTED_SUCCEEDED';
export const RESTAURANT_CREATE_REQUESTED_FAILED = 'RESTAURANT_CREATE_REQUESTED_FAILED';
export const RESTAURANT_EDIT_REQUESTED = 'RESTAURANT_EDIT_REQUESTED';
export const RESTAURANT_EDIT_REQUESTED_SUCCEEDED = 'RESTAURANT_EDIT_REQUESTED_SUCCEEDED';
export const RESTAURANT_EDIT_REQUESTED_FAILED = 'RESTAURANT_EDIT_REQUESTED_FAILED';

export function createEditReset() {
  return {
    type: RESTAURANT_CREATE_EDIT_RESET,
  };
}

export function editRestaurant(restaurant) {
  return {
    type: RESTAURANT_EDIT_REQUESTED,
    payload: restaurant,
  }
}

export function editRestaurantSuccess(restaurant) {
  return {
    type: RESTAURANT_EDIT_REQUESTED_SUCCEEDED,
    payload: restaurant,
  };
}

export function editRestaurantFailure(error) {
  console.error(error);
  return {
    type: RESTAURANT_EDIT_REQUESTED_FAILED,
    error: error.message,
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

function normalizeRestaurant(restaurant) {
  const numericKeys = ['service', 'wheelchairAccessAX', 'hardOfHearingAX', 'lowVisionAX'];
  const keys = Array.from(Object.getOwnPropertyNames(restaurant));
  
  const normalizedRestaurant = keys.reduce((acc, key) => {
    if (!restaurant[key]) {
      acc[key] = null;
    } else if(numericKeys.indexOf(key) > -1) {
      // parse as number
      acc[key] = parseFloat(restaurant[key]);
    } else {
      acc[key] = restaurant[key];
    }
    return acc;
  }, {});

  return normalizedRestaurant;
}

export function* createRestaurantWorker(action) {
  try {
    const restaurant = yield call(createNewRestaurant, normalizeRestaurant(action.payload));
    yield put(createRestaurantSuccess(restaurant));
  } catch (error) {
    yield put(createRestaurantFailure(error));
  }
}

export function* editRestaurantWorker(action) {
  try {
    const id = action.payload.id;
    delete action.payload.id;
    const restaurant = yield call(updateRestaurant, id, normalizeRestaurant(action.payload));
    yield put(editRestaurantSuccess(restaurant));
  } catch (error) {
    yield put(editRestaurantFailure(error));
  }
}

export default function restaurantCreateEditReducer(state = null, action = {}) {
  switch(action.type) {
    case RESTAURANT_CREATE_EDIT_RESET:
    case RESTAURANT_CREATE_REQUESTED:
    case RESTAURANT_CREATE_REQUESTED_FAILED:
    case RESTAURANT_EDIT_REQUESTED:
    case RESTAURANT_EDIT_REQUESTED_FAILED:
      return null;
    case RESTAURANT_CREATE_REQUESTED_SUCCEEDED:
    case RESTAURANT_EDIT_REQUESTED_SUCCEEDED:
      return action.payload;
    default:
      return state;
  }
}