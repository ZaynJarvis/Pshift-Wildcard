import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTag, faBell, faUser, faWallet } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export default () => {
	const config = [
		{ to: '/', icon: faHome },
		{ to: '/a', icon: faTag },
		{ to: '/b', icon: faBell },
		{ to: '/d', icon: faWallet },
		{ to: '/c', icon: faUser },
	];
	return (
		<div className="bottom-navigation">
			{config.map(c => (
				<NavLink
					className="nav-link"
					to={c.to}
					exact
					activeStyle={{
						fontWeight: 'bold',
						color: '#fff',
					}}
					key={c}
				>
					<div>
						<FontAwesomeIcon icon={c.icon} />
					</div>
				</NavLink>
			))}
		</div>
	);
};
