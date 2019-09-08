import React, { useReducer } from 'react';
import axios from 'axios';

import { GET_ALL_GIGS, SET_LOADING } from '../types';
import gigReducer from './gigReducer';
import GigContext from './gigContext';

const GigState = props => {
  const initialState = {
    gigs: [],
    loading: false
  };

  const [state, dispatch] = useReducer(gigReducer, initialState);

  // Get all gigs
  const getAllGigs = async () => {
    setLoading();
    const res = await axios.get(`http://localhost:3000/api/gigs`);
    dispatch({
      type: GET_ALL_GIGS,
      payload: res.data
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GigContext.Provider
      value={{
        gigs: state.gigs,
        getAllGigs
      }}>
      {props.children}
    </GigContext.Provider>
  );
};

export default GigState;
