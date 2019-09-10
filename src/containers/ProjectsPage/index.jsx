import React, { useContext, useEffect } from 'react';
import './style.css';
import Layout from '../Layout';
import ProjectContext from '../../context/project/projectContext';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Carousel,
  Tabs,
  Tab,
  ListGroup
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Loader from 'react-loader-spinner';

const ProjectsPage = () => {
  const projectContext = useContext(ProjectContext);

  // Comment out during dev phase
  // const {projects} = projectContext
  const { loading, getAllProjects } = projectContext;
  const projects = [{}, {}, {}];
  useEffect(() => {
    getAllProjects();
    // eslint-disable-next-line
  }, []);

  return (
    <Layout title='Projects'>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader
            type='Rings'
            color='#00BFFF'
            height={100}
            width={100}
            // timeout={3000} //3 secs
          />
        </div>
      ) : (
        <Container>
          <Row>
            <Col>
              <Carousel>
                {projects
                  // .filter(project => {
                  //   return project.inCarousel === true;
                  // })
                  .map(project => (
                    <Carousel.Item key={'project.id'}>
                      <img
                        className='d-block w-100'
                        src={
                          'https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png'
                        }
                        alt='First slide'
                        style={{ height: '300px' }}
                      />
                      <Carousel.Caption>
                        <h3>{'project.title'}</h3>
                        <p>{'project.description'}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
              </Carousel>
            </Col>
          </Row>

          <Row>
            <Col>
              <Tabs
                fill
                defaultActiveKey='ongoing'
                id='uncontrolled-tab-example'>
                <Tab eventKey='ongoing' title='Ongoing'>
                  <Row>
                    <Col md={4}>
                      {projects
                        // .filter(project => {
                        //   return project.inCarousel === false;
                        // })
                        .map(project => (
                          <Card key={'project.id'}>
                            <Card.Img
                              variant='top'
                              src={
                                'https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png'
                              }
                            />
                            <Card.Body>
                              <Card.Title>{'project.title'}</Card.Title>
                              <Card.Text>{'project.description'}</Card.Text>
                              <LinkContainer to='/project/0'>
                                <Button>Manage Milestones</Button>
                              </LinkContainer>
                            </Card.Body>
                            <ListGroup className='list-group-flush'>
                              <ListGroup.Item variant='success'>
                                Phase 1 of 4: In Progress
                              </ListGroup.Item>
                            </ListGroup>
                          </Card>
                        ))}
                    </Col>
                  </Row>
                </Tab>

                <Tab eventKey='completed' title='Completed'>
                  <Row>
                    <Col md={4}>
                      {projects
                        // .filter(project => {
                        //   return project.isComplete === true;
                        // })
                        .map(project => (
                          <Card key={'project.id'}>
                            <Card.Img
                              variant='top'
                              src={
                                'https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png'
                              }
                            />
                            <Card.Body>
                              <Card.Title>{'project.title'}</Card.Title>
                              <Card.Text>{'project.description'}</Card.Text>
                              <LinkContainer to='/project/0'>
                                <Button>Manage Milestones</Button>
                              </LinkContainer>
                            </Card.Body>
                            <ListGroup className='list-group-flush'>
                              <ListGroup.Item variant='success'>
                                Phase 1 of 4: In Progress
                              </ListGroup.Item>
                            </ListGroup>
                          </Card>
                        ))}
                    </Col>
                  </Row>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      )}
    </Layout>
  );
};

export default ProjectsPage;
