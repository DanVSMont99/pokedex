import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

import { ArrowLeft } from '../Icon'
import './styles.scss'

export default props => 
  ReactDOM.createPortal(
    <div className='modal'>
      <Link to={props.backTo || '/'}>
        <ArrowLeft color='white'/>
      </Link>
      <div className='content'>
        <header className='modal-title'>
          <h1>{props.title}</h1>
        </header>
        {props.children}
      </div>
    </div>,
    document.getElementById('modal')
  )