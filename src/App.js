import React, { Component } from 'react'
import './App.css'

import Firewall from './components/Firewall/Firewall'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      layers: [5, 2, 3, 6, 2],
      title: 'React Scanner'
      // TODO: add a way for users to input the layer data
    }
    document.title = this.state.title
  }

  render () {
    return (
      <div className="App">

        <div className="header">
          <div className="title">{this.state.title}</div>
        </div>

        <Firewall
          layers={this.state.layers} />
      </div>
    )
  }
}
