import React from 'react';
import Header from './components/header/header';
import Body from './components/body/body';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: { data: [] },
    };
  }

  resultChangeHandler = (value) => {
    this.setState({ result: value });
  };

  render() {
    const { result } = this.state;
    return (
      <div>
        <Header onResultChange={this.resultChangeHandler} />
        <Body result={result} />
      </div>
    );
  }
}

export default App;
