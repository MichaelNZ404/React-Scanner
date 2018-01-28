import React, { Component } from 'react'
import './Firewall.css'

import Layer from './Layer/Layer'

export default class Firewall extends Component {
  renderLayer (nodeCount, idx) {
    let hasPacket = this.props.packet_layer === idx
    return (
      <Layer
        key={idx}
        index={idx}
        time={this.props.time}
        hasPacket={hasPacket}
        nodes={nodeCount}
        onCollision={this.props.onCollision}/>
    )
  }

  render () {
    let layerList = []
    for (let i = 0; i < this.props.layers.length; i++) {
      layerList.push(this.renderLayer(this.props.layers[i], i))
    }
    return (
      <div>
        <p>Layers: {this.props.layers.join(', ')}</p>
        <p>Time: {this.props.time >= 0 ? this.props.time : 'Initializing'}</p>
        <p>Delay: {this.props.delay}</p>
        <p>Packet Position: {this.props.packet_layer >= 0 ? this.props.packet_layer : 'Waiting'}</p>
        {layerList}
      </div>
    )
  }
}
