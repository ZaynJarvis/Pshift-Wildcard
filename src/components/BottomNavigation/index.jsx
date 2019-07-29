import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTag, faBell, faUser, faWallet } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export default () => {
	const config = [
		{ to: '/', icon: faUser, label: 'market' },
		{ to: '/home', icon: faHome, label: 'projects' },
		{ to: '/insurance', icon: faTag, label: 'insurance' },
		{ to: '/wallet', icon: faWallet, label: 'wallet' },
	];
	return (
		<div className="bottom-navigation">
			{config.map((c, i) => (
				<NavLink
					className="nav-link"
					to={c.to}
					exact
					activeStyle={{
						opacity: 1,
					}}
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
