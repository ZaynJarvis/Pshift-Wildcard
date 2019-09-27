import { GET_ALL_GIGS, UPDATE_GIG, SET_LOADING } from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_ALL_GIGS:
			return {
				...state,
				gigs: action.payload,
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case UPDATE_GIG:
			return {
				...state,
				gigs: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};
