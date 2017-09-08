import Main from '../components/Main';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createEditReset } from '../ducks/restaurantEdit';

export default withRouter(connect(null, { createEditReset })(Main));