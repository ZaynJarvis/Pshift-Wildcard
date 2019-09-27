// import React from 'react';
// import './style.css';
// import { NavLink, withRouter } from 'react-router-dom';
// import { FaWallet, FaProjectDiagram } from 'react-icons/fa';
// import { IoMdPeople, IoIosBrowsers } from 'react-icons/io';

// const BottomNavigation = ({ location }) => {
// 	const config = [
// 		{ to: '/market', icon: IoIosBrowsers, label: 'market' },
// 		{ to: '/projects', icon: FaProjectDiagram, label: 'projects' },
// 		{ to: '/insurance', icon: IoMdPeople, label: 'insurance' },
// 		{ to: '/wallet', icon: FaWallet, label: 'wallet' },
// 	];
// 	return (
// 		<div className="bottom-navigation">
// 			{config.map((c, i) => (
// 				<NavLink
// 					className="nav-link"
// 					activeClassName={location.pathname !== c.to ? null : 'active-route'}
// 					to={c.to}
// 					exact
// 					key={c.to}
// 				>
// 					<div>
// 						{c.icon()}
// 						<p>{c.label}</p>
// 					</div>
// 				</NavLink>
// 			))}
// 		</div>
// 	);
// };

// export default withRouter(BottomNavigation);
import React, { Component } from 'react';
import './style.css';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaWallet, FaProjectDiagram } from 'react-icons/fa';
import { IoMdPeople, IoIosBrowsers } from 'react-icons/io';

class BottomNavigation extends Component {
	render() {
		return (
			<Navbar fixed="bottom" bg="light" variant="light" className="centralize navbar">
				<Nav className="mr-auto">
					<LinkContainer to="/market">
						<Nav.Link className="nav-link">
							<IoIosBrowsers />
							<p>Market</p>
						</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/projects">
						<Nav.Link>
							<FaProjectDiagram />
							<p>Projects</p>
						</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/insurance">
						<Nav.Link>
							<IoMdPeople />
							<p>Insurance</p>
						</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/wallet">
						<Nav.Link>
							<FaWallet />
							<p>Wallet</p>
						</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar>
		);
	}
}

export default BottomNavigation;
