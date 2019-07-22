import React from 'react';

import './style.css';
import transactions from '../../mock/transactions';
import card from '../../mock/card.jpg';
import Layout from '../Layout';

const Transactions = ({ transactions }) => (
	<>
		{transactions.map(v => (
			<div key={v.id} className="transaction">
				<div className="content">
					<h2>{v.item}</h2>
					<p>{v.description}</p>
				</div>
				<div className={'money-amount ' + (v.inflow && 'inflow')}>
					<span>$</span>
					<span>{v.amount}</span>
				</div>
			</div>
		))}
	</>
);
export default () => {
	const [offset, setOffset] = React.useState(1);
	const inputEl = React.useRef(null);

	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll, true);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const handleScroll = event => {
		const scaleOffset = 0.67 + inputEl.current.getBoundingClientRect().y / 900;
		setOffset(scaleOffset);
	};
	return (
		<Layout title="Wallet">
			<div className="wallet-page">
				<img src={card} alt="wallet iamge" style={{ transform: 'scale(' + offset + ')' }} />
				<div ref={inputEl} className="transaction-wrapper">
					<Transactions transactions={transactions} />
				</div>
			</div>
		</Layout>
	);
};
