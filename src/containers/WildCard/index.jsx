import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './style.css';
import ProjectPage from '../ProjectPage';
import MilestonePage from '../MilestonePage';
import Layout from '../Layout';
export default () => {
	return (
		<Router>
			<div className="page">
				<Route path="/" exact component={ProjectPage} />
				<Route path="/project/:id" component={MilestonePage} />
				<Route path="/a" component={() => <Layout>400</Layout>} />
				<Route path="/b" component={() => <Layout>400</Layout>} />
				<Route path="/c" component={() => <Layout>400</Layout>} />
				<Route path="/d" component={() => <Layout>400</Layout>} />
			</div>
		</Router>
	);
};
