import React, { Component } from 'react';
import './App.css';

import Title from './components/Title';
import Firewall from './components/Firewall';
import Timer from './components/Timer';

class App extends Component {
  constructor(props) {
    super(props);
    // this.incrementCount = this.incrementCount.bind(this);
    // this.sliderInput = this.sliderInput.bind(this);
    // this.restart = this.restart.bind(this);
    // this.colorFill = this.colorFill.bind(this);
    this.state = {
      title: 'Firewall Scanner',
      firewall: {
        0: 3,
        1: 2,
        4: 4,
        6: 4,
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Title>{this.state.title}</Title>
        <Firewall />
      </div>
    );
  }
}

export default App;
