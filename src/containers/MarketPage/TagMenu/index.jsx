import React from 'react';
import './style.css';
import tags from '../../../mock/tag';

const Tag = ({ name }) => <p className='tag-item'>{name}</p>;
const TagMenu = ({ page, setPage }) => {
  return (
    <div className='tag-wrapper'>
      {tags.map((v, i) => (
        <Tag key={v.name} name={v.name} />
      ))}
    </div>
  );
};

export default TagMenu;
