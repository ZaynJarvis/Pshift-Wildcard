import React from 'react';
import Layout from '../Layout';
import { Container, Card, Button } from 'react-bootstrap';

const JobPage = () => {
  return (
    <div>
      <Layout title='Offer'>
        <Container>
          <Card className='text-center'>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
            <Card.Footer className='text-muted'>2 days ago</Card.Footer>
          </Card>
        </Container>
      </Layout>
    </div>
  );
};

export default JobPage;
