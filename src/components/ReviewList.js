import React, { Component } from 'react';
import ReviewItem from './ReviewItem';
import ReviewEditItem from './ReviewEditItem';

export default class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingId: null,
    };

    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit(id) {
    this.setState({
      editingId: id,
    });
  }
  render() {
    const { reviews } = this.props;
    return (
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            {review.id === this.state.editingId ? 
              <ReviewEditItem
                {...review}
              /> :
              <ReviewItem 
                {...review}
                onEdit={this.handleEdit}
              />
            }
          </li>
        ))}
      </ul>
    );
  }
}
