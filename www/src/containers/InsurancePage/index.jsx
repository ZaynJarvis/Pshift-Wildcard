import InsuranceContext from '../../context/insurance/insuranceContext';
import { Button } from 'react-bootstrap';

import React from 'react';

import './style.css';
import Layout from '../Layout';

const Insurance = ({ feature, title, desc }) => (
  <div className={'insurance ' + feature}>
    <h5>{title}</h5>
    <p>{desc}</p>
    <Button className='add-button' variant='outline-light'>
      Apply
    </Button>
  </div>
);
export default () => {
  const { insurances } = React.useContext(InsuranceContext);
  const type = ['basic', 'intermediate', 'advanced'];
  return (
    <Layout title='Insurance'>
      <div className='insurance-page'>
        <h4>Rewards</h4>
        <div
          style={{
            width: '85%',
            background: 'lightgrey',
            height: '3px',
            marginBottom: '4rem'
          }}>
          <div
            role='progressbar'
            class='progress-bar bg-danger'
            style={{ height: '3px', width: '80%' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Exp.</span>
            <span role='img' aria-label='img'>
              👑
            </span>
          </div>
        </div>
        {insurances
          // .filter(m => m.type === 'home')
          .map((m, i) => (
            <Insurance
              feature={type[i % 3]}
              title={m.title}
              desc={m.description}
              key={m.title}
            />
          ))}
      </div>
    </Layout>
  );
};

// import React, { useContext } from 'react';
// import './style.css';
// import Layout from '../Layout';
// import { Container, Row, Col, Button, Card, Carousel, Tabs, Tab } from 'react-bootstrap';

// 	return (
// 		<Layout title="Insurance">
// 			<Container>
// 				<Row style={{ height: '180px' }}>
// 					<Col>
// 						<Carousel>
// 							<Carousel.Item>
// 								<Image
// 									// src="https://source.unsplash.com/800x400/?doctor"
// 									// className="w-100"
// 									alt="..."
// 									style={{ objectFit: 'cover' }}
// 								></Image>

// 								<Carousel.Caption>
// 									<h3>CancerCare</h3>
// 									<p>From S$8.90/mth with 100% payout at any stage.</p>
// 								</Carousel.Caption>
// 							</Carousel.Item>
// 							<Carousel.Item>
// 								<Image
// 									src="https://source.unsplash.com/800x400/?travel"
// 									// noLazyLoad="true"
// 									// className="w-100"
// 									style={{ objectFit: 'cover' }}
// 									alt="..."
// 								></Image>

// 								<Carousel.Caption>
// 									<h3>Travel Insurance</h3>
// 									<p>60% off for TravellerShield Plans by end 2019.</p>
// 								</Carousel.Caption>
// 							</Carousel.Item>
// 							<Carousel.Item>
// 								<Image
// 									src="https://source.unsplash.com/800x400/?car"
// 									// noLazyLoad="true"
// 									// className="w-100"
// 									style={{ objectFit: 'cover' }}
// 									alt="..."
// 								></Image>
// 								<Carousel.Caption>
// 									<h3>Car Insurance</h3>
// 									<p>Get 10% off by comparing quotes from 3 insurers.</p>
// 								</Carousel.Caption>
// 							</Carousel.Item>
// 						</Carousel>
// 					</Col>
// 				</Row>
// 				<Row>
// 					<Col>
// 						<Tabs fill defaultActiveKey="travel" id="uncontrolled-tab-example">
// 							<Tab eventKey="travel" title="Travel">
// 								<Row>
// 									{insurances
// 										.filter(insurance => {
// 											return insurance.type === 'travel';
// 										})
// 										.map(insurance => (
// 											<Col md={4} key={insurance.id}>
// 												<Card>
// 													<Image
// 														src={insurance.imageUrl}
// 														noLazyLoad="true"
// 														className="cardImgTop"
// 														height="200"
// 														style={{ objectFit: 'cover' }}
// 														alt="..."
// 													></Image>
// 													<Card.Body>
// 														<Card.Title>{insurance.title}</Card.Title>
// 														<Card.Text>{insurance.description}</Card.Text>
// 														<Button variant="primary">Apply</Button>
// 													</Card.Body>
// 												</Card>
// 											</Col>
// 										))}
// 								</Row>
// 							</Tab>

// 							<Tab eventKey="home" title="Home">
// 								<Row>
// 									{insurances
// 										.filter(insurance => {
// 											return insurance.type === 'home';
// 										})
// 										.map(insurance => (
// 											<Col md={4} key={insurance.id}>
// 												<Card>
// 													<Image
// 														src={insurance.imageUrl}
// 														noLazyLoad="true"
// 														style={{ objectFit: 'cover' }}
// 														className="cardImgTop"
// 														height="200"
// 														alt="..."
// 													></Image>
// 													<Card.Body>
// 														<Card.Title>{insurance.title}</Card.Title>
// 														<Card.Text>{insurance.description}</Card.Text>
// 														<Button variant="primary">Apply</Button>
// 													</Card.Body>
// 												</Card>
// 											</Col>
// 										))}
// 								</Row>
// 							</Tab>
// 							<Tab eventKey="coming" title="Coming soon..." disabled></Tab>
// 						</Tabs>
// 					</Col>
// 				</Row>
// 			</Container>
// 		</Layout>
// 	);
// };

// export default InsurancePage;
