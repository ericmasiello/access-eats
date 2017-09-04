import React from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import store from './store/';
import RestaurantsContainer from './containers/RestaurantsContainer';

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to AccessEats</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RestaurantsContainer />
      </div>
    </Provider>
  )
}
