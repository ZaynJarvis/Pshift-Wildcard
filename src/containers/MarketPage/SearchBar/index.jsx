import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ page, setPage }) => {
  return (
    <div className='search-bar'>
      <input type='text' />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
};

export default SearchBar;
