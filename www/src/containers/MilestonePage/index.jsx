import React from 'react';
import './style.css';
import { Row, Col } from 'react-bootstrap';
import Layout from '../Layout/index';
import { withRouter } from 'react-router-dom';
import Stepper from './Stepper';
import BottomNavigation from '../../components/BottomNavigation/index';

const MilestonePage = ({ match, history }) => {
  return (
    <>
      <Layout title='Milestone'>
        <Row>
          <Col>
            <Stepper id={match.params.id} />
            <BottomNavigation />
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default withRouter(MilestonePage);
