import React from 'react';
import Layout from '../../Layout/index';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DisputePage = () => {
  return (
    <Layout title='Dispute '>
      <Container>
        <Row className='top'>
          <Col className='top-left'>
            <h1 className='balance'>React Prototype</h1>
            <h2 className='balance' style={{ color: '#777' }}>
              Milestone 1
            </h2>
            <p>
              Discuss on the Project structure. Reach Consensus on SCOPE,
              PERFORMANCE, ROBUSTNESS. Deliver UI MockUp.
            </p>
            <textarea
              placeholder='Remember, be nice!'
              cols='45'
              rows='10'
              style={{ border: '1px dashed #32a8a4' }}></textarea>
            <Button
              variant='outline-secondary'
              block
              style={{ marginTop: '10px' }}>
              Upload material
            </Button>
            <Link to='/projects'>
              <Button
                variant='outline-dark'
                block
                style={{ marginTop: '15px' }}>
                Submit
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default DisputePage;
