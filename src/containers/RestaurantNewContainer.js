import { connect } from 'react-redux';
import RestaurantEdit from '../components/RestaurantEdit';
import { createRestaurant } from '../ducks/restaurantEdit';

function mapStateToProps(state) {
  return {
    saved: !!state.restaurantEdit,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    save: payload => {
      dispatch(createRestaurant(payload))
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantEdit);
