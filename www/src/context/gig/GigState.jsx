import React, { useReducer } from 'react';
import axios from 'axios';
import GigReducer from './gigReducer';
import GigContext from './gigContext';
import {
  GET_ALL_GIGS,
  SET_LOADING,
  UPDATE_GIG,
  GET_GIG_BY_ID,
  GET_GIGS_BY_USER
} from '../types';
import AuthService from '../../containers/AuthPage/AuthService';

const GigState = props => {
  const initialState = {
    gigs: [],
    gig: null,
    loading: false
  };

  const [state, dispatch] = useReducer(GigReducer, initialState);

  // Get gigs by user
  const getGigsByUser = async uid => {
    setLoading();
    const res = await axios.get(`http://localhost:3001/api/users/${uid}/gigs`, AuthService.getAuthHeader());
    dispatch({
      type: GET_GIGS_BY_USER,
      payload: res.data
    });
  };

  // Get gig by Id
  const getGigByID = async gid => {
    let data = [];
    const res = await axios.get(`http://localhost:3001/api/gigs/${gid}`, AuthService.getAuthHeader());
    data = res.data;
    console.log(`Get gig of id ${gid} \n${data}`);
    dispatch({
      type: GET_GIG_BY_ID,
      payload: data
    });
  };

  // Get all gigs
  const getAllGigs = async id => {
    setLoading();
    let data = [];
    const res = await axios.get(
      `http://localhost:3001/api/gigs/recommend/${id}`,
      AuthService.getAuthHeader(),
    );
    data = res.data;
    console.log(data);
    const resAll = await axios.get(`http://localhost:3001/api/gigs`, AuthService.getAuthHeader());
    dispatch({
      type: GET_ALL_GIGS,
      payload: [...data, ...resAll.data]
    });
  };

  const updateGig = async (id, content) => {
    setLoading();
    const p = await axios.put(`http://localhost:3001/api/gigs/${id}`, content, AuthService.getAuthHeader());
    dispatch({
      type: UPDATE_GIG,
      payload: state.gigs.map(s => {
        if (s.id === id) return p.data;
        else return s;
      })
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
        getGigByID,
        getGigsByUser
      }}>
      {props.children}
    </GigContext.Provider>
  );
};

export default GigState;
