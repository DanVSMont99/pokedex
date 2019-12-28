import React from 'react'
import ReactDOM from 'react-dom'
import CloseIcon from '../../components/Icon'
import './styles.scss'

export default props => 
  ReactDOM.createPortal(
    <div className='modal'>
      <div className='content'>
        <header>
          <h1>{props.title}</h1>
          <span onClick={props.onClose}>
            <CloseIcon color='#6E6E6E' size='1.5rem' />
          </span>
        </header>
        {props.children}
      </div>
    </div>,
    document.getElementById('modal')
  )