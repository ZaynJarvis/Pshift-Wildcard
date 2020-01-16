import React, { useReducer } from 'react';
import axios from 'axios';
import ProjectContext from './projectContext';
import ProjectReducer from './projectReducer';

import { GET_ALL_PROJECTS, SET_LOADING, GET_PROJECT_BY_ID, GET_PROJECTS_BY_USER } from '../types';
import AuthService from '../../containers/AuthPage/AuthService';

const ProjectState = props => {
	const initialState = {
		projects: [],
		project: null,
		loading: false,
	};

	const [state, dispatch] = useReducer(ProjectReducer, initialState);

	// Get project by user
	const getProjectsByUser = async uid => {
		setLoading();
		const res = await axios.get(
			`http://3.0.55.134:3001/api/users/${uid}/projects`,
			AuthService.getAuthHeader(),
		);
		dispatch({
			type: GET_PROJECTS_BY_USER,
			payload: res.data,
		});
	};

	// Get project by id
	const getProjectByID = async pid => {
		const res = await axios.get(
			`http://3.0.55.134:3001/api/projects/${pid}`,
			AuthService.getAuthHeader(),
		);
		dispatch({
			type: GET_PROJECT_BY_ID,
			payload: res.data,
		});
	};

	// Get all projects
	const getAllProjects = async () => {
		setLoading();
		const res = await axios.get(
			`http://3.0.55.134:3001/api/projects`,
			AuthService.getAuthHeader(),
		);
		dispatch({
			type: GET_ALL_PROJECTS,
			payload: res.data,
		});
	};

	// Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<ProjectContext.Provider
			value={{
				projects: state.projects,
				loading: state.loading,
				getAllProjects,
				getProjectByID,
				getProjectsByUser,
			}}
		>
			{props.children}
		</ProjectContext.Provider>
	);
};

export default ProjectState;
