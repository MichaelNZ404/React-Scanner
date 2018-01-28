import React, { Component } from 'react'
import './App.css'

import Firewall from './components/Firewall/Firewall'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      layers: [3, 2, 0, 0, 4, 0, 4],
      title: 'React Scanner',
      time: 0,
      delay: 0,
      packet_layer: null,
      timer: null,
      interval: 10
      // TODO: add a way for users to input the layer data
    }
    document.title = this.state.title
  }

  incrementTime () {
    if (this.state.time >= this.state.delay) {
      this.setState({
        packet_layer: this.state.packet_layer + 1
      })
    }
    if (this.state.packet_layer >= this.state.layers.length - 1) {
      this.onVictory()
    } else {
      this.setState({
        time: this.state.time + 1
      })
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
          <div className="about">This is a visual representation of <a href="https://adventofcode.com/2017/day/13">Advent of Code Day 13</a></div>
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
