import { connect } from 'react-redux';
import RestaurantEdit from '../components/RestaurantEdit';
import { editRestaurant } from '../ducks/restaurantEdit';
import { loadRestaurantDetail } from '../ducks/restaurantDetail';

function mapStateToProps(state) {
  return {
    saved: !!state.restaurantEdit,
    restaurantDetail: state.restaurantDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    load: id => {
      dispatch(loadRestaurantDetail(id))
    },
    save: payload => {
      dispatch(editRestaurant(payload))
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantEdit);
