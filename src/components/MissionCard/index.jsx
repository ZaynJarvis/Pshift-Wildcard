import React from 'react';
import './index.css';
import { withRouter } from 'react-router-dom';

const MissionCard = ({ id, title, description, imageUrl, history }) => {
	return (
		<div className="project-wrapper" onClick={() => history.push('/project/' + id)}>
			<div className="main-content">
				<div className="text-content">
					<h4>{title}</h4>
					<p>{description}</p>
				</div>
				{imageUrl && <img src={imageUrl} alt="logo for this project" />}
			</div>
			{/* <div className="navigation">View Milestone</div> */}
		</div>
	);
};

export default withRouter(MissionCard);
