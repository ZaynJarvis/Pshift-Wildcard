import { React, useReducer } from 'react';
import axios from 'axios';
import ProjectContext from './projectContext';
import ProjectReducer from './projectReducer';

import { GET_ALL_PROJECTS, SET_LOADING } from '../types';

const ProjectState = props => {
  const initialState = {
    projects: [],
    loading: false
  };

  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  // Get all projects
  const getAllProjects = async () => {
    setLoading();
    const res = await axios.get(`http://localhost:3000/api/projects`);
    dispatch({
      type: GET_ALL_PROJECTS,
      payload: res.data
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        getAllProjects
      }}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
