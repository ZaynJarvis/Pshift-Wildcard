import React, { useContext, useState } from 'react';
import './style.css';
import Layout from '../Layout';

import SearchInput, { createFilter } from 'react-search-input';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import GigContext from '../../context/gig/gigContext';
import UserContext from '../../context/user/userContext';
import Image from 'react-graceful-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const KEYS_TO_FILTERS = ['title', 'description'];

const MarketPage = () => {
	const gigContext = useContext(GigContext);
	const userContext = useContext(UserContext);

	const { gigs, updateGig } = gigContext;
	const { id: uid } = userContext;

	const [searchTerm, setTerm] = useState('');

	const searchUpdated = term => {
		setTerm(term);
	};

	const updateLike = (id, like) => {
		if (like === undefined) {
			like = [uid];
			updateGig(id, { like, uid });
		} else if (like.includes(uid)) {
			like = like.filter(u => u !== uid);
			updateGig(id, { like, uid });
		} else {
			like = [...like, uid];
			updateGig(id, { like, uid });
		}
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
					{filteredGigs.map((project, i) => {
						return (
							<Col md={4} key={project.id + i}>
								<Card>
									<Image
										src={project.imageUrl}
										noLazyLoad="true"
										className="cardImgTop"
										height="200"
										alt="..."
										style={{ objectFit: 'cover' }}
									></Image>
									<Card.Body>
										<Card.Title>{project.title}</Card.Title>
										<Card.Text>{project.description}</Card.Text>
										<div className="links">
											<LinkContainer to={`/offer/${project.id}`}>
												<Button variant="outline-info">Apply</Button>
											</LinkContainer>
											{project.like !== undefined && project.like.includes(uid) ? (
												<FontAwesomeIcon
													icon={faStar}
													onClick={() => updateLike(project.id, project.like)}
													className="like"
												/>
											) : (
												<FontAwesomeIcon
													icon={faStar}
													onClick={() => updateLike(project.id, project.like)}
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
