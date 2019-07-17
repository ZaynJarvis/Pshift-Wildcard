import React from 'react';
import ProjectPage from '../ProjectPage';
import PageHeader from './PageHeader';
import BottomNavigation from './BottomNavigation';
import './style.css';

export default () => {
	return (
		<div className="page">
			<PageHeader />
			<div className="page-content">
				<ProjectPage />
			</div>
			<BottomNavigation />
		</div>
	);
};
