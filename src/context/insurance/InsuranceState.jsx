import React, { useReducer } from 'react';
import axios from 'axios';
import insuranceContext from './insuranceContext';
import insuranceReducer from './insuraneReducer';
import { GET_ALL_INSURANCES, SET_LOADING } from '../types';

const InsuranceState = props => {
  const initialState = {
    insurances: [],
    loading: false
  };

  const [state, dispatch] = useReducer(insuranceReducer, initialState);

  // Get Insurance
  const getAllInsurances = async () => {
    setLoading();
    const res = await axios.get(`http://localhost:3000/api/insurances`);
    console.log(res);
    dispatch({
      type: GET_ALL_INSURANCES,
      payload: res.data
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <insuranceContext.Provider
      value={{
        insurances: state.insurances,
        loading: state.loading,
        getAllInsurances
      }}>
      {props.children}
    </insuranceContext.Provider>
  );
};

export default InsuranceState;
