import React from 'react';
import WildCard from './containers/WildCard';
import InsuranceState from './context/insurance/InsuranceState';

const App = () => {
  return (
    <InsuranceState>
      <div className='App'>
        <WildCard />
      </div>
    </InsuranceState>
  );
};

export default App;
