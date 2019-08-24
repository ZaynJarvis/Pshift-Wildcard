import React from 'react';
import './style.css';
import Layout from '../Layout';

import { Container, Row, Col, Button, Card, Carousel, Tabs, Tab } from 'react-bootstrap';

export default () => {
	return (
		<Layout title="Insurance">
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
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
							className="d-block w-100"
							src="https://source.unsplash.com/800x400/?coding"
							alt="Third slide"
							/>

							<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
							className="d-block w-100"
							src="https://source.unsplash.com/800x400/?coding"
							alt="Third slide"
							/>

							<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
							</Carousel.Caption>
						</Carousel.Item>
						</Carousel>
					</Col>
				</Row>

				<Row>
					<Col>

						<Tabs fill defaultActiveKey="travel" id="uncontrolled-tab-example">

						<Tab eventKey="travel" title="Travel">
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
										<Button variant="primary">Go somewhere</Button>
									</Card.Body>
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
										<Button variant="primary">Go somewhere</Button>
									</Card.Body>
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
										<Button variant="primary">Go somewhere</Button>
									</Card.Body>
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
										<Button variant="primary">Go somewhere</Button>
									</Card.Body>
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
										<Button variant="primary">Go somewhere</Button>
									</Card.Body>
									</Card>					
								</Col>
							</Row>
						</Tab>

						<Tab eventKey="home" title="Home">
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
										<Button variant="primary">Go somewhere</Button>
									</Card.Body>
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
										<Button variant="primary">Go somewhere</Button>
									</Card.Body>
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
										<Button variant="primary">Go somewhere</Button>
									</Card.Body>
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
										<Button variant="primary">Go somewhere</Button>
									</Card.Body>
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
										<Button variant="primary">Go somewhere</Button>
									</Card.Body>
									</Card>					
								</Col>
							</Row>

						</Tab>

						<Tab eventKey="comingSoon" title="Coming Soon" disabled>
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
										<Button variant="primary">Go somewhere</Button>
									</Card.Body>
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
										<Button variant="primary">Go somewhere</Button>
									</Card.Body>
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
										<Button variant="primary">Go somewhere</Button>
									</Card.Body>
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
										<Button variant="primary">Go somewhere</Button>
									</Card.Body>
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
										<Button variant="primary">Go somewhere</Button>
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
