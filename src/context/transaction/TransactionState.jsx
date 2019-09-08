import { React, useReducer } from 'react';
import axios from 'axios';
import TransactionContext from './transactionContext';
import TransactionReducer from './transactionReducer';

import { GET_ALL_TRANSACTIONS, SET_LOADING } from '../types';

const TransactionState = props => {
  const initialState = {
    transactions: [],
    loading: false
  };

  const [state, dispatch] = useReducer(TransactionReducer, initialState);

  const getAllTransactions = async () => {
    setLoading();
    const res = await axios.get(`http://localhost:3000/api/transactions`);
    dispatch({
      type: GET_ALL_TRANSACTIONS,
      payload: res.data
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <TransactionContext.Provider
      value={{ transactions: state.transactions, getAllTransactions }}>
      {props.children}
    </TransactionContext.Provider>
  );
};

export default TransactionState;
