import React from 'react';
import './style.css';
import Layout from '../Layout';

import { Container, Row, Col, Button, Card, Carousel, Tabs, Tab, ListGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

export default () => {
	return (
		<Layout title="Projects">
			<Container>

				<Row>
					<Col>
						<Carousel>
							<Carousel.Item>
								<img
								className="d-block w-100"
								src="https://source.unsplash.com/800x400/?coding"
								alt="First slide"
								/>
								<Carousel.Caption>
								<h3>Manage Projects</h3>
								<p>Here you can manage the milestones for ongoing projects and view completed projects.</p>
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
									<Col md={4}>
										<Card>
										<Card.Img variant="top" src="https://source.unsplash.com/180x100/?coding" />
										<Card.Body>
											<Card.Title>Card Title</Card.Title>
											<Card.Text>
											Some quick example text to build on the card title and make up the bulk of
											the card's content.
											</Card.Text>
											<LinkContainer to="/project/0">
												<Button>Manage Milestones</Button>
											</LinkContainer>											
										</Card.Body>
										<ListGroup className="list-group-flush">
											<ListGroup.Item variant="success">Phase 1 of 4: In Progress</ListGroup.Item>
										</ListGroup>
										</Card>
									</Col>
									<Col md={4}>
										<Card>
										<Card.Img variant="top" src="https://source.unsplash.com/180x100/?coding" />
										<Card.Body>
											<Card.Title>Card Title</Card.Title>
											<Card.Text>
											Some quick example text to build on the card title and make up the bulk of
											the card's content.
											</Card.Text>
											<LinkContainer to="/project/0">
												<Button>Manage Milestones</Button>
											</LinkContainer>	
										</Card.Body>
										<ListGroup className="list-group-flush">
											<ListGroup.Item variant="success">Phase 1 of 4: In Progress</ListGroup.Item>
										</ListGroup>
										</Card>
									</Col>
									<Col md={4}>
										<Card>
										<Card.Img variant="top" src="https://source.unsplash.com/180x100/?coding" />
										<Card.Body>
											<Card.Title>Card Title</Card.Title>
											<Card.Text>
											Some quick example text to build on the card title and make up the bulk of
											the card's content.
											</Card.Text>
											<LinkContainer to="/project/0">
												<Button>Manage Milestones</Button>
											</LinkContainer>	
										</Card.Body>
										<ListGroup className="list-group-flush">
											<ListGroup.Item variant="success">Phase 1 of 4: In Progress</ListGroup.Item>
										</ListGroup>
										</Card>
									</Col>
									<Col md={4}>
										<Card>
										<Card.Img variant="top" src="https://source.unsplash.com/180x100/?coding" />
										<Card.Body>
											<Card.Title>Card Title</Card.Title>
											<Card.Text>
											Some quick example text to build on the card title and make up the bulk of
											the card's content.
											</Card.Text>
											<LinkContainer to="/project/0">
												<Button>Manage Milestones</Button>
											</LinkContainer>	
										</Card.Body>
										<ListGroup className="list-group-flush">
											<ListGroup.Item variant="success">Phase 1 of 4: In Progress</ListGroup.Item>
										</ListGroup>
										</Card>
									</Col>
									<Col md={4}>
										<Card>
										<Card.Img variant="top" src="https://source.unsplash.com/180x100/?coding" />
										<Card.Body>
											<Card.Title>Card Title</Card.Title>
											<Card.Text>
											Some quick example text to build on the card title and make up the bulk of
											the card's content.
											</Card.Text>
											<LinkContainer to="/project/0">
												<Button>Manage Milestones</Button>
											</LinkContainer>	
										</Card.Body>
										<ListGroup className="list-group-flush">
											<ListGroup.Item variant="success">Phase 1 of 4: In Progress</ListGroup.Item>
										</ListGroup>
										</Card>
									</Col>																								
								</Row>
							</Tab>

							<Tab eventKey="completed" title="Completed">
								<Row>
									<Col md={4}>
										<Card>
										<Card.Img variant="top" src="https://source.unsplash.com/180x100/?coding" />
										<Card.Body>
											<Card.Title>Card Title</Card.Title>
											<Card.Text>
											Some quick example text to build on the card title and make up the bulk of
											the card's content.
											</Card.Text>
											<LinkContainer to="/project/0">
												<Button>Manage Milestones</Button>
											</LinkContainer>
										</Card.Body>
										<ListGroup className="list-group-flush">
											<ListGroup.Item variant="success">Phase 1 of 4: In Progress</ListGroup.Item>
										</ListGroup>
										</Card>
									</Col>
									<Col md={4}>
										<Card>
										<Card.Img variant="top" src="https://source.unsplash.com/180x100/?coding" />
										<Card.Body>
											<Card.Title>Card Title</Card.Title>
											<Card.Text>
											Some quick example text to build on the card title and make up the bulk of
											the card's content.
											</Card.Text>
											<LinkContainer to="/project/0">
												<Button>Manage Milestones</Button>
											</LinkContainer>
										</Card.Body>
										<ListGroup className="list-group-flush">
											<ListGroup.Item variant="success">Phase 1 of 4: In Progress</ListGroup.Item>
										</ListGroup>
										</Card>
									</Col>
									<Col md={4}>
										<Card>
										<Card.Img variant="top" src="https://source.unsplash.com/180x100/?coding" />
										<Card.Body>
											<Card.Title>Card Title</Card.Title>
											<Card.Text>
											Some quick example text to build on the card title and make up the bulk of
											the card's content.
											</Card.Text>
											<LinkContainer to="/project/0">
												<Button>Manage Milestones</Button>
											</LinkContainer>
										</Card.Body>
										<ListGroup className="list-group-flush">
											<ListGroup.Item variant="success">Phase 1 of 4: In Progress</ListGroup.Item>
										</ListGroup>
										</Card>
									</Col>
									<Col md={4}>
										<Card>
										<Card.Img variant="top" src="https://source.unsplash.com/180x100/?coding" />
										<Card.Body>
											<Card.Title>Card Title</Card.Title>
											<Card.Text>
											Some quick example text to build on the card title and make up the bulk of
											the card's content.
											</Card.Text>
											<LinkContainer to="/project/0">
												<Button>Manage Milestones</Button>
											</LinkContainer>
										</Card.Body>
										<ListGroup className="list-group-flush">
											<ListGroup.Item variant="success">Phase 1 of 4: In Progress</ListGroup.Item>
										</ListGroup>
										</Card>
									</Col>
									<Col md={4}>
										<Card>
										<Card.Img variant="top" src="https://source.unsplash.com/180x100/?coding" />
										<Card.Body>
											<Card.Title>Card Title</Card.Title>
											<Card.Text>
											Some quick example text to build on the card title and make up the bulk of
											the card's content.
											</Card.Text>
											<LinkContainer to="/project/0">
												<Button>Manage Milestones</Button>
											</LinkContainer>
										</Card.Body>
										<ListGroup className="list-group-flush">
											<ListGroup.Item variant="success">Phase 1 of 4: In Progress</ListGroup.Item>
										</ListGroup>
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
