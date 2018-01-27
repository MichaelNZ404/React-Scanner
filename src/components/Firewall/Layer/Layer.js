import React, { Component } from 'react'
import './Layer.css'

import Node from './Node/Node'

export default class Layer extends Component {
  renderNode (nodeidx, activeNode, hasPacket) {
    const isActive = nodeidx === activeNode
    const showPacket = this.props.hasPacket && nodeidx === 0
    return (
      <Node
        key={nodeidx}
        active={isActive}
        showPacket={showPacket}
        onCollision={this.props.handleCollision}/>
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
