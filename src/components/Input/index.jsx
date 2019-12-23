import React from 'react'
import './styles.scss'

export default props => {
  const inputSize = {
    width: props.width,
    height: props.height
  }

  return (
    <div className='input' style={inputSize}>
      <label htmlFor={props.id}>
        {props.label}
      </label>
      <input 
        id={props.id}
        type={props.type || 'text'} 
        placeholder={props.placeholder} 
      />
    </div>
  )
}