import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTag, faUser, faWallet } from '@fortawesome/free-solid-svg-icons';
import { NavLink, withRouter } from 'react-router-dom';

const BottomNavigation = ({ location }) => {
	const config = [
		{ to: '/market', icon: faUser, label: 'market' },
		{ to: '/projects', icon: faHome, label: 'projects' },
		{ to: '/insurance', icon: faTag, label: 'insurance' },
		{ to: '/wallet', icon: faWallet, label: 'wallet' },
	];
	return (
		<div className="bottom-navigation">
			{config.map((c, i) => (
				<NavLink
					className="nav-link"
					activeClassName={location.pathname !== c.to ? null : 'active-route'}
					to={c.to}
					exact
					key={i}
				>
					<div>
						<FontAwesomeIcon icon={c.icon} />
						<p>{c.label}</p>
					</div>
				</NavLink>
			))}
		</div>
	);
};

export default withRouter(BottomNavigation);
