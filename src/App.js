import React, { Component } from 'react';
import './App.css';

import Title from './components/Title';
import Firewall from './components/Firewall';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title>Boobs</Title>
        <Firewall />
      </div>
    );
  }
}

export default App;
