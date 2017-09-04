import React, { Component } from 'react';

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
            {restaurant.name}
          </li>
        ))}
      </ul>
    );
  }
}

Restaurants.defaultProps = {
  restaurants: [],
};
