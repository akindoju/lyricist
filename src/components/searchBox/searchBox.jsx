import React, { Component } from 'react';
import './searchBox.css';

class SearchBox extends Component {
  state = {
    searchField: '',
  };

  searchChangeHandler = (event) => {
    this.setState({ searchField: event.target.value });
  };

  showData = () => {
    const { resultChange } = this.props;
    fetch(`https://api.lyrics.ovh/suggest/${this.state.searchField}`)
      .then((res) => res.json())
      .then((result) => {
        resultChange(result);
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <form
        id="form"
        onSubmit={(event) => {
          event.preventDefault();
          this.state.searchField.trim().length === 0
            ? alert('Please Input a keyword')
            : this.showData();
        }}
      >
        <input
          type="text"
          placeholder="Enter Artist name or Song title"
          onChange={this.searchChangeHandler}
        />
        <button>Search</button>
      </form>
    );
  }
}

export default SearchBox;
