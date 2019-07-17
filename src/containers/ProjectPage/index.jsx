import React from 'react';
import Navigation from './Navigation';
import MissionCard from '../../components/MissionCard';
import './style.css';

export default () => {
	const [page, setPage] = React.useState(0);

	return (
		<div className="project-page">
			<h1>PROJECTS</h1>
			<Navigation page={page} setPage={setPage} />
			{page === 0 ? (
				<>
					<MissionCard
						id="1"
						title="Lorem Ipsum"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
						imageUrl="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100"
					/>
					<MissionCard
						id="2"
						title="Lorem Ipsum"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
						imageUrl="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100"
					/>
					<MissionCard
						id="3"
						title="Lorem Ipsum"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
						imageUrl="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=100"
					/>
					<MissionCard
						id="5"
						title="Lorem Ipsum"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
						imageUrl="https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=100"
					/>
					<MissionCard
						id="6"
						title="Lorem Ipsum"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
						imageUrl="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=100"
					/>
				</>
			) : (
				<MissionCard
					id="4"
					title="Completed Lorem Ipsum"
					description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					imageUrl="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100"
				/>
			)}
		</div>
	);
};
