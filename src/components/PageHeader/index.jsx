import React from 'react';
import './style.css';

import { Navbar } from 'react-bootstrap';

const PageHeader = ({ title }) => {
  return (
    <Navbar bg='dark' variant='dark' className='centralize'>
      <Navbar.Brand>
        {/* <img
          alt='wildcard'
          className='logo'
          src={require('./logo.svg')}
          width='55'
          height='55'
        /> */}
        <span className='title'>{title}</span>
      </Navbar.Brand>
    </Navbar>
  );
};

export default PageHeader;
