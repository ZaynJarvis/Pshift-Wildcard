import React from 'react';

import './style.css';
import transactions from '../../mock/transactions';
import card from '../../mock/card.jpg';
import Layout from '../Layout';

export default () => {
	const [currency, setCurrency] = React.useState('$');
	const [show, setShow] = React.useState(false);

	const currencyMap = [{ sign: '$', ratio: 1 }, { sign: '¥', ratio: 5 }, { sign: '€', ratio: 0.5 }];

	const inputEl = React.useRef(null);

	return (
		<Layout title="Wallet">
			<div className="wallet-page">
				<img src={card} alt="wallet" />
				<div className="wallet-header">
					<h2>Latest Transactions:</h2>
					<div className="currency-sign">
						{show &&
							currencyMap
								.filter(v => v.sign !== currency)
								.map(v => (
									<span
										key={v.sign}
										onClick={() => {
											setShow(!show);
											setCurrency(v.sign);
										}}
									>
										{v.sign}
									</span>
								))}
						<span onClick={() => setShow(!show)}>{currency}</span>
					</div>
				</div>
				<div ref={inputEl} className="transaction-wrapper">
					{transactions.map(v => (
						<div key={v.id} className="transaction">
							<div className="content">
								<h2>{v.item}</h2>
								<p>{v.description}</p>
							</div>
							<div className={'money-amount ' + (v.inflow && 'inflow')}>
								<span>{currency}</span>
								<span>{v.amount * currencyMap.find(v => v.sign === currency).ratio}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
};
