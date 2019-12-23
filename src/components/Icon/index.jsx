import React from 'react'
import './styles.scss'

export default props => {
  const iconColor = { 
    fill: props.color,
  }

  const iconSize = {
    width: props.width,
    height: props.height
  }

  return (
    <svg className="icon" style={iconSize} width="24" height="24" viewBox="0 0 24 24">
      <path style={iconColor} d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  )
}

export const AddIcon = props => {
  const iconColor = { 
    fill: props.color
  }

  const iconSize = {
    width: props.width,
    height: props.height
  }

  return (
    <svg className="icon" style={iconSize} width="24" height="24" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path style={iconColor} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
    </svg>
  )
}