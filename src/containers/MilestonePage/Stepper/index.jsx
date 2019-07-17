import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Projects from '../../../mock/project';

const useStyles = makeStyles(theme => ({
	root: {
		width: '90%',
	},
	button: {
		marginTop: theme.spacing(1),
		marginRight: theme.spacing(1),
	},
	actionsContainer: {
		marginBottom: theme.spacing(2),
	},
	resetContainer: {
		padding: theme.spacing(3),
	},
}));

export default function VerticalLinearStepper({ id }) {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(Projects[id].status);
	const status = [true, true, false, false];
	const tasks = Projects[id].tasks;

	return (
		<div className={classes.root}>
			<Stepper nonLinear activeStep={activeStep} orientation="vertical">
				{tasks.map((_, index) => (
					<Step key={_}>
						<StepButton completed={status[index]} onClick={() => setActiveStep(index)}>
							Phase {index}
						</StepButton>
						<StepContent>
							<List component="nav" aria-label="Secondary mailbox folders">
								{tasks[index].map(v => (
									<ListItem button>
										<ListItemText primary={v} />
									</ListItem>
								))}
							</List>

							<div className={classes.actionsContainer}>
								<div>
									<Button variant="outlined" color="primary" className={classes.button}>
										Request for review
									</Button>
									<Button variant="contained" color="secondary" className={classes.button}>
										Start a Dispute
									</Button>
								</div>
							</div>
						</StepContent>
					</Step>
				))}
			</Stepper>
		</div>
	);
}
