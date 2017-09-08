import { connect } from 'react-redux';
import ReviewList from '../components/ReviewList';
import { createReview, editReview, deleteReview } from '../ducks/reviewsEdit';

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    create: payload => dispatch(createReview(payload)),
    update: payload => dispatch(editReview(payload)),
    delete: id => dispatch(deleteReview(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
