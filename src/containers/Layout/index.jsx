import React from 'react';

import './style.css';
import PageHeader from '../../components/PageHeader';
import BottomNavigation from '../../components/BottomNavigation';

export default ({ title, children }) => {
	return (
		<>
			<PageHeader title={title} />
			<div className="page-content">{children || '404'}</div>
			<BottomNavigation />
		</>
	);
};
