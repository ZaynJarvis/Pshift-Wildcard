import { GET_ALL_TRANSACTIONS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
