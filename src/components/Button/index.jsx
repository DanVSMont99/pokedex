import React from 'react'
import './styles.scss'

export default props => {
  const backgroundColor = {
    backgroundColor: props.backgroundColor || ''
  }

  const color = {
    color: props.color || ''
  }

  return (
    <button className='button' style={backgroundColor}>
      <p style={color}>
        {props.label || 'Button'}
      </p>
    </button>
  )
}