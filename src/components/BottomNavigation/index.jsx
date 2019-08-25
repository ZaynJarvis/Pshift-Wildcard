import React, {Component} from 'react';
import './style.css';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

class BottomNavigation extends Component {
	render() {
		return (
			<Navbar fixed="bottom" bg="dark" variant="dark" className="centralize">
				<Nav className="mr-auto">
					<LinkContainer to="/market">
						<Nav.Link>Market</Nav.Link>
					</LinkContainer>				
					<LinkContainer to="/projects">
						<Nav.Link>Projects</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/insurance">
						<Nav.Link>Insurance</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/wallet">
						<Nav.Link>Wallet</Nav.Link>
					</LinkContainer>					
				</Nav>
			</Navbar>
		)
	}
}


export default BottomNavigation;
