import React from 'react';
import './style.css';

import { Navbar } from 'react-bootstrap';

const PageHeader = ({ title }) => {
	return (
		<Navbar bg="light" variant="light" className="centralize header">
			<Navbar.Brand>
				<span className="title">{title}</span>
			</Navbar.Brand>
		</Navbar>
	);
};

export default PageHeader;
