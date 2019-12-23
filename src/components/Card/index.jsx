import React from 'react'
import Image from '../../assets/pokeball.png'
import './styles.scss'

export default props => {
  const cardStyle = {
    width: props.width,
    height: props.height,
    backgroundColor: props.backgroundColor
  }

  const textStyle = {
    color: props.color
  }

  return (
    <div className='card' style={cardStyle} onClick={props.onClick}>
      <img src={props.src || Image} alt={props.text}/>
      <div> 
        <small style={textStyle}>
          {props.text}
        </small>
        <span>
          #{props.code}
        </span>
      </div>
    </div>
  )
}