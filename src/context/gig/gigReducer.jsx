import { GET_ALL_GIGS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_GIGS:
      return {
        ...state,
        gigs: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
