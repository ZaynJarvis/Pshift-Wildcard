import React, { useEffect, useContext, useState } from 'react';
import './style.css';
import Layout from '../Layout';

import SearchInput, { createFilter } from 'react-search-input';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import GigContext from '../../context/gig/gigContext';
import Image from 'react-graceful-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const KEYS_TO_FILTERS = ['title', 'description'];

const MarketPage = () => {
	const gigContext = useContext(GigContext);

	const { gigs, getAllGigs } = gigContext;

	useEffect(() => {
		getAllGigs();
		// eslint-disable-next-line
	}, []);

	const [searchTerm, setTerm] = useState('');

	const searchUpdated = term => {
		setTerm(term);
	};

	const updateLike = id => {
		const gigsToUpdate = filteredGigs.find(p => p.id === id)
		gigsToUpdate.like = !gigsToUpdate.like;
		// update gigs redux action
	};

	const filteredGigs = gigs.filter(createFilter(searchTerm, KEYS_TO_FILTERS));

	return (
		<Layout title="Marketplace">
			<Container>
				<Row>
					<Col>
						<SearchInput className="search-input form-control" onChange={searchUpdated} />
					</Col>
				</Row>

				<Row>
					{filteredGigs.map(project => {
						return (
							<Col md={4}>
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
										<div className="links" exact to={`/offer/${project.id}`}>
											<Button variant="primary">Apply</Button>
											{project.like ? (
												<FontAwesomeIcon
													icon={faStar}
													onClick={() => updateLike(project.id)}
													className="like"
												/>
											) : (
												<FontAwesomeIcon
													icon={faStar}
													onClick={() => updateLike(project.id)}
													className="default"
												/>
											)}
										</div>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				</Row>
			</Container>
		</Layout>
	);
};

export default MarketPage;
