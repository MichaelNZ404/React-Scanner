import React, { Component } from 'react'
import './App.css'

import Firewall from './components/Firewall/Firewall'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      layers: [5, 2, 3, 6, 2],
      title: 'React Scanner',
      time: 0,
      delay: 0,
      packet_layer: null,
      timer: null
      // TODO: add a way for users to input the layer data
    }
    document.title = this.state.title
  }

  incrementTime () {
    this.setState({
      time: this.state.time + 1,
      packet_layer: this.state.packet_layer + 1
    })
    if (this.state.packet_layer >= this.state.layers.length - 1) {
      clearInterval(this.state.timer)
    }
  }

  runSimulation () {
    clearInterval(this.state.timer)
    this.setState({
      packet_layer: 0,
      time: 0,
      timer: setInterval(() => this.incrementTime(), 1000)
    })
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
          time={this.state.time}
          delay={this.state.delay}
          packet_layer={this.state.packet_layer} />
      </div>
    )
  }
}
