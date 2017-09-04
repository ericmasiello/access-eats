import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './App.css';
import store from './store/';
import Main from './components/Main';
import RestaurantsContainer from './containers/RestaurantsContainer';
import RestaurantDetailContainer from './containers/RestaurantDetailContainer';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Main>
          <Route exact path="/" component={RestaurantsContainer} />
          <Route path="/restaurant/:id" component={RestaurantDetailContainer} />
        </Main>
      </Router>
    </Provider>
  )
}
