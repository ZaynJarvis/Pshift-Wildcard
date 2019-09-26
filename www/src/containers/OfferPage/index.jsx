import React, { useState } from 'react';
import Layout from '../Layout/index';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import Stepper from 'react-stepper-horizontal';
import { Redirect } from 'react-router-dom';

const OfferPage = () => {
	const [step, setStep] = useState(0);
	const [redirect, setRedirect] = useState(false);
	const buttonText = ['Next', 'Next', 'Next', 'Submit'];

	const onClick = () => {
		console.log(step);
		if (step === 3) {
			setRedirect(true);
		} else {
			setStep(step + 1);
			console.log(step);
		}
	};

	if (redirect) {
		return <Redirect to="/market" />;
	}

	return (
		<Layout title="Offer">
			<Container>
				<Col>
					<Row>
						<Stepper
							steps={[
								{ title: 'Milestone 0' },
								{ title: 'Milestone 1' },
								{ title: 'Milestone 2' },
								{ title: 'Milestone 2' },
							]}
							activeStep={step}
						/>
					</Row>
					<Form>
						<Form.Group>
							<Form.Label>
								<h3>Description</h3>
							</Form.Label>
							<Form.Control as="textarea" rows="5" placeholder="Be nice!" />
							<Form.Text className="text-muted">Describe the milestone</Form.Text>
						</Form.Group>

						<Form.Group>
							<Form.Label>
								<h3>Deliverables</h3>
							</Form.Label>
							<Form.Control placeholder="Enter Deliverables" />
							<Form.Text className="text-muted">What are you going to deliver?</Form.Text>
						</Form.Group>
						<Button variant="dark" block onClick={onClick} style={{ marginTop: '40px' }}>
							{buttonText[step]}
						</Button>
					</Form>
				</Col>
			</Container>
		</Layout>
	);
};

export default OfferPage;
