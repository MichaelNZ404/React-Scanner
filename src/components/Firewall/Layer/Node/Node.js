import React from 'react'

import './Node.css'

export default function Node (props) {
  let nodeClass = 'node'
  let nodeContents = ''
  if (props.active) {
    nodeClass += ' active'
  }
  if (props.showPacket && props.active && props.packet_moved) {
    nodeContents = 'X' // handle collision here
    nodeClass += ' caught'
  } else if (props.showPacket) { nodeContents = 'P' }
  return (
    <div className={nodeClass}>{nodeContents}</div>
  )
}
