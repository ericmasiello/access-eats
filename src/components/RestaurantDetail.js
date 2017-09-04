import React, { Component } from 'react';

export default class RestaurantDetail extends Component {
  componentDidMount() {
    this.props.loadRestaurantDetail(this.props.match.params.id);
  }
  render() {
    const { restaurant: {
        name = '',
        stars = 0,
        price = '',
        reviews = []
      }
    } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <div>Price: {price}</div>
        <div>Stars {stars}</div>
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
