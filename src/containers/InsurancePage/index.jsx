import React from 'react';
import './style.css';
import Layout from '../Layout';

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
const InsurancePage = () => {
  return (
    <Layout title='Insurance'>
      <Container>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src='https://source.unsplash.com/800x400/?doctor'
                  alt='First slide'
                />
                <Carousel.Caption>
                  <h3>CancerCare</h3>
                  <p>From S$8.90/mth with 100% payout at any stage.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src='https://source.unsplash.com/800x400/?travel'
                  alt='Third slide'
                />

                <Carousel.Caption>
                  <h3>Travel Insurance</h3>
                  <p>60% off for TravellerShield Plans by end 2019.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src='https://source.unsplash.com/800x400/?car'
                  alt='Third slide'
                />
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
                    <Card>
                      <Card.Img
                        variant='top'
                        src='https://source.unsplash.com/180x100/?coding'
                      />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card>
                      <Card.Img
                        variant='top'
                        src='https://source.unsplash.com/180x100/?coding'
                      />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card>
                      <Card.Img
                        variant='top'
                        src='https://source.unsplash.com/180x100/?coding'
                      />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card>
                      <Card.Img
                        variant='top'
                        src='https://source.unsplash.com/180x100/?coding'
                      />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card>
                      <Card.Img
                        variant='top'
                        src='https://source.unsplash.com/180x100/?coding'
                      />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab>

              <Tab eventKey='home' title='Home'>
                <Row>
                  <Col md={4}>
                    <Card>
                      <Card.Img
                        variant='top'
                        src='https://source.unsplash.com/180x100/?coding'
                      />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card>
                      <Card.Img
                        variant='top'
                        src='https://source.unsplash.com/180x100/?coding'
                      />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card>
                      <Card.Img
                        variant='top'
                        src='https://source.unsplash.com/180x100/?coding'
                      />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card>
                      <Card.Img
                        variant='top'
                        src='https://source.unsplash.com/180x100/?coding'
                      />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card>
                      <Card.Img
                        variant='top'
                        src='https://source.unsplash.com/180x100/?coding'
                      />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab>

              <Tab eventKey='comingSoon' title='Coming Soon' disabled>
                <Row>
                  <Col md={4}>
                    <Card>
                      <Card.Img
                        variant='top'
                        src='https://source.unsplash.com/180x100/?coding'
                      />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card>
                      <Card.Img
                        variant='top'
                        src='https://source.unsplash.com/180x100/?coding'
                      />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card>
                      <Card.Img
                        variant='top'
                        src='https://source.unsplash.com/180x100/?coding'
                      />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card>
                      <Card.Img
                        variant='top'
                        src='https://source.unsplash.com/180x100/?coding'
                      />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card>
                      <Card.Img
                        variant='top'
                        src='https://source.unsplash.com/180x100/?coding'
                      />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default InsurancePage;
