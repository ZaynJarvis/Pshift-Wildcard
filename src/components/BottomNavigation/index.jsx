import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTag, faBell, faUser, faWallet } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export default () => {
	const config = [
		{ to: '/home', icon: faHome },
		{ to: '/insurance', icon: faTag },
		{ to: '/c', icon: faBell },
		{ to: '/d', icon: faWallet },
		{ to: '/', icon: faUser },
	];
	return (
		<div className="bottom-navigation">
			{config.map((c, i) => (
				<NavLink
					className="nav-link"
					to={c.to}
					exact
					activeStyle={{
						fontWeight: 'bold',
						color: '#000',
					}}
					key={i}
				>
					<div>
						<FontAwesomeIcon icon={c.icon} />
					</div>
				</NavLink>
			))}
		</div>
	);
};
