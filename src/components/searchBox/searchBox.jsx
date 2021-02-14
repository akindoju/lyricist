import React, { Component } from 'react';
import './searchBox.css';

class SearchBox extends Component {
  showData = () => {
    const { searchfield, resultChange } = this.props;
    fetch(`https://api.lyrics.ovh/suggest/${searchfield}`)
      .then((res) => res.json())
      .then((result) => {
        resultChange(result);
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { searchChange } = this.props;
    return (
      <form
        id="form"
        onSubmit={(event) => {
          event.preventDefault();
          this.showData();
        }}
      >
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
