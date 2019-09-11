import React from 'react';
import './style.css';
import { Row, Col, Container } from 'react-bootstrap';
import Layout from '../Layout/index';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Stepper from './Stepper';

const MilestonePage = ({ match, history }) => {
  return (
    <>
      <Layout title='Milestone'>
        <Row>
          <Col>
            <Stepper id={match.params.id} />
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default withRouter(MilestonePage);
