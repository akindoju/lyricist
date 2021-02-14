import React from 'react';
import SearchBox from '../searchBox/searchBox';
import './header.css';

const Header = ({ onSearchChange, onResultChange }) => {
  return (
    <div className="header">
      <h1>Lyricist</h1>
      <SearchBox searchChange={onSearchChange} resultChange={onResultChange} />
    </div>
  );
};

export default Header;
