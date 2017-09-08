import React, { Component } from 'react';
import ReviewItem from './ReviewItem';
import ReviewEditItem from './ReviewEditItem';

export default class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingId: null,
    };

    this.handleEditReview = this.handleEditReview.bind(this);
    this.handleUpdateReview = this.handleUpdateReview.bind(this);
    this.handleCreateReview = this.handleCreateReview.bind(this);
  }

  handleEditReview(id) {
    this.setState({
      editingId: id,
    });
  }

  handleUpdateReview(restaurant) {
    this.props.update({
      ...restaurant,
      stars: Number.parseFloat(restaurant.stars),
      restaurantId: this.props.restaurantId,
    });
    this.setState({
      editingId: null,
    });
  }

  handleCreateReview(restaurant) {
    delete restaurant.id;
    this.props.create({
      ...restaurant,
      stars: Number.parseFloat(restaurant.stars),
      restaurantId: this.props.restaurantId,
    });
  }

  render() {
    const { reviews } = this.props;
    return (
      <ul>
        <li>
          New comment:
          <ReviewEditItem
            onSave={this.handleCreateReview}
          /> 
        </li>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              {review.id === this.state.editingId ? 
                <ReviewEditItem
                  {...review}
                  onSave={this.handleUpdateReview}
                  saveMessage="Update"
                /> :
                <ReviewItem 
                  {...review}
                  onEdit={this.handleEditReview}
                />
              }
            </li>
          );
        })}
      </ul>
    );
  }
}
