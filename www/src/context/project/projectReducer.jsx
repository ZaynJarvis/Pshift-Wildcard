import {
  GET_ALL_PROJECTS,
  SET_LOADING,
  GET_PROJECT_BY_ID,
  GET_PROJECTS_BY_USER
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PROJECTS_BY_USER:
      return {
        ...state,
        projects: action.payload,
        loading: false
      };
    case GET_PROJECT_BY_ID:
      return {
        ...state,
        project: action.payload
      };
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
