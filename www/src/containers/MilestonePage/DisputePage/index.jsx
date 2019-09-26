import React from 'react';
import Layout from '../../Layout/index';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DisputePage = () => {
  return (
    <Layout title='Dispute '>
      <Container>
        <Row>
          <Col>
            <h1 className='balance'>React Prototype</h1>
            <h2 className='balance' style={{ color: '#777' }}>
              Milestone 1
            </h2>
            <p>
              Discuss on the Project structure. Reach Consensus on SCOPE,
              PERFORMANCE, ROBUSTNESS. Deliver UI MockUp.
            </p>
            <Form>
              <Form.Group>
                <Form.Label>
                  <h3>Description</h3>
                </Form.Label>
                <Form.Control
                  as='textarea'
                  rows='5'
                  placeholder='Enter description'
                />
                <Form.Text className='text-muted'>
                  Describe the milestone
                </Form.Text>
              </Form.Group>
              <Button
                variant='outline-secondary'
                block
                style={{ marginTop: '20px' }}>
                Upload material
              </Button>
              <Link to='/projects'>
                <Button
                  variant='outline-light'
                  block
                  style={{ marginTop: '20px' }}>
                  Submit
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default DisputePage;
