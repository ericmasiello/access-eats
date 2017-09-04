import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store/';

class App extends Component {
  state = {
    restaurants: [],
  };
  componentDidMount() {
    store.subscribe(() => (this.setState({
      restaurants: store.getState().restaurants,
    })));
    store.dispatch({ type: 'RESTAURANTS_FETCH_REQUESTED' }); 
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to AccessEats</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {this.state.restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              {restaurant.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
