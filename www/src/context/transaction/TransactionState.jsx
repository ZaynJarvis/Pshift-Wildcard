import React, { useReducer } from 'react';
import axios from 'axios';
import TransactionContext from './transactionContext';
import TransactionReducer from './transactionReducer';

import { GET_ALL_TRANSACTIONS, SET_LOADING, GET_TRANSACTIONS_BY_USER } from '../types';
import AuthService from '../../containers/AuthPage/AuthService';

const TransactionState = props => {
	const initialState = {
		transactions: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(TransactionReducer, initialState);

	// Get transactions by users
	const getTransactionsByUser = async uid => {
		setLoading();
		const res = await axios.get(
			`http://3.0.55.134:3001/api/users/${uid}/transactions`,
			AuthService.getAuthHeader(),
		);
		dispatch({
			type: GET_TRANSACTIONS_BY_USER,
			payload: res.data,
		});
	};

	const getAllTransactions = async () => {
		setLoading();
		const res = await axios.get(
			`http://3.0.55.134:3001/api/transactions`,
			AuthService.getAuthHeader(),
		);
		dispatch({
			type: GET_ALL_TRANSACTIONS,
			payload: res.data,
		});
	};

	// Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<TransactionContext.Provider
			value={{
				transactions: state.transactions,
				loading: state.loading,
				getAllTransactions,
				getTransactionsByUser,
			}}
		>
			{props.children}
		</TransactionContext.Provider>
	);
};

export default TransactionState;
