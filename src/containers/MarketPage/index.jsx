import React, { useEffect, useContext, useState } from 'react';
import './style.css';
import Layout from '../Layout';

import SearchInput, { createFilter } from 'react-search-input';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import GigContext from '../../context/gig/gigContext';
import Loader from 'react-loader-spinner';

const KEYS_TO_FILTERS = ['title', 'description'];

const MarketPage = () => {
  const gigContext = useContext(GigContext);

  const { gigs, loading, getAllGigs } = gigContext;

  useEffect(() => {
    getAllGigs();
    // NOTE Fix warning
    // eslint-disable-next-line
  }, []);

  const [searchTerm, setTerm] = useState('');

  const searchUpdated = term => {
    setTerm(term);
  };

  // Comment out during test phase
  // const filteredGigs = gigs.filter(createFilter(searchTerm, KEYS_TO_FILTERS));
  const filteredGigs = [{}, {}, {}];

  return (
    <Layout title='Marketplace'>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {/* <Loader
            type='Rings'
            color='#00BFFF'
            height={100}
            width={100}
            // timeout={3000} //3 secs
          /> */}
        </div>
      ) : (
        <Container>
          <Row>
            <Col>
              <SearchInput
                className='search-input form-control'
                onChange={searchUpdated}
              />
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              {filteredGigs.map(project => {
                return (
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
                      <LinkContainer exact to={`/job/${'project.id'}`}>
                        <Button variant='primary'>Apply</Button>
                      </LinkContainer>
                    </Card.Body>
                  </Card>
                );
              })}
            </Col>
          </Row>
        </Container>
      )}
    </Layout>
  );
};

export default MarketPage;
