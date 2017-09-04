import { connect } from 'react-redux';
import RestaurantDetail from '../components/RestaurantDetail';
import { loadRestaurantDetail } from '../ducks/restaurantDetail';

function mapStateToProps(state) {
  return {
    restaurant: state.restaurantDetail,
  };
}

export default connect(mapStateToProps, { loadRestaurantDetail })(RestaurantDetail);
