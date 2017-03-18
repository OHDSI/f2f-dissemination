import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { services } from 'services/api';

export default combineReducers({
    routing: routerReducer,
	users: services.users.reducer,
});
