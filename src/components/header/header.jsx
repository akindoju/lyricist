import React from 'react';
import SearchBox from '../searchBox/searchBox';
import './header.css';

const Header = ({ onSearchChange }) => {
  return (
    <div className="header">
      <h1>Lyricist</h1>
      <SearchBox searchChange={onSearchChange} />
    </div>
  );
};

export default Header;
