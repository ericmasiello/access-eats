import { connect } from 'react-redux';
import RestaurantDetail from '../components/RestaurantDetail';
import { loadRestaurantDetail } from '../ducks/restaurantDetail';
import { deleteRestaurant } from '../ducks/restaurants';

function mapStateToProps(state) {
  return {
    restaurant: state.restaurantDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    load: payload => dispatch(loadRestaurantDetail(payload)),
    delete: id => dispatch(deleteRestaurant(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetail);
