import React, { useEffect } from 'react';
import './index.css';
import UserContext from '../../context/user/userContext';
import GigContext from '../../context/gig/gigContext';
import InsuranceContext from '../../context/insurance/insuranceContext';
import Image from 'react-graceful-image';
import users from '../../mock/users';

export default ({ history }) => {
  const [currUser, setUser] = React.useState();
  const { getAllInsurances } = React.useContext(InsuranceContext);
  const { setUserID } = React.useContext(UserContext);
  const { getAllGigs } = React.useContext(GigContext);

  useEffect(() => {
    getAllInsurances();
    // eslint-disable-next-line
  }, []);

  const click = id => {
    setUser(id);
    setUserID(id);
    getAllGigs(id);
    setTimeout(() => {
      history.push('/market');
    }, 3200);
  };

  return (
    <div className='login-wrapper'>
      {Object.values(users).map(user => (
        <div
          key={user.id}
          onClick={() => click(user.id)}
          className={
            'login-profile ' +
            user.id +
            ' ' +
            (currUser ? (currUser === user.id ? 'active' : 'inactive') : '')
          }>
          <Image
            src={user.image}
            noLazyLoad='true'
            alt='...'
            style={{ objectFit: 'cover' }}></Image>
        </div>
      ))}
    </div>
  );
};
