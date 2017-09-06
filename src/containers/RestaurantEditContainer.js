import { connect } from 'react-redux';
import RestaurantEdit from '../components/RestaurantEdit';
import { createRestaurant } from '../ducks/restaurantEdit';

function mapStateToProps(state) {
  return {
    saved: !!state.restaurantEdit,
  };
}

export default connect(mapStateToProps, { createRestaurant })(RestaurantEdit);
