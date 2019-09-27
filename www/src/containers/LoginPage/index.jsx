import React, { useEffect } from 'react';
import './index.css';
import UserContext from '../../context/user/userContext';
import GigContext from '../../context/gig/gigContext';
import InsuranceContext from '../../context/insurance/insuranceContext';

export default ({ history }) => {
	const [user, setUser] = React.useState();
	const { getAllInsurances } = React.useContext(InsuranceContext);
	const { setUserID } = React.useContext(UserContext);
	const { getAllGigs } = React.useContext(GigContext);

	useEffect(() => {
		getAllInsurances();
		// eslint-disable-next-line
	}, []);

	const click = id => {
		setUser(id);
		setUserID(id);
		getAllGigs(id);
		setTimeout(() => {
			history.push('/market');
		}, 3200);
	};

	return (
		<div className="login-wrapper">
			<div
				onClick={() => click('Zayn')}
				className={'login-profile usera ' + (user ? (user === 'Zayn' ? 'active' : 'inactive') : '')}
			></div>
			<div
				onClick={() => click('James')}
				className={
					'login-profile userb ' + (user ? (user === 'James' ? 'active' : 'inactive') : '')
				}
			></div>
		</div>
	);
};
