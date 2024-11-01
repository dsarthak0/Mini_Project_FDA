import React from 'react';
import './Header.css';

const Header = ({ searchQuery, onSearchChange, onSearch }) => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for dishes..."
            value={searchQuery}
            onChange={onSearchChange}
          />
          <button onClick={onSearch}>🔍</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

