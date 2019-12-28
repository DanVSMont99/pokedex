import React from 'react'
import { Link } from 'react-router-dom'
import CloseIcon from '../../components/Icon'

export default () => 
  <nav>
    <Link to='/login'>
      <CloseIcon color='#FFFFFF' />
    </Link>
  </nav>