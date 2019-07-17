import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import './style.css';

export default () => {
	return (
		<div className="page-header">
			<Logo className="logo-title" />
		</div>
	);
};
