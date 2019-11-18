import { GET_PROFILE } from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_PROFILE:
			console.log(action.payload);
			return {
				...state,
				id: action.payload,
			};
		default:
			return state;
	}
};
