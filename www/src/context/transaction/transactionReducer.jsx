import { GET_ALL_TRANSACTIONS, SET_LOADING, GET_TRANSACTIONS_BY_USER } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS_BY_USER:
      return {
        ...state,
        transactions: action.payload,
        loading: false
      }
    case GET_ALL_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
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
