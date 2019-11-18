import { GET_PROFILE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PROFILE:
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,
        uid: action.payload.id
      };
    default:
      return state;
  }
};
