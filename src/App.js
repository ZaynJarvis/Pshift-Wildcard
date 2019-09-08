import React from 'react';
import WildCard from './containers/WildCard';
import InsuranceState from './context/insurance/InsuranceState';
import GigState from './context/gig/GigState';
import ProjectState from './context/project/ProjectState';
import TransactionState from './context/transaction/TransactionState';

const App = () => {
  return (
    <InsuranceState>
      <GigState>
        {/* <ProjectState> */}
        {/* <TransactionState> */}
        <div className='App'>
          <WildCard />
        </div>
        {/* </TransactionState> */}
        {/* </ProjectState> */}
      </GigState>
    </InsuranceState>
  );
};

export default App;
