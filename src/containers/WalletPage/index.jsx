import React from 'react';

import './style.css';
import transactions from '../../mock/transactions';
import Layout from '../Layout';
import {
  Row,
  Col,
  Tab,
  Tabs,
  Container,
  ListGroup,
  Card
} from 'react-bootstrap';
import { FaBitcoin, FaEthereum, FaDollarSign } from 'react-icons/fa';

// const Card = () => <div className='payment-card'>200-301-201-222</div>;

const Wallet = ({ type, title }) => {
  const [currency, setCurrency] = React.useState('$');
  const [show, setShow] = React.useState(false);

  const inputEl = React.useRef(null);
  const currencyMap = [
    { sign: '$', ratio: 1 },
    { sign: '¥', ratio: 5 },
    { sign: '€', ratio: 0.5 }
  ];
  const currencyType = {
    cash: <FaDollarSign />,
    bitcoin: <FaBitcoin />,
    ethereum: <FaEthereum />
  };
  return (
    <Container>
      <Row className='top'>
        <Col className='top-left'>
          <span>Total Balance:</span>
          <h1 className='balance'>32,000</h1>
        </Col>
        <Col>
          <h1 className='icon'>{currencyType[type]} </h1>
        </Col>
      </Row>

      <Col className='btm'>
        <h1>Latest Transactions: </h1>
        <Card className='transactions'>
          <ListGroup variant='flush'>
            {transactions.map(value => (
              <ListGroup.Item key={value.id}>
                <Row className='transaction'>
                  <Col>
                    <h3>{value.item}</h3>
                    <p>{value.description}</p>
                  </Col>
                  <Col>
                    <h3
                      style={{
                        textAlign: 'right',
                        color: value.inflow ? 'green' : 'red'
                      }}>
                      {value.inflow ? '+' : '-'}
                      {value.amount}
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
    <Layout title='Wallet'>
      <Row>
        <Col>
          <Tabs fill defaultActiveKey='cash' style={{ marginTop: '-25px' }}>
            <Tab eventKey='cash' title='Cash'>
              <Wallet type='cash' title='Cash' />
            </Tab>
            <Tab eventKey='bitcoin' title='Bitcoin'>
              <Wallet type='bitcoin' title='Bitcoin' />
            </Tab>
            <Tab eventKey='ethereum' title='Ethereum'>
              <Wallet type='ethereum' title='Ethereum' />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Layout>
  );
};
export default WalletPage;
