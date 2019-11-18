import axios from 'axios';
import React, { useReducer } from 'react';
import UserContext from './userContext';
import UserReducer from './UserReducer';
import AuthService from '../../containers/AuthPage/AuthService';

import { GET_PROFILE, SET_LOADING } from '../types';

const UserState = props => {
  const initialState = {
    user: {},
    uid: -1,
    loading: false
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  const getProfile = async () => {
    setLoading();
    const res = await axios.get(
      `http://localhost:3001/api/profile`,
      AuthService.getAuthHeader()
    );
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        uid: state.uid,
        loading: state.loading,
        getProfile
      }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
