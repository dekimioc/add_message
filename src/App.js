import React, { Component } from 'react';
import './App.css';
import DisplayMessage from './containers/DisplayMessage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayMessage />
      </div>
    );
  }
}

export default App;
