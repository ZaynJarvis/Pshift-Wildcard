import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import './style.css';

export default ({ title }) => {
	return (
		<div className="page-header">{title ? <h3>{title}</h3> : <Logo className="logo-title" />}</div>
	);
};
