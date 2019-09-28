import React from 'react';
import './style.css';
import { Col, Button } from 'react-bootstrap';
import Layout from '../Layout/index';
import { withRouter } from 'react-router-dom';
import Stepper from './Stepper';
import BottomNavigation from '../../components/BottomNavigation/index';
import { Link } from 'react-router-dom';

const MilestonePage = ({ match, history }) => {
  return (
    <>
      <Layout title='Milestone'>
        <Col>
          <Stepper id={match.params.id} />
          <BottomNavigation />
        </Col>
        <div className='dispute-button'>
          <Link to='/dispute'>
            <Button variant='outline-danger' color='secondary'>
              Start a Dispute
            </Button>
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default withRouter(MilestonePage);
