import React, { Component } from 'react';
import styled from 'styled-components';
import ReviewItem from './ReviewItem';
import ReviewEditItem from './ReviewEditItem';
import { H3 } from './Heading';

const Reviews = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  > li {
    margin-bottom: 20px;
  }
`;

const AddReview = styled.li`
  margin-bottom: 20px;
`;

export default class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingId: null,
    };

    this.handleEditReview = this.handleEditReview.bind(this);
    this.handleUpdateReview = this.handleUpdateReview.bind(this);
    this.handleCreateReview = this.handleCreateReview.bind(this);
    this.handleDeleteReview = this.handleDeleteReview.bind(this);
  }

  handleDeleteReview(id) {
    this.props.delete(id);
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
      <Reviews>
        <AddReview>
          <H3>Add your review:</H3>
          <ReviewEditItem
            onSave={this.handleCreateReview}
          /> 
        </AddReview>
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
                  onDelete={this.handleDeleteReview}
                />
              }
            </li>
          );
        })}
      </Reviews>
    );
  }
}
