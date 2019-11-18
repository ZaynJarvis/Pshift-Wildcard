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
import LoginPage from '../AuthPage/login';
import RegisterPage from '../AuthPage/register';
import AuthService from '../AuthPage/AuthService';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
		AuthService.isAuthenticated
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

const WildCard = () => {
	return (
		<Router>
			<div className="page">
				<Route component={SubRoute} />
				<PrivateRoute path="/project/:id" component={MilestonePage} />
			</div>
		</Router>
	);
};

const SubRoute = ({ location }) => {
	return (
		<>
			<Redirect path="/" exact to="/market" />
			<Route path="/login" component={LoginPage} />
			<Route path="/login:email" component={LoginPage} />
			<Route path="/register" component={RegisterPage} />
			
			<PrivateRoute path="/projects" exact component={ProjectPage} />
			<PrivateRoute path="/market" component={HomePage} />
			<PrivateRoute path="/insurance" component={InsurancePage} />
			<PrivateRoute path="/profile" component={ProfilePage} />
			<PrivateRoute path="/wallet" component={WalletPage} />
			<PrivateRoute path="/dispute" exact component={DisputePage} />
			<PrivateRoute path="/offer/:id" exact component={OfferPage} />
			{!(
				location.pathname.indexOf('/project/') === 0 || location.pathname.indexOf('/login') === 0 || location.pathname.indexOf('/register') === 0
			) && <BottomNavigation />}
		</>
	);
};
export default WildCard;
