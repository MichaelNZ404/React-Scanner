import React, { Component } from 'react'
import './App.css'

import Firewall from './components/Firewall/Firewall'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      layers: [5, 2, 3, 7, 3],
      title: 'React Scanner',
      time: 0,
      delay: 0,
      packet_layer: null,
      timer: null,
      interval: 100
      // TODO: add a way for users to input the layer data
    }
    document.title = this.state.title
  }

  incrementTime () {
    let state = {
      time: this.state.time + 1
    }
    if (this.state.time >= this.state.delay) {
      state.packet_layer = this.state.packet_layer + 1
    }
    this.setState(state)
    if (this.state.packet_layer >= this.state.layers.length - 1) {
      this.onVictory()
    }
  }

  onVictory () {
    clearInterval(this.state.timer)
    this.setState({
      interval: 1000
    })
    console.log('winner!')
  }

  onCollision (layerIndex) {
    console.log(`collision at ${layerIndex}`)
    clearInterval(this.state.timer)
    this.setState({
      delay: this.state.delay + 1
    })
    this.runSimulation()
  }

  runSimulation () {
    clearInterval(this.state.timer)
    this.setState({
      packet_layer: -1,
      time: -1,
      timer: setInterval(() => this.incrementTime(), this.state.interval)
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
          packet_layer={this.state.packet_layer}
          onCollision={(layerIndex) => this.onCollision(layerIndex)}/>
      </div>
    )
  }
}
