import { combineReducers } from 'redux';
import restaurants from '../ducks/restaurants';
import restaurantDetail from '../ducks/restaurantDetail';
import restaurantEdit from '../ducks/restaurantEdit';

export default combineReducers({
  restaurants,
  restaurantDetail,
  restaurantEdit,
});