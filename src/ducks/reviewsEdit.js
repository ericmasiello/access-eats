import { call, put } from 'redux-saga/effects';
import {
  createNewReview,
  updateReview,
  removeReview,
} from '../util/api';

export const REVIEW_CREATE_REQUESTED = 'REVIEW_CREATE_REQUESTED';
export const REVIEW_CREATE_SUCCEEDED = 'REVIEW_CREATE_SUCCEEDED';
export const REVIEW_CREATE_FAILED = 'REVIEW_CREATE_FAILED';
export const REVIEW_EDIT_REQUESTED = 'REVIEW_EDIT_REQUESTED';
export const REVIEW_EDIT_SUCCEEDED = 'REVIEW_EDIT_SUCCEEDED';
export const REVIEW_EDIT_FAILED = 'REVIEW_EDIT_FAILED';
export const REVIEW_DELETE_REQUESTED = 'REVIEW_DELETE_REQUESTED';
export const REVIEW_DELETE_SUCCEEDED = 'REVIEW_DELETE_SUCCEEDED';
export const REVIEW_DELETE_FAILED = 'REVIEW_DELETE_FAILED';

export function createReview(reviewProps) {
  return {
    type: REVIEW_CREATE_REQUESTED,
    payload: reviewProps,
  };
}

export function createReviewSuccess(review) {
  return {
    type: REVIEW_CREATE_SUCCEEDED,
    payload: review,
  };
}

export function createReviewFailure(error) {
  console.error(error);
  return {
    type: REVIEW_CREATE_FAILED,
    error: error.message,
  };
};

export function* createReviewWorker(action) {
  try {
    const review = yield call(createNewReview, action.payload);
    yield put(createReviewSuccess(review));
  } catch (error) {
    yield put(createReviewFailure(error));
  }
}

export function editReview(reviewProps) {
  return {
    type: REVIEW_EDIT_REQUESTED,
    payload: reviewProps,
  };
}

export function editReviewSuccess(review) {
  return {
    type: REVIEW_EDIT_SUCCEEDED,
    payload: review,
  };
}

export function editReviewFailure(error) {
  console.error(error);
  return {
    type: REVIEW_EDIT_FAILED,
    error: error.message,
  };
};

export function* editReviewWorker(action) {
  try {
    const id = action.payload.id;
    delete action.payload.id;
    const review = yield call(updateReview, id, action.payload);
    yield put(editReviewSuccess(review));
  } catch (error) {
    yield put(editReviewFailure(error));
  }
}

export function deleteReview(id) {
  return {
    type: REVIEW_DELETE_REQUESTED,
    payload: id,
  };
}

export function deleteReviewSuccess(id) {
  return {
    type: REVIEW_DELETE_SUCCEEDED,
    payload: id,
  };
}

export function deleteReviewFailure(error) {
  console.error(error);
  return {
    type: REVIEW_DELETE_FAILED,
    error: error.message,
  };
};

export function* deleteReviewWorker(action) {
  try {
    const id = action.payload;
    yield call(removeReview, id);
    yield put(deleteReviewSuccess(id));
  } catch (error) {
    yield put(deleteReviewFailure(error));
  }
}