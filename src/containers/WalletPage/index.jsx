import React, { useEffect, useContext } from 'react';
import './style.css';
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
import TransactionContext from '../../context/transaction/transactionContext';

const Wallet = (type, title) => {
  const currencyType = {
    cash: <FaDollarSign />,
    bitcoin: <FaBitcoin />,
    ethereum: <FaEthereum />
  };

  const transactionContext = useContext(TransactionContext);
  // console.log(transactionContext);

  const { transactions, loading, getAllTransactions } = transactionContext;

  useEffect(() => {
    getAllTransactions();
    // eslint-disable-next-line
  }, []);

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
        {loading ? (
          <div></div>
        ) : (
          <Card className='transactions'>
            <ListGroup variant='flush'>
              {transactions.map(value => (
                <ListGroup.Item key={value.id}>
                  <Row className='transaction'>
                    <Col>
                      <h4>{value.item}</h4>
                      <p>{value.date}</p>
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
        )}
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
