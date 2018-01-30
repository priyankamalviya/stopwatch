import React, { Component } from 'react';
import StopWatch from './components/stopwatch';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Stopwatch</h1>
        </header>
        <p className="App-intro">
          <StopWatch />
        </p>
      </div>
    );
  }
}

export default App;
