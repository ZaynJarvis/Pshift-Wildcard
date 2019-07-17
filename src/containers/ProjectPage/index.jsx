import React from 'react';

import Navigation from './Navigation';
import './style.css';

import Layout from '../Layout';
import MissionCard from '../../components/MissionCard';
import Projects from '../../mock/project';

export default () => {
	const [page, setPage] = React.useState(0);

	return (
		<Layout>
			<div className="project-page">
				<div className="project-content" />
				{/* <h1>PROJECTS</h1> */}
				<Navigation page={page} setPage={setPage} />
				{page === 0 ? (
					<>
						{Projects.filter(p => !p.completed).map((v, i) => (
							<MissionCard
								id={i}
								title={v.title}
								description={v.description}
								imageUrl={v.imageUrl}
								tasks={v.tasks}
							/>
						))}
					</>
				) : (
					<>
						{Projects.filter(p => p.completed).map((v, i) => (
							<MissionCard
								id={i}
								title={v.title}
								description={v.description}
								imageUrl={v.imageUrl}
								tasks={v.tasks}
							/>
						))}
					</>
				)}
			</div>
		</Layout>
	);
};
