import React, { useReducer } from 'react';
import UserContext from './userContext';
import UserReducer from './UserReducer';

import { UPDATE_USER_ID } from '../types';

const UserState = props => {
  const initialState = {
    id: 'Zayn'
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const setUserID = async id => {
    dispatch({
      type: UPDATE_USER_ID,
      payload: id
    });
  };

  return (
    <UserContext.Provider
      value={{
        id: state.id,
        setUserID
      }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
