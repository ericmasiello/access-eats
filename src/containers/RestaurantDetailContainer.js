import { connect } from 'react-redux';
import RestaurantDetail from '../components/RestaurantDetail';
import { loadRestaurantDetail } from '../ducks/restaurantDetail';

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants,
  };
}

export default connect(mapStateToProps, { loadRestaurantDetail })(RestaurantDetail);
