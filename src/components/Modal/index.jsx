import React from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'

export default props => 
  ReactDOM.createPortal(
    <div className='modal'>
      <div className='content'>
        {props.children}
      </div>
    </div>,
    document.getElementById('modal')
  )