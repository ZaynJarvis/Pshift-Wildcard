import { UPDATE_USER_ID } from '../types';

export default (state, action) => {
	switch (action.type) {
		case UPDATE_USER_ID:
			console.log(action.payload);
			return {
				...state,
				id: action.payload,
			};
		default:
			return state;
	}
};
