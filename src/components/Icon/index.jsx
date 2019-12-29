import React from 'react'
import './styles.scss'

export default props => {
  const iconColor = { 
    fill: props.color,
  }

  const iconSize = {
    width: props.size,
    height: props.size
  }

  return (
    <svg className='icon' style={iconSize} width='24' height='24' viewBox='0 0 24 24'>
      <path style={iconColor} d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
      <path d='M0 0h24v24H0z' fill='none' />
    </svg>
  )
}

export const Add = props => {
  const iconColor = { 
    fill: props.color
  }

  const iconSize = {
    width: props.size,
    height: props.size
  }

  return (
    <svg className='icon' style={iconSize} width='24' height='24' viewBox='0 0 24 24'>
      <path style={iconColor} d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/>
      <path d='M0 0h24v24H0z' fill='none'/>
    </svg>
  )
}

export const Image = props => {
  const iconColor = { 
    fill: props.color
  }

  const iconSize = {
    width: props.size,
    height: props.size
  }

  return (
    <svg className='icon' style={iconSize} width='24' height='24' viewBox='0 0 24 24'>
      <path d='M0 0h24v24H0z' fill='none'/>
      <path style={iconColor} d='M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z' />
    </svg>
  )
}