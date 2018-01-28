import React, { Component } from 'react'
import './Layer.css'

import Node from './Node/Node'

export default class Layer extends Component {
  renderNode (nodeidx, activeNode, hasPacket) {
    const isActive = nodeidx === activeNode
    const showPacket = this.props.hasPacket && nodeidx === 0
    if (showPacket && isActive && this.props.packet_moved) {
      this.props.onCollision(this.props.index)
    }
    return (
      <Node
        key={nodeidx}
        active={isActive}
        showPacket={showPacket}
        packet_moved={this.props.packet_moved}/>
    )
  }

  getActiveNode (time, layerLength) {
    let activeNode = time % ((layerLength * 2) - 2)
    if (activeNode >= layerLength) { // 5 4
      activeNode = Math.abs(activeNode - layerLength * 2) - 2
    }
    return activeNode
  }

  render () {
    let activeNode = this.getActiveNode(this.props.time, this.props.nodes)
    let nodeList = []
    for (let i = 0; i < this.props.nodes; i++) {
      nodeList.push(this.renderNode(i, activeNode))
    }
    if (this.props.nodes === 0) {
      if (this.props.hasPacket) {
        nodeList.push(<div key='0' className='blankLayer'>--P--</div>)
      } else {
        nodeList.push(<div key='0' className='blankLayer'>-----</div>)
      }
    }
    return (
      <div className='layer'>
        {nodeList}
      </div>
    )
  }
}
