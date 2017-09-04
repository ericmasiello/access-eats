import { call, put, takeLatest } from 'redux-saga/effects'
import { loadRestaurants } from '../util/api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchRestaurants() {
   try {
      const restaurants = yield call(loadRestaurants);
      yield put({type: 'RESTAURANTS_FETCH_SUCCEEDED', payload: restaurants});
   } catch (e) {
      yield put({type: 'RESTAURANTS_FETCH_FAILED', message: e.message});
   }
}


/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest('RESTAURANTS_FETCH_REQUESTED', fetchRestaurants);
}

export default mySaga;