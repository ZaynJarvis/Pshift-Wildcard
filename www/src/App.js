import React from 'react';
import WildCard from './containers/WildCard';
import InsuranceState from './context/insurance/InsuranceState';
import GigState from './context/gig/GigState';
import ProjectState from './context/project/ProjectState';
import TransactionState from './context/transaction/TransactionState';
import UserState from './context/user/UserState';

const App = () => {
	return (
		<InsuranceState>
			<GigState>
				<ProjectState>
					<TransactionState>
						<UserState>
							<div className="App">
								<WildCard />
							</div>
						</UserState>
					</TransactionState>
				</ProjectState>
			</GigState>
		</InsuranceState>
	);
};

export default App;
