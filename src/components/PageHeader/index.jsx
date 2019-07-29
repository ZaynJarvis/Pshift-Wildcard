import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import './style.css';

export default ({ title }) => {
	return (
		<div className="page-header">{title ? <h1>{title}</h1> : <Logo className="logo-title" />}</div>
	);
};
