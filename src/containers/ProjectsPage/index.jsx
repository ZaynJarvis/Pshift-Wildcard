import React from 'react';

import Navigation from './Navigation';
import './style.css';

import Layout from '../Layout';
import MissionCard from '../../components/MissionCard';
import Projects from '../../mock/project';

export default () => {
	const [page, setPage] = React.useState(0);

	return (
		<Layout title="Projects">
			<div className="project-page">
				<div className="project-content" />
				<Navigation page={page} setPage={setPage} />
				{page === 0 ? (
					<>
						{Projects.filter(p => !p.completed).map((v, i) => (
							<MissionCard
								key={v.id}
								id={v.id}
								title={v.title}
								description={v.description}
								imageUrl={v.imageUrl}
								tasks={v.tasks}
								showProgress={true}
							/>
						))}
					</>
				) : (
					<>
						{Projects.filter(p => p.completed).map((v, i) => (
							<MissionCard
								key={v.id}
								id={v.id}
								title={v.title}
								description={v.description}
								imageUrl={v.imageUrl}
								tasks={v.tasks}
								showProgress={true}
							/>
						))}
					</>
				)}
			</div>
		</Layout>
	);
};
