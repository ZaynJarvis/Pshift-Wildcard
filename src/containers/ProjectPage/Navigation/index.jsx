import React from 'react';
import './style.css';

export default ({ page, setPage }) => {
	return (
		<div className="project-navigator">
			<div onClick={() => setPage(0)} className={page === 0 ? 'active' : ''}>
				In Progress
			</div>
			<div onClick={() => setPage(1)} className={page === 1 ? 'active' : ''}>
				Achieved
			</div>
		</div>
	);
};
