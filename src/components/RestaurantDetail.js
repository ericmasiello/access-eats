import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReviewListContainer from '../containers/ReviewListContainer';

export default class RestaurantDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { isDeleting: false };
    this.deleteRestaurant = this.deleteRestaurant.bind(this);
  }
  componentDidMount() {
    this.props.load(this.props.match.params.id);
  }
  deleteRestaurant(event) {
    this.setState({ isDeleting: true });
    this.props.delete(this.props.match.params.id);
    setTimeout(() => this.props.history.replace('/'), 500);
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
        {this.state.isDeleting ? 
          <div>Deleting...</div> :
          <div>
            <section>
              <h1>{name} 
                <small>
                  <Link to={`/restaurant/edit/${id}`}>Edit</Link>
                </small>
                <small>
                  <button
                    onClick={this.deleteRestaurant}
                  >
                    Delete
                  </button>
                </small>
              </h1>
              <div>Price: {price}</div>
              <div>Stars {stars}</div>
            </section>
            <section>
              <h2>Reviews</h2>
              <ReviewListContainer
                reviews={reviews}
                restaurantId={id}
              />
            </section>
          </div>
        }
      </div>
    );
  }
}

RestaurantDetail.defaultProps = {
  restaurant: {
    reviews: [],
  },
};
