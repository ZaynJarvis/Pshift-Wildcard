import React, { Component } from 'react';
import './style.css';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaWallet, FaProjectDiagram } from 'react-icons/fa';
import { IoMdPerson, IoIosBrowsers } from 'react-icons/io';

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
					<LinkContainer to="/wallet">
						<Nav.Link>
							<FaWallet />
							<p>Wallet</p>
						</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/profile">
						<Nav.Link>
							<IoMdPerson />
							<p>Profile</p>
						</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar>
		);
	}
}

export default BottomNavigation;
