import React from 'react';

import SearchBar from './SearchBar';
import TagMenu from './TagMenu';
import './style.css';

import Layout from '../Layout';
import MissionCard from '../../components/MissionCard';
import Projects from '../../mock/project';

export default () => {
	const [page, setPage] = React.useState(0);

	return (
		<Layout title="WildCard">
			<div className="project-page">
				<div className="project-content" />
				<SearchBar page={page} setPage={setPage} />
				<TagMenu />
				{page === 0 ? (
					<>
						{Projects.filter(p => !p.completed).map((v, i) => (
							<MissionCard
								key={i}
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
								key={i}
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
