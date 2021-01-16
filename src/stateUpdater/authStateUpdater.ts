import {ON_LOGIN, ON_LOGOUT, ON_LOAD, ON_SIGNUP} from '../actions';
import Store from '../utils/Store';
import {store} from '../state/State';

export const authStateUpdater = (action: any) => {
	switch (action.type) {
		case ON_LOGIN:
		case ON_SIGNUP:
			Store.setState({
				...store.state,
				auth: {
					...store.state.auth,
					status: !action.payload.reason
				}
			});
			break;
		case ON_LOGOUT:
			Store.setState({
				...store.state,
				auth: {
					...store.state.auth,
					status: false
				}
			});
			break;
		case ON_LOAD:
			Store.setState({
				...store.state,
				auth: {
					...store.state.auth,
					status: !action.payload.reason
				}
			});
			break;
		default:
			break;
	}
};
