import React from 'react';
import './style.css';

import {Navbar} from 'react-bootstrap';

export default ({ title }) => {
	return (
		<Navbar bg="dark" variant="dark" className="centralize">
			<Navbar.Brand href="#home">
			{/* <img
				alt=""
				src={require('./logo.svg')}
				width="30"
				height="30"
				className="d-inline-block align-top"
			/> */}
			{title}
			</Navbar.Brand>
		</Navbar>		
	);
};
