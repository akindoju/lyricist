import React, { Component } from 'react';
import './searchBox.css';

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      searchfield: '',
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render({ searchChange } = this.props) {
    return (
      <form id="form">
        <input
          type="text"
          // id="search"
          placeholder="Enter Artist name or Song title"
          onChange={searchChange}
        />
        <button>Search</button>
      </form>
    );
  }
}

export default SearchBox;
