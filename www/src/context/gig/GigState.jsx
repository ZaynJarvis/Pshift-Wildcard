import React, { useReducer } from 'react';
import axios from 'axios';
import GigReducer from './gigReducer';
import GigContext from './gigContext';
import { GET_ALL_GIGS, SET_LOADING } from '../types';

const GigState = props => {
	const initialState = {
		gigs: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(GigReducer, initialState);

	// Get all gigs
	const getAllGigs = async () => {
		setLoading();
		const res = await axios.get(`${'http://54.169.193.114:3001'}/api/gigs`);
		console.log(res);
		dispatch({
			type: GET_ALL_GIGS,
			payload: res.data,
		});
	};

	// Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<GigContext.Provider
			value={{
				gigs: state.gigs,
				loading: state.loading,
				getAllGigs,
			}}
		>
			{props.children}
		</GigContext.Provider>
	);
};

export default GigState;
