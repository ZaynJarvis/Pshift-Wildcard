import React, { Component } from 'react';
import './style.css';
import Layout from '../Layout';

import SearchInput, { createFilter } from 'react-search-input';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

// import projects from './mails'
import { LinkContainer } from 'react-router-bootstrap';

const KEYS_TO_FILTERS = ['name', 'desc'];

class Marketplace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  render() {
    const projects = [
      {
        name: 'Linux',
        id: 1,
        desc:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        name: 'React',
        id: 2,
        desc:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        name: 'Node.JS Backend',
        id: 3,
        desc:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        name: 'Python Flask',
        id: 4,
        desc:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        name: 'Web App',
        id: 5,
        desc:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        name: 'Telegram Chatbot 1',
        id: 6,
        desc:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        name: 'Mobile App Dev',
        id: 7,
        desc:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        name: 'Telegram Chatbot 2',
        id: 8,
        desc:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      }
    ];
    const filteredProjects = projects.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );

    return (
      <Layout title='Marketplace'>
        <Container>
          <Row>
            <Col>
              <SearchInput
                className='search-input form-control'
                onChange={this.searchUpdated}
              />
            </Col>
          </Row>

          <Row>
            {filteredProjects.map(project => {
              return (
                <Col md={4}>
                  <Card>
                    <Card.Img
                      variant='top'
                      src='https://source.unsplash.com/180x100/?coding'
                    />
                    <Card.Body>
                      <Card.Title>{project.name}</Card.Title>
                      <Card.Text>{project.desc}</Card.Text>
                      <LinkContainer exact to={`/job/${project.id}`}>
                        <Button variant='primary'>Apply</Button>
                      </LinkContainer>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Layout>
    );
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }
}

export default Marketplace;
