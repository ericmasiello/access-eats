import React, { Component } from 'react';

export default class RestaurantDetail extends Component {
  componentDidMount() {
    this.props.loadRestaurantDetail(this.props.match.params.id);
  }
  render() {
    const { restaurant, match: { params: { id } } } = this.props;
    const { reviews = [] } = restaurant;
    return (
      <div>
        <h1>{restaurant.name}</h1>
        <div>Price: {restaurant.price}</div>
        <div>Stars {restaurant.stars}</div>
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              {review.message}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

RestaurantDetail.defaultProps = {
  restaurant: {
    reviews: [],
  },
};
