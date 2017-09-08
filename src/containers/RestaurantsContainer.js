import { connect } from 'react-redux';
import Restaurants from '../components/Restaurants';
import { loadRestaurants } from '../ducks/restaurants';

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants,
  };
}

export default connect(mapStateToProps, { loadRestaurants })(Restaurants);
