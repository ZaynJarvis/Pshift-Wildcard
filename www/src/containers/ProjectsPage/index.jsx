import React, { useContext, useEffect } from 'react';
import './style.css';
import Layout from '../Layout';
import ProjectContext from '../../context/project/projectContext';
import { Container, Row, Col, Button, Card, Carousel, Tabs, Tab, ListGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Image from 'react-graceful-image';

const ProjectsPage = () => {
	const projectContext = useContext(ProjectContext);

	const { projects, getAllProjects } = projectContext;

	useEffect(() => {
		getAllProjects();
		// eslint-disable-next-line
	}, []);

	return (
		<Layout title="Projects">
			<Container>
				<Row>
					<Col>
						<Carousel>
							<Carousel.Item>
								<Image
									src="https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
									noLazyLoad="true"
									className="d-block w-100"
									style={{ height: '250px' }}
									alt="..."
								></Image>
								<Carousel.Caption>
									<h3>React App</h3>
									<p>Build a high performance, low latency application for banking sector</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<Image
									src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1072504832%2F960x0.jpg%3Ffit%3Dscale"
									noLazyLoad="true"
									className="d-block w-100"
									style={{ height: '250px' }}
									alt="..."
								></Image>
								<Carousel.Caption>
									<h3>Cloud Server</h3>
									<p>Migrate Node.js application to Google Cloud Platform</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<Image
									src="https://www.analyticsindiamag.com/wp-content/uploads/2019/05/Latest-UI-UX-Trends-2018.jpg"
									noLazyLoad="true"
									className="d-block w-100"
									style={{ height: '250px' }}
									alt="..."
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
						<Tabs fill defaultActiveKey="ongoing" id="uncontrolled-tab-example">
							<Tab eventKey="ongoing" title="Ongoing">
								<Row>
									{projects.map(project => (
										<Col md={4} key={project.id}>
											<Card>
												<Image
													src={project.imageUrl}
													noLazyLoad="true"
													className="cardImgTop"
													height="200"
													alt="..."
												></Image>
												<Card.Body>
													<Card.Title>{project.title}</Card.Title>
													<Card.Text>{project.description}</Card.Text>
													<LinkContainer to="/project/0">
														<Button>Manage Milestones</Button>
													</LinkContainer>
												</Card.Body>
												<ListGroup className="list-group-flush">
													<ListGroup.Item variant="success">
														Phase 2 of 4: In Progress
													</ListGroup.Item>
												</ListGroup>
											</Card>
										</Col>
									))}
								</Row>
							</Tab>

							<Tab eventKey="completed" title="Completed">
								<Row>
									<Col md={4}>
										{projects.map(project => (
											<Card key={project.id}>
												<Image
													src={project.imageUrl}
													noLazyLoad="true"
													className="cardImgTop"
													height="200"
													alt="..."
												></Image>
												<Card.Body>
													<Card.Title>{project.title}</Card.Title>
													<Card.Text>{project.description}</Card.Text>
												</Card.Body>
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
