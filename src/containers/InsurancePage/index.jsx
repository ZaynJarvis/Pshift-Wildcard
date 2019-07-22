import React from 'react';

import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Layout from '../Layout';

const Insurance = ({ feature }) => (
	<div className={'insurance ' + feature}>
		<h2>Insurance Package</h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo perferendis a accusamus
			distinctio et mollitia quasi sed earum.
		</p>
		<h2>$32</h2>
		<FontAwesomeIcon className="add-button" icon={faPlus} />
	</div>
);
export default () => {
	return (
		<Layout>
			<div className="insurance-page">
				<Insurance feature="basic" />
				<Insurance feature="intermediate" />
				<Insurance feature="advanced" />
			</div>
		</Layout>
	);
};
