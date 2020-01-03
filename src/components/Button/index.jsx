import React from 'react'
import { Add } from '../Icon'
import './styles.scss'

export default props => 
  <button 
    type={props.type || 'submit'} 
    style={{width: props.width}} 
    className={`button ${props.class}`}
    onClick={props.onClick}
  >
    <p>{props.children}</p>
  </button>
    
export const FixedButton = props => {
  const buttonStyle = {
    top: props.top,
    left: props.left,
    right: props.right,
    bottom: props.bottom,
    backgroundColor: props.backgroundColor,
  }

  return (
    <button 
      type={props.type || 'submit'}
      style={buttonStyle} 
      className='button fixed'
    >
      <Add size={props.size || '6rem'} color={props.color || 'white'}/>
    </button>
  )
} 