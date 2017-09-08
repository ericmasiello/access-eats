import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Restaurants extends Component {
  componentDidMount() {
    this.props.loadRestaurants();
  }

  render() {
    const { restaurants } = this.props;
    return (
      <div>
        <div className="nav">
          <Link to="restaurant/new">Add New Restaurant</Link>
        </div>
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <Link to={`/restaurant/detail/${restaurant.id}`}>{restaurant.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Restaurants.defaultProps = {
  restaurants: [],
};
