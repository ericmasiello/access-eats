import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  combineReducers({
    restaurants: (state = [], action) => {
      if (action.type === 'RESTAURANTS_FETCH_SUCCEEDED') {
        return action.payload;
      }
      return state;
    },
  }),
  composer(
    applyMiddleware(sagaMiddleware)
  ),
);

// then run the saga
sagaMiddleware.run(mySaga);

export default store;
