import React, { useContext, useEffect } from 'react';
import './style.css';
import Layout from '../Layout';
import InsuranceContext from '../../context/insurance/insuranceContext';

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Carousel,
  Tabs,
  Tab
} from 'react-bootstrap';
import Image from 'react-graceful-image';

const InsurancePage = () => {
  const insuranceContext = useContext(InsuranceContext);
  const { insurances, getAllInsurances } = insuranceContext;

  useEffect(() => {
    getAllInsurances();
    // NOTE Fix warning
    // eslint-disable-next-line
  }, []);

  return (
    <Layout title='Insurance'>
      <Container>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <Image
                  src='https://source.unsplash.com/800x400/?doctor'
                  // noLazyLoad='true'
                  className='d-block w-100'
                  alt='...'></Image>

                <Carousel.Caption>
                  <h3>CancerCare</h3>
                  <p>From S$8.90/mth with 100% payout at any stage.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src='https://source.unsplash.com/800x400/?travel'
                  noLazyLoad='true'
                  className='d-block w-100'
                  alt='...'></Image>

                <Carousel.Caption>
                  <h3>Travel Insurance</h3>
                  <p>60% off for TravellerShield Plans by end 2019.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src='https://source.unsplash.com/800x400/?car'
                  noLazyLoad='true'
                  className='d-block w-100'
                  alt='...'></Image>
                <Carousel.Caption>
                  <h3>Car Insurance</h3>
                  <p>Get 10% off by comparing quotes from 3 insurers.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tabs fill defaultActiveKey='travel' id='uncontrolled-tab-example'>
              <Tab eventKey='travel' title='Travel'>
                <Row>
                  <Col md={4}>
                    {insurances
                      .filter(insurance => {
                        return insurance.type === 'travel';
                      })
                      .map(insurance => (
                        <Card key={insurance.id}>
                          <Image
                            src={insurance.imageUrl}
                            noLazyLoad='true'
                            className='cardImgTop'
                            height='200'
                            alt='...'></Image>
                          <Card.Body>
                            <Card.Title>{insurance.title}</Card.Title>
                            <Card.Text>{insurance.description}</Card.Text>
                            <Button variant='primary'>Apply</Button>
                          </Card.Body>
                        </Card>
                      ))}
                  </Col>
                </Row>
              </Tab>

              <Tab eventKey='home' title='Home'>
                <Row>
                  <Col md={4}>
                    {insurances
                      .filter(insurance => {
                        return insurance.type === 'home';
                      })
                      .map(insurance => (
                        <Card key={insurance.id}>
                          <Image
                            src={insurance.imageUrl}
                            noLazyLoad='true'
                            className='cardImgTop'
                            height='200'
                            alt='...'></Image>
                          <Card.Body>
                            <Card.Title>{insurance.title}</Card.Title>
                            <Card.Text>{insurance.description}</Card.Text>
                            <Button variant='primary'>Apply</Button>
                          </Card.Body>
                        </Card>
                      ))}
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey='coming' title='Coming soon...' disabled></Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default InsurancePage;
