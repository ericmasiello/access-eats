import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReviewList from './ReviewList';

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
      },
      match: { params: { id } },
    } = this.props;
    return (
      <div>
        <section>
          <h1>{name} <small><Link to={`/restaurant/edit/${id}`}>Edit</Link></small></h1>
          <div>Price: {price}</div>
          <div>Stars {stars}</div>
        </section>
        <section>
          <h2>Reviews</h2>
          <ReviewList reviews={reviews} />
        </section>
      </div>
    );
  }
}

RestaurantDetail.defaultProps = {
  restaurant: {
    reviews: [],
  },
};
