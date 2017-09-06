import { connect } from 'react-redux';
import RestaurantEdit from '../components/RestaurantEdit';
import { createRestaurant } from '../ducks/restaurants';

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, { createRestaurant })(RestaurantEdit);
