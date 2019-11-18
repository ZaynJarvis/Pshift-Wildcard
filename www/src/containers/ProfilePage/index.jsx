import React from 'react';
import Image from 'react-graceful-image';
import users from '../../mock/users';
import './index.css';
import { Card, Accordion } from 'react-bootstrap';
import UserContext from '../../context/user/userContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import GigContext from '../../context/gig/gigContext';
import ProjectContext from '../../context/project/projectContext';
import { Link } from 'react-router-dom';

export default () => {
	const { gigs, getAllGigs } = React.useContext(GigContext);
	const { user, getProfile } = React.useContext(UserContext);
	const { projects, getProjectsByUser } = React.useContext(ProjectContext);
	const recent = gigs.find(g => g.like);

	React.useEffect(() => {
		getAllGigs();
		getProfile();
		getProjectsByUser(user.id);
		// eslint-disable-next-line
	}, []);

	return (
		<div className='profile-wrapper'>
			<div className='content-wrapper'>
				<div className='profile-bg'></div>
				<div className='profile-avatar'>
					<Image
						src={
							users.avatarUrl ||
							'https://viper.works/minecraft/uploads/monthly_2016_09/Walrus.png.0e909d06f6171ffc1ac34dd736e1e82f.thumb.png.80c63490b20fdae166db28c9272e743f.png'
						}
						alt='...'
						style={{ objectFit: 'cover' }}
					></Image>
				</div>
				<div className='profile-desc'>
					<div>
						<h3>{user.name}</h3>
						<p>{users.desc}</p>
					</div>
					<div>
						{/* {users.interests.map(i => (
							<span key={i} className="user-interest">
								{i}
							</span>
						))} */}
						{['design'].map(i => (
							<span key={i} className='user-interest'>
								{i}
							</span>
						))}
					</div>
				</div>
				<div
					style={{
						marginBottom: '2rem',
						transform: 'translateY(-36px)',
					}}
				>
					<Link to='/insurance' className='award-link'>
						View Rewards
					</Link>
				</div>
				<div
					style={{
						width: '85%',
						transform: 'translateY(-36px)',
						background: 'lightgrey',
						height: '3px',
						marginBottom: '4rem',
					}}
				>
					<div
						role='progressbar'
						className='progress-bar bg-danger'
						style={{ height: '3px', width: '80%' }}
					></div>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<span>Points: 5,600</span>
						<span role='img' aria-label='img'>
							👑
						</span>
					</div>
				</div>
				{recent && (
					<>
						<h4>Recently Liked Project</h4>
						<Card className='liked-project'>
							<Image
								src={recent.imageUrl}
								noLazyLoad='true'
								className='cardImgTop'
								height='200'
								alt='...'
								style={{ objectFit: 'cover' }}
							></Image>
							<Card.Body>
								<Card.Title>{recent.title}</Card.Title>
								<Card.Text>{recent.description}</Card.Text>
							</Card.Body>
						</Card>
					</>
				)}
				<h4>Experiences</h4>
				<div
					style={{
						marginBottom: '2rem',
						textAlign: 'center',
					}}
				>
					<Accordion defaultActiveKey={0} className='list-wrapper'>
						{projects ? (
							projects.map((p, i) => (
								<Accordion.Toggle as={Card.Header} eventKey={i} key={i} className='list-content'>
									<div className='preview'>
										<span className='title'>{p.gig.title}</span>
									</div>
									<Accordion.Collapse eventKey={i}>
										<Card.Body className='project-content'>
											<div>{p.gig.description}</div>
											<a href={p.gig.link} target='_blank' rel='noopener noreferrer'>
												<FontAwesomeIcon icon={faArrowRight} />
											</a>
										</Card.Body>
									</Accordion.Collapse>
								</Accordion.Toggle>
							))
						) : (
							<div style={{ color: '#7F8287' }}>No Previous Project</div>
						)}
					</Accordion>
				</div>
				<p
					style={{
						color: 'lightgrey',
					}}
				>
					Supported by Wildcard
				</p>
			</div>
		</div>
	);
};
