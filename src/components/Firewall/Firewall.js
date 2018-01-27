import React, { Component } from 'react'
import './Firewall.css'

import Layer from './Layer/Layer'

export default class Firewall extends Component {
  constructor (props) {
    super(props)
    this.state = {
      layers: props.layers
    }
    // TODO: add a new Layer component for layers passed through props
  }

  renderLayer (nodeCount, idx) {
    return (
      <Layer
        key={idx}
        scanIndex={0}
        nodes={nodeCount}/>
    )
  }

  render () {
    let layerList = []
    for (let i = 0; i < this.props.layers.length; i++) {
      layerList.push(this.renderLayer(this.props.layers[i], i))
    }
    return (
      <div>
        Layers: {this.props.layers}
        {layerList}
      </div>
    )
  }
}
