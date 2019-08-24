import React, { Component } from 'react';

import './style.css';
import Layout from '../Layout';

import { Container, Row, Col, ButtonGroup, Button, Card, ListGroup } from 'react-bootstrap';

class ProjectPage extends Component {

	constructor(props){
		super(props);
		this._onButtonChange = this._onButtonChange.bind(this);
		this.state = {
			option: "Ongoing",
		};
	  }

	_onButtonChange(option) {
		this.setState({
			option: option
		});
	}

	render() {
		return (
			<Layout title="Projects">
				<Container>
					
					<Row>
						<Col>
							<ButtonGroup className="centralize">
								<Button onClick={this._onButtonChange.bind(this, 'Ongoing')} active={this.state.option === 'Ongoing'}>Ongoing</Button>
								<Button onClick={this._onButtonChange.bind(this, 'Completed')} active={this.state.option === 'Completed'}>Completed</Button>
							</ButtonGroup>
						</Col>
					</Row>
				
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
								<Button variant="primary">Manage</Button>
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
								<Button variant="primary">Manage</Button>
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
								<Button variant="primary">Manage</Button>
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
								<Button variant="primary">Manage</Button>
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
	}

};

export default ProjectPage;
