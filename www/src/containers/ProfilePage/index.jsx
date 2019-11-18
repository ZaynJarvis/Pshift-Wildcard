import React from 'react';
import Image from 'react-graceful-image';
import users from '../../mock/users';
import './index.css';
import { Card, Accordion } from 'react-bootstrap';
import UserContext from '../../context/user/userContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import GigContext from '../../context/gig/gigContext';
import { Link } from 'react-router-dom';

export default () => {
	const { gigs } = React.useContext(GigContext);
	const { user } = React.useContext(UserContext);
	const recent = gigs.find(g => g.like && g.like.includes(user.id));

	return (
		<div className="profile-wrapper">
			<div className="content-wrapper">
				<div className="profile-bg"></div>
				<div className="profile-avatar">
					<Image src={users.avatarUrl || 'https://viper.works/minecraft/uploads/monthly_2016_09/Walrus.png.0e909d06f6171ffc1ac34dd736e1e82f.thumb.png.80c63490b20fdae166db28c9272e743f.png'} alt="..." style={{ objectFit: 'cover' }}></Image>
				</div>
				<div className="profile-desc">
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
							<span key={i} className="user-interest">
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
					<Link to="/insurance" className="award-link">
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
						role="progressbar"
						className="progress-bar bg-danger"
						style={{ height: '3px', width: '80%' }}
					></div>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<span>Points: 5,600</span>
						<span role="img" aria-label="img">
							👑
						</span>
					</div>
				</div>
				{recent && (
					<>
						<h4>Recently Liked Project</h4>
						<Card className="liked-project">
							<Image
								src={recent.imageUrl}
								noLazyLoad="true"
								className="cardImgTop"
								height="200"
								alt="..."
								style={{ objectFit: 'cover' }}
							></Image>
							<Card.Body>
								<Card.Title>{recent.title}</Card.Title>
								<Card.Text>{recent.description}</Card.Text>
							</Card.Body>
						</Card>
					</>
				)}
				{/* <h4>Experiences</h4>
				<div
					style={{
						marginBottom: '2rem',
					}}
				>
					<Accordion defaultActiveKey={0} className="list-wrapper">
						{users.projects.map((p, i) => (
							<Accordion.Toggle as={Card.Header} eventKey={i} key={i} className="list-content">
								<div className="preview">
									<span className="title">{p.title}</span>
									<span className="time">{p.time.getMonth() + '/' + p.time.getFullYear()}</span>
								</div>
								<Accordion.Collapse eventKey={i}>
									<Card.Body className="project-content">
										<div>{p.desc}</div>
										<a href={p.link} target="_blank" rel="noopener noreferrer">
											<FontAwesomeIcon icon={faArrowRight} />
										</a>
									</Card.Body>
								</Accordion.Collapse>
							</Accordion.Toggle>
						))}
					</Accordion>
				</div> */}
				{/* {users[id].comments && users[id].comments[0] && (
					<>
						<h4>Comments from Employers</h4>
						<div className="user-comments">
							<Card className="comment">
								<Card.Body className="comment-body">
									<Card.Text>{users[id].comments[0].message}</Card.Text>
									<div className="comment-author">
										<FontAwesomeIcon icon={faQuoteLeft} />
										<span>{users[id].comments[0].author}</span>
									</div>
								</Card.Body>
							</Card>
						</div>
					</>
				)} */}
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
