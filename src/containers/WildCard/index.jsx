import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './style.css';
import ProjectPage from '../ProjectsPage';
import HomePage from '../MarketPage';
import MilestonePage from '../MilestonePage';
import Layout from '../Layout';
import InsurancePage from '../InsurancePage';
import WalletPage from '../WalletPage';
import BottomNavigation from '../../components/BottomNavigation';

export default () => {
	return (
		<Router>
			<div className="page">
				<Route path="/project/:id" component={MilestonePage} />
				<Route component={SubRoute} />
				{/* <Redirect path="/" exact to="/market" />
				<Route path="/projects" exact component={ProjectPage} />
				<Route path="/market" component={HomePage} />
				<Route path="/insurance" component={InsurancePage} />
				<Route path="/wallet" component={WalletPage} /> */}
			</div>
		</Router>
	);
};

const SubRoute = () => {
	return (
		<>
			<Redirect path="/" exact to="/market" />
			<Route path="/projects" exact component={ProjectPage} />
			<Route path="/market" component={HomePage} />
			<Route path="/insurance" component={InsurancePage} />
			<Route path="/wallet" component={WalletPage} />
			<BottomNavigation />
		</>
	);
};
