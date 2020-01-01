import React from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'

export default props => 
  ReactDOM.createPortal(
    <div className='modal'>
      <div className='content'>
        <header>
          <h1>{props.title}</h1>
        </header>
        {props.children}
      </div>
    </div>,
    document.getElementById('modal')
  )