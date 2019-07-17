import React from 'react';
import './style.css';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Stepper from './Stepper';

const MilestonePage = ({ match, history }) => {
	return (
		<>
			<div className="page-header">
				MileStone
				<span className="go-back" onClick={() => history.goBack()}>
					<FontAwesomeIcon icon={faAngleLeft} />
				</span>
			</div>
			<div className="milestone-page">
				<Stepper id={match.params.id} />
			</div>
		</>
	);
};

export default withRouter(MilestonePage);
