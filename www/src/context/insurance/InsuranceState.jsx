import React, { useReducer } from 'react';
import axios from 'axios';
import InsuranceContext from './insuranceContext';
import InsuranceReducer from './insuraneReducer';
import { GET_ALL_INSURANCES, SET_LOADING } from '../types';
import AuthService from '../../containers/AuthPage/AuthService';

const InsuranceState = props => {
	const initialState = {
		insurances: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(InsuranceReducer, initialState);

	// Get Insurance
	const getAllInsurances = async () => {
		setLoading();
		const res = await axios.get(
			`http://3.0.55.134:3001/api/insurances`,
			AuthService.getAuthHeader(),
		);
		dispatch({
			type: GET_ALL_INSURANCES,
			payload: res.data,
		});
	};

	// Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<InsuranceContext.Provider
			value={{
				insurances: state.insurances,
				loading: state.loading,
				getAllInsurances,
			}}
		>
			{props.children}
		</InsuranceContext.Provider>
	);
};

export default InsuranceState;
