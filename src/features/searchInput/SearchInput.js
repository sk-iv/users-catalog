import React from 'react';
import './searchInput.css';

const SearchInput = ({placeholder = "Начните вводить..."}) => {
  return(
    <div className="input my-4">
      <input className="input-field" type="text" placeholder={placeholder} />
      <button className="input-btn">
        <svg className="material-glyph" viewBox="0 0 24 24">
          <path d="M17,9c0,4.4-3.6,8-8.1,8s-8.1-3.6-8.1-8s3.6-8,8.1-8S17,4.5,17,9z M23,23l-8.3-8.3"></path>
        </svg>
      </button>
    </div>
  )
};
export default SearchInput;
