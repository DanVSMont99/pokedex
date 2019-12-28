import React from 'react'
import { Add } from '../Icon'
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
    <button type={props.type || 'submit'} className='button' style={buttonStyle}>
      <p style={labelColor}>
        {props.label || 'Button'}
      </p>
    </button>
  )
}

export const FixedButton = props => {
  const buttonStyle = {
    top: props.top,
    left: props.left,
    right: props.right,
    bottom: props.bottom,
    backgroundColor: props.backgroundColor,
  }

  return (
    <button type={props.type || 'submit'} className='button fixed' style={buttonStyle}>
      <Add size={props.size || '6rem'} color={props.color || 'white'} />
    </button>
  )
} 