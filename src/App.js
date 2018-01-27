import React, { Component } from 'react'
import './App.css'

import Firewall from './components/Firewall/Firewall'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      layers: [5, 2, 3, 6, 2],
      title: 'React Scanner',
      time: 0
      // TODO: add a way for users to input the layer data
    }
    document.title = this.state.title
  }

  incrementTime () {
    this.setState({
      time: this.state.time + 1
    })
  }

  runSimulation () {
    window.setInterval(() => this.incrementTime(), 1000)
  }

  render () {
    return (
      <div className="App">

        <div className="header">
          <div className="title">{this.state.title}</div>
          <button
            className='run-btn'
            onClick={() => this.runSimulation()}>Run Simulation</button>
        </div>

        <Firewall
          layers={this.state.layers}
          time={this.state.time}/>
      </div>
    )
  }
}
