import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './style.css';
import ProjectPage from '../ProjectsPage';
import HomePage from '../MarketPage';
import MilestonePage from '../MilestonePage';
import InsurancePage from '../InsurancePage';
import WalletPage from '../WalletPage';
import BottomNavigation from '../../components/BottomNavigation';
const WildCard = () => {
  return (
    <Router>
      <div className='page'>
        <Route component={SubRoute} />
        <Route path='/project/:id' component={MilestonePage} />
      </div>
    </Router>
  );
};

const SubRoute = ({ location }) => {
  return (
    <>
      <Redirect path='/' exact to='/market' />
      <Route path='/projects' exact component={ProjectPage} />
      <Route path='/market' component={HomePage} />
      <Route path='/insurance' component={InsurancePage} />
      <Route path='/wallet' component={WalletPage} />
      {!(location.pathname.indexOf('/project/') === 0) && <BottomNavigation />}
    </>
  );
};
export default WildCard;
