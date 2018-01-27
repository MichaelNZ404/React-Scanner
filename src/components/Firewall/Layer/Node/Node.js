import React from 'react'

import './Node.css'

export default function Node (props) {
  return (
    <div className="node">
      {props.value}
    </div>
  )
}
