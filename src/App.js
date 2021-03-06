import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import './App.css';
import store from './store/';
import MainContainer from './containers/MainContainer';
import RestaurantsContainer from './containers/RestaurantsContainer';
import RestaurantDetailContainer from './containers/RestaurantDetailContainer';
import RestaurantNewContainer from './containers/RestaurantNewContainer';
import RestaurantEditContainer from './containers/RestaurantEditContainer';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainContainer>
          <Switch>
            <Route exact path="/" component={RestaurantsContainer} />
            <Route path="/restaurant/new" component={RestaurantNewContainer} />
            <Route path="/restaurant/detail/:id" component={RestaurantDetailContainer} />
            <Route path="/restaurant/edit/:id" component={RestaurantEditContainer} />
            <Route component={NotFound} />
          </Switch>
        </MainContainer>
      </Router>
    </Provider>
  )
}
