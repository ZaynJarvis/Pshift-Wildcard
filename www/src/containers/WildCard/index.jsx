import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './style.css';
import ProjectPage from '../ProjectsPage';
import HomePage from '../MarketPage';
import MilestonePage from '../MilestonePage';
import InsurancePage from '../InsurancePage';
import ProfilePage from '../ProfilePage';
import WalletPage from '../WalletPage';
import BottomNavigation from '../../components/BottomNavigation';
import DisputePage from '../MilestonePage/DisputePage/index';
import OfferPage from '../OfferPage/index';
import LoginPage from '../LoginPage/index';

const WildCard = () => {
	return (
		<Router>
			<div className="page">
				<Route component={SubRoute} />
				<Route path="/project/:id" component={MilestonePage} />
			</div>
		</Router>
	);
};

const SubRoute = ({ location }) => {
	return (
		<>
			<Redirect path="/" exact to="/login" />
			<Route path="/login" component={LoginPage} />
			<Route path="/projects" exact component={ProjectPage} />
			<Route path="/market" component={HomePage} />
			<Route path="/insurance" component={InsurancePage} />
			<Route path="/profile" component={ProfilePage} />
			<Route path="/wallet" component={WalletPage} />
			<Route path="/dispute" exact component={DisputePage} />
			<Route path="/offer/:id" exact component={OfferPage} />
			{!(
				location.pathname.indexOf('/project/') === 0 || location.pathname.indexOf('/login') === 0
			) && <BottomNavigation />}
		</>
	);
};
export default WildCard;
