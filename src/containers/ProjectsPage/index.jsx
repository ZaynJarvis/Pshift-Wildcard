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
import Image from 'react-graceful-image';

const ProjectsPage = () => {
  const projectContext = useContext(ProjectContext);

  const { projects, loading, getAllProjects } = projectContext;

  useEffect(() => {
    getAllProjects();
    // eslint-disable-next-line
  }, []);

  return (
    <Layout title='Projects'>
      <Container>
        <Row>
          <Col>
            <Carousel>
              {projects
                .filter(project => {
                  return project.inCarousel === true;
                })
                .map(project => (
                  <Carousel.Item key={project.id}>
                    <Image
                      src={project.imageUrl}
                      noLazyLoad='true'
                      className='d-block w-100'
                      alt='...'></Image>
                    <Carousel.Caption>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
            </Carousel>
          </Col>
        </Row>

        <Row>
          <Col>
            <Tabs fill defaultActiveKey='ongoing' id='uncontrolled-tab-example'>
              <Tab eventKey='ongoing' title='Ongoing'>
                <Row>
                  <Col md={4}>
                    {projects
                      // .filter(project => {
                      //   return project.inCarousel === false;
                      // })
                      .map(project => (
                        <Card key={project.id}>
                          <Image
                            src={project.imageUrl}
                            noLazyLoad='true'
                            className='cardImgTop'
                            height='200'
                            alt='...'></Image>
                          <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
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
                        <Card key={project.id}>
                          <Image
                            src={project.imageUrl}
                            noLazyLoad='true'
                            className='cardImgTop'
                            height='250'
                            alt='...'></Image>
                          <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
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
    </Layout>
  );
};

export default ProjectsPage;
