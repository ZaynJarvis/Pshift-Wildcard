import React, { useEffect, useContext } from 'react';
import './style.css';
import Layout from '../Layout';
import { Row, Col, Tab, Tabs, Container, ListGroup, Card } from 'react-bootstrap';
import { FaBitcoin, FaEthereum, FaDollarSign } from 'react-icons/fa';
import TransactionContext from '../../context/transaction/transactionContext';

const Wallet = ({ type, title }) => {
	const currencyType = {
		cash: <FaDollarSign />,
		bitcoin: <FaBitcoin />,
		ethereum: <FaEthereum />,
	};

	const currencyAmout = {
		cash: 5000,
		bitcoin: 20,
		ethereum: 36,
	};

	const currencyRatio = {
		cash: 1,
		bitcoin: 30,
		ethereum: 17,
	};
	const Icon = currencyType[type];

	const transactionContext = useContext(TransactionContext);

	const { transactions, getAllTransactions } = transactionContext;

	useEffect(() => {
		getAllTransactions();
		// eslint-disable-next-line
	}, []);

	return (
		<Container>
			<Row className="top">
				<Col className="top-left">
					<span>Total Balance:</span>
					<h1 className="balance">{currencyAmout[type]}</h1>
				</Col>
				<Col>
					<h1 className="icon">{Icon} </h1>
				</Col>
			</Row>

			<Col className="btm">
				<h3>Latest Transactions: </h3>
				<Card className="transactions">
					<ListGroup variant="flush">
						{transactions.map(value => (
							<ListGroup.Item key={value.id}>
								<Row className="transaction">
									<Col>
										<h6>{value.item}</h6>
										<p>{value.date}</p>
									</Col>
									<Col>
										<h3
											style={{
												textAlign: 'right',
												color: value.inflow ? 'green' : 'red',
											}}
										>
											{value.inflow ? '+' : '-'}
											{(value.amount / currencyRatio[type]).toFixed(2)}
										</h3>
									</Col>
								</Row>
							</ListGroup.Item>
						))}
					</ListGroup>
				</Card>
			</Col>
		</Container>
	);
};

const WalletPage = () => {
	return (
		<Layout title="Wallet">
			<div>
				<Tabs fill defaultActiveKey="cash" style={{ marginTop: '-25px' }}>
					<Tab eventKey="cash" title="Cash">
						<Wallet type="cash" title="Cash" />
					</Tab>
					<Tab eventKey="bitcoin" title="Bitcoin">
						<Wallet type="bitcoin" title="Bitcoin" />
					</Tab>
					<Tab eventKey="ethereum" title="Ethereum">
						<Wallet type="ethereum" title="Ethereum" />
					</Tab>
				</Tabs>
			</div>
		</Layout>
	);
};
export default WalletPage;
