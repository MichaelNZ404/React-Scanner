import React, { Component } from 'react'
import './App.css'

import Firewall from './components/Firewall/Firewall'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      layers: [3, 2, 0, 0, 4, 0, 4],
      title: 'React Scanner',
      time: -1,
      delay: -1,
      packet_layer: -1,
      timer: null,
      interval: 125,
      packet_moved: false
      // TODO: add a way for users to input the layer data
    }
    document.title = this.state.title
  }

  movePacket () {
    if (this.state.time >= this.state.delay) {
      this.setState({
        packet_layer: this.state.packet_layer + 1
      })
    }
    this.setState({
      packet_moved: true
    })
  }

  incrementTime () {
    this.setState({
      time: this.state.time + 1,
      packet_moved: false
    })
  }

  nextStep () {
    if (!this.state.packet_moved) {
      this.movePacket()
      if (this.state.packet_layer >= this.state.layers.length - 1) {
        this.onVictory()
      }
    } else {
      this.incrementTime()
    }
  }

  onVictory () {
    clearInterval(this.state.timer)
    this.setState({
      interval: 250
    })
    console.log('winner!')
  }

  onCollision (layerIndex) {
    console.log(`collision at ${layerIndex}`)
    clearInterval(this.state.timer)
    setTimeout(() => this.runSimulation(), this.state.interval * 2)
  }

  runSimulation () {
    clearInterval(this.state.timer)
    this.setState({
      packet_layer: -1,
      time: -1,
      delay: this.state.delay + 1,
      timer: setInterval(() => this.nextStep(), this.state.interval)
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
          packet_moved={this.state.packet_moved}
          onCollision={(layerIndex) => this.onCollision(layerIndex)}/>
      </div>
    )
  }
}
