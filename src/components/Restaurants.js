import React, { Component } from 'react';
import RestaurantList from './RestaurantList';
import RestaurantListItem from './RestaurantListItem';
import ButtonLink from './ButtonLink';
import Link from './Link';

export default class Restaurants extends Component {
  componentDidMount() {
    this.props.loadRestaurants();
  }

  render() {
    const { restaurants } = this.props;
    return (
      <div>
        <RestaurantList>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <Link to={`/restaurant/detail/${restaurant.id}`}>
                <RestaurantListItem
                  {...restaurant}
                />
              </Link>
            </li>
          ))}
        </RestaurantList>
        <footer className="nav">
          <ButtonLink to="restaurant/new">Add New Restaurant</ButtonLink>
        </footer>
      </div>
    );
  }
}

Restaurants.defaultProps = {
  restaurants: [],
};
