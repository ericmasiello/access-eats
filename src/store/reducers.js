import { combineReducers } from 'redux';
import restaurants from '../ducks/restaurants';
import restaurantDetail from '../ducks/restaurantDetail';

export default combineReducers({
  restaurants,
  restaurantDetail,
});