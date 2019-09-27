import React, { useReducer } from 'react';
import axios from 'axios';
import GigReducer from './gigReducer';
import GigContext from './gigContext';
import { GET_ALL_GIGS, SET_LOADING, UPDATE_GIG } from '../types';

const GigState = props => {
	const initialState = {
		gigs: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(GigReducer, initialState);

	// Get all gigs
	const getAllGigs = async id => {
		setLoading();
		let data = [];
		const res = await axios.get(`${'http://localhost:3001'}/api/gigs/recommend/${id}`);
		data = res.data;
		console.log(data);
		const resAll = await axios.get(`${'http://localhost:3001'}/api/gigs`);
		dispatch({
			type: GET_ALL_GIGS,
			payload: [...data, ...resAll.data],
		});
	};

	const updateGig = async (id, content) => {
		setLoading();
		const p = await axios.put(`${'http://localhost:3001'}/api/gigs/${id}`, content);
		dispatch({
			type: UPDATE_GIG,
			payload: state.gigs.map(s => {
				if (s.id === id) return p.data;
				else return s;
			}),
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
				updateGig,
			}}
		>
			{props.children}
		</GigContext.Provider>
	);
};

export default GigState;
