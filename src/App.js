import React from 'react';
import Header from './components/header/header';
import Body from './components/body/body';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchfield: '',
      result: { data: [] },
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  resultChangeHandler = (value) => {
    this.setState({ result: value });
  };

  render() {
    const { result } = this.state;
    return (
      <div>
        <Header
          onSearchChange={this.onSearchChange}
          onResultChange={this.resultChangeHandler}
        />
        <Body result={result} />
      </div>
    );
  }
}

export default App;
