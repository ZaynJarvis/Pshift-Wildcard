import { GET_ALL_PROJECTS, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
