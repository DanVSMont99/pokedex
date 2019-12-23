import React from 'react'
import './styles.scss'

export default props => {
  const buttonStyle = {
    backgroundColor: props.backgroundColor,
    width: props.width
  }

  const labelColor = {
    color: props.color
  }

  return (
    <button className='button' style={buttonStyle}>
      <p style={labelColor}>
        {props.label || 'Button'}
      </p>
    </button>
  )
}