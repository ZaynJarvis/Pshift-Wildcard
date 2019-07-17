import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import MissionCard from '../src/components/MissionCard';
import ProjectPage from '../src/containers/ProjectPage';
// import WildCard from '../src/containers/WildCard';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
	.add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
	.add('with some emoji', () => (
		<Button onClick={action('clicked')}>
			<span role="img" aria-label="so cool">
				😀 😎 👍 💯
			</span>
		</Button>
	));

storiesOf('MissionCard', module).add('test', () => (
	<MissionCard
		id="1"
		title="Lorem Ipsum"
		description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
		imageUrl="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100"
	/>
));

storiesOf('Project Page', module).add('basic', () => <ProjectPage />);

// storiesOf('WildCard', module).add('basic', () => <WildCard />);
