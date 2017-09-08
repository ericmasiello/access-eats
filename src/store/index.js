import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
import reducers from './reducers';

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducers,
  composer(
    applyMiddleware(sagaMiddleware)
  ),
);

// then run the saga
sagaMiddleware.run(mySaga);

export default store;
