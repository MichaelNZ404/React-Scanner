import React, { Component } from 'react'
import './Layer.css'

import Node from './Node/Node'

export default class Layer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nodes: props.nodes
    }
    // TODO: add a new Layer component for layers passed through props
  }

  renderNode (i) {
    return (
      <Node key={i}/>
    )
  }

  render () {
    let nodeList = []
    for (let i = 0; i < this.props.nodes; i++) {
      nodeList.push(this.renderNode(i))
    }
    return (
      <div className='layer'>
        {nodeList}
      </div>
    )
  }
}
