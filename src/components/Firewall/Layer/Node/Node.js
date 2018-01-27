import React from 'react'

import './Node.css'

export default function Node (props) {
  let nodeClass = 'node'
  if (props.active) {
    nodeClass += ' active'
  }
  return (
    <div className={nodeClass}>
      {props.value}
    </div>
  )
}
