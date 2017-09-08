import { connect } from 'react-redux';
import ReviewList from '../components/ReviewList';
import { createReview, editReview } from '../ducks/reviewsEdit';

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    create: payload => {
      dispatch(createReview(payload))
    },
    update: payload => {
      dispatch(editReview(payload))
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
