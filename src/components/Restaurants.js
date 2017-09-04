import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Restaurants extends Component {
  componentDidMount() {
    this.props.loadRestaurants();
  }

  render() {
    const { restaurants } = this.props;
    return (
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Link to={`/restaurant/${restaurant.id}`}>{restaurant.name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

Restaurants.defaultProps = {
  restaurants: [],
};
