import React from 'react';
import './style.css';
import { NavLink, withRouter } from 'react-router-dom';
import { FaWallet, FaProjectDiagram } from 'react-icons/fa';
import { IoMdPeople, IoIosBrowsers } from 'react-icons/io';

const BottomNavigation = ({ location }) => {
	const config = [
		{ to: '/market', icon: IoIosBrowsers, label: 'market' },
		{ to: '/projects', icon: FaProjectDiagram, label: 'projects' },
		{ to: '/insurance', icon: IoMdPeople, label: 'insurance' },
		{ to: '/wallet', icon: FaWallet, label: 'wallet' },
	];
	return (
		<div className="bottom-navigation">
			{config.map((c, i) => (
				<NavLink
					className="nav-link"
					activeClassName={location.pathname !== c.to ? null : 'active-route'}
					to={c.to}
					exact
					key={c.to}
				>
					<div>
						{c.icon()}
						<p>{c.label}</p>
					</div>
				</NavLink>
			))}
		</div>
	);
};

export default withRouter(BottomNavigation);
