import React, { useContext, useEffect } from 'react';
import './style.css';
import Layout from '../Layout';
import ProjectContext from '../../context/project/projectContext';
import UserContext from '../../context/user/userContext';

import { Container, Row, Col, Button, Card, Carousel, Tabs, Tab } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Image from 'react-graceful-image';

const ProjectsPage = () => {
	const projectContext = useContext(ProjectContext);

	const { projects, getProjectsByUser } = projectContext;

	// Get id of current user
	const userContext = useContext(UserContext);

	useEffect(() => {
		const { uid } = userContext;
		getProjectsByUser(uid);
		// eslint-disable-next-line
	}, []);

	return (
		<Layout title='Projects'>
			<Container>
				<Row>
					<Col>
						<Carousel>
							<Carousel.Item>
								<Image
									src='https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
									noLazyLoad='true'
									className='d-block w-100'
									style={{ height: '250px', objectFit: 'cover' }}
									alt='...'
								></Image>
								<Carousel.Caption>
									<h3>React App</h3>
									<p>Build a high performance, low latency application for banking sector</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<Image
									src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1072504832%2F960x0.jpg%3Ffit%3Dscale'
									noLazyLoad='true'
									className='d-block w-100'
									style={{ height: '250px' }}
									alt='...'
								></Image>
								<Carousel.Caption>
									<h3>Cloud Server</h3>
									<p>Migrate Node.js application to Google Cloud Platform</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<Image
									src='https://www.analyticsindiamag.com/wp-content/uploads/2019/05/Latest-UI-UX-Trends-2018.jpg'
									noLazyLoad='true'
									className='d-block w-100'
									style={{ height: '250px', objectFit: 'cover' }}
									alt='...'
								></Image>
								<Carousel.Caption>
									<h3>UI/UX Design</h3>
									<p>
										Design the user experience of a Healthcare EcoSystem for a HealthTech company
									</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</Col>
				</Row>

				<Row>
					<Col>
						<Tabs fill defaultActiveKey='ongoing' id='uncontrolled-tab-example'>
							<Tab eventKey='ongoing' title='Ongoing'>
								<Row>
									{projects
										? projects
												.filter(project => project.ProjectStatus === 'pending' || 'proposed')
												.map(project => (
													<Col md={4} key={project.id}>
														<Card>
															<Image
																src={project.gig ? project.gig.imageUrl : null}
																noLazyLoad='true'
																style={{ objectFit: 'cover' }}
																className='cardImgTop'
																height='200'
																alt='...'
															></Image>
															<Card.Body>
																<Card.Title>{project.gig ? project.gig.title : null}</Card.Title>
																<Card.Text>
																	{project.gig ? project.gig.description : null}
																</Card.Text>
																<LinkContainer to='/project/0'>
																	<Button>Manage Milestones</Button>
																</LinkContainer>
															</Card.Body>
														</Card>
													</Col>
												))
										: null}{' '}
								</Row>
							</Tab>

							<Tab eventKey='completed' title='Completed'>
								<Row>
									{projects
										.filter(project => project.ProjectStatus === 'complete')
										.map(project => (
											<Col md={4} key={project.id}>
												<Card>
													<Image
														src={project.gig.imageUrl}
														noLazyLoad='true'
														style={{ objectFit: 'cover' }}
														className='cardImgTop'
														height='200'
														alt='...'
													></Image>
													<Card.Body>
														<Card.Title>{project.gig.title}</Card.Title>
														<Card.Text>{project.gig.description}</Card.Text>
														<LinkContainer to='/project/0'>
															<Button>Manage Milestones</Button>
														</LinkContainer>
													</Card.Body>
												</Card>
											</Col>
										))}
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
