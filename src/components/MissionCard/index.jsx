import React from 'react';
import './index.css';

export default ({ id, title, description, imageUrl }) => {
	const navigate = () => {
		alert(id);
	};
	return (
		<div className="wrapper">
			<div className="main-content">
				<div className="text-content">
					<h4>{title}</h4>
					<p>{description}</p>
				</div>
				{imageUrl && <img src={imageUrl} alt="logo for this project" />}
			</div>
			<div className="navigation" onClick={() => navigate()}>
				View Milestone
			</div>
		</div>
	);
};
