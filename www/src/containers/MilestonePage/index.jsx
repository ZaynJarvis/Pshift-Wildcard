import React from 'react';
import './style.css';
import { Col } from 'react-bootstrap';
import Layout from '../Layout/index';
import { withRouter } from 'react-router-dom';
import Stepper from './Stepper';
import BottomNavigation from '../../components/BottomNavigation/index';

const MilestonePage = ({ match, history }) => {
	return (
		<>
			<Layout title="Milestone">
				<Col>
					<Stepper id={match.params.id} />
					<BottomNavigation />
				</Col>
			</Layout>
		</>
	);
};

export default withRouter(MilestonePage);
