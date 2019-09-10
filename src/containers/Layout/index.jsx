import React from 'react';

import './style.css';
import PageHeader from '../../components/PageHeader';

export default ({ title, children }) => {
  return (
    <>
      <PageHeader title={title} />
      <div className='page-content'>{children || <div></div>}</div>
    </>
  );
};
