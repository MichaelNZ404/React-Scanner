import React, { Component } from 'react'
import './Layer.css'

import Node from './Node/Node'

export default class Layer extends Component {
  renderNode (nodeidx, activeNode) {
    const isActive = nodeidx === activeNode
    return (
      <Node
        key={nodeidx}
        active={isActive}/>
    )
  }

  render () {
    let activeNode = this.props.time % this.props.nodes
    let nodeList = []
    for (let i = 0; i < this.props.nodes; i++) {
      nodeList.push(this.renderNode(i, activeNode))
    }
    return (
      <div className='layer'>
        {nodeList}
      </div>
    )
  }
}
