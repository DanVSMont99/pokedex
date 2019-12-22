import React from 'react'
import Image from '../../assets/pokeball.png'
import './styles.scss'

export default props => {
  const cardStyle = {
    width: props.width || '15rem',
    height: props.height || '10rem',
    backgroundColor: props.backgroundColor || ''
  }

  const textStyle = {
    color: props.color || '#000000'
  }

  return (
    <div className='card' style={cardStyle}>
      <img src={props.src || Image} alt={props.alt || ''}/>
      <small style={textStyle}>
        {props.text || ''}
      </small>
    </div>
  )
}