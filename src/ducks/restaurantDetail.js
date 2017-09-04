import { call, put } from 'redux-saga/effects';
import {
  fetchRestaurantDetail,
} from '../util/api';

export const RESTAURANT_DETAIL_FETCH_REQUESTED = 'RESTAURANT_DETAIL_FETCH_REQUESTED';
export const RESTAURANT_DETAIL_FETCH_SUCCEEDED = 'RESTAURANT_DETAIL_FETCH_SUCCEEDED';
export const RESTAURANT_DETAIL_FETCH_FAILED = 'RESTAURANT_DETAIL_FETCH_FAILED';

export function loadRestaurantDetail(id) {
  return {
    type: RESTAURANT_DETAIL_FETCH_REQUESTED,
    payload: id,
  };
}

export function loadRestaurantDetailSuccess(restaurantDetail) {
  return {
    type: RESTAURANT_DETAIL_FETCH_SUCCEEDED,
    payload: restaurantDetail,
  };
}

export function loadRestaurantDetailFailure(error){
  console.error(error);
  return {
    type: RESTAURANT_DETAIL_FETCH_FAILED,
    error: error.message,
  };
}

export function* loadRestaurantDetailWorker(action) {
  try {
    const restaurantDetail = yield call(fetchRestaurantDetail, action.payload);
    yield put(loadRestaurantDetailSuccess(restaurantDetail));
 } catch (error) {
    yield put(loadRestaurantDetailFailure(error));
 }
}

export default function restaurantDetailReducer(state = {}, action = {}) {
  if (action.type === RESTAURANT_DETAIL_FETCH_REQUESTED) {
    return {};
  }
  if (action.type === RESTAURANT_DETAIL_FETCH_SUCCEEDED) {
    return action.payload;
  }

  return state;
}

