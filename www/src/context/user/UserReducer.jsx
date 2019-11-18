import { GET_PROFILE } from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_PROFILE:
			localStorage.setItem('uid', action.payload.id);
			return {
				...state,
				user: action.payload,
				uid: action.payload.id,
			};
		default:
			return state;
	}
};
