import React from 'react';

import './style.css';
import Layout from '../Layout';

import { Container, Row, Col, ButtonGroup, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export default () => {
	return (
		<Layout title="Projects">
			<Container>
				
				<Row>
					<Col>
						<ButtonGroup className="centralize">
							<Button variant="primary">In Progress</Button>
							<Button variant="light">Completed</Button>
						</ButtonGroup>
					</Col>
				</Row>
			
				<Row>
					<Col md={4}>
						<Card>
						<Card.Img variant="top" src="https://via.placeholder.com/180x100.png" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
							</Card.Text>
							<Button variant="primary">Manage</Button>
						</Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroup.Item variant="success">Phase 1 of 4: In Progress</ListGroup.Item>
						</ListGroup>
						</Card>
					</Col>
					<Col md={4}>
						<Card>
						<Card.Img variant="top" src="https://via.placeholder.com/180x100.png" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
							</Card.Text>
							<Button variant="primary">Manage</Button>
						</Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroup.Item variant="success">Phase 1 of 4: In Progress</ListGroup.Item>
						</ListGroup>
						</Card>
					</Col>
					<Col md={4}>
						<Card>
						<Card.Img variant="top" src="https://via.placeholder.com/180x100.png" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
							</Card.Text>
							<Button variant="primary">Manage</Button>
						</Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroup.Item variant="success">Phase 1 of 4: In Progress</ListGroup.Item>
						</ListGroup>
						</Card>
					</Col>
					<Col md={4}>
						<Card>
						<Card.Img variant="top" src="https://via.placeholder.com/180x100.png" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
							</Card.Text>
							<Button variant="primary">Manage</Button>
						</Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroup.Item variant="success">Phase 1 of 4: In Progress</ListGroup.Item>
						</ListGroup>
						</Card>
					</Col>
					<Col md={4}>
						<Card>
						<Card.Img variant="top" src="https://via.placeholder.com/180x100.png" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
							</Card.Text>
							<Button variant="primary">Manage</Button>
						</Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroup.Item variant="success">Phase 1 of 4: In Progress</ListGroup.Item>
						</ListGroup>
						</Card>
					</Col>
				</Row>

			</Container>
		</Layout>
	);
};
