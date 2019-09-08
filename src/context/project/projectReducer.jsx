import { GET_ALL_PROJECTS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_PROJECTS:
      return {
        ...state,
        transactions: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
