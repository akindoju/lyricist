import React, { Component } from 'react';
import './body.css';

class Body extends Component {
  constructor() {
    super();
    this.state = {
      results: '',
    };
  }

  componentDidMount() {
    fetch(`https://api.lyrics.ovh/suggest/Abaga`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({ results: result });
      });
  }

  render() {
    const { results } = this.state;
    return <div>Waaaa</div>;
  }
}

export default Body;
