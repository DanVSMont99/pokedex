import React from 'react'
import { useHistory } from 'react-router-dom'

import { logout } from '../../auth'
import CloseIcon from '../../components/Icon'
import './styles.scss'

export default () => {
  const history = useHistory()

  const handleLogout = () => {
    logout()
    history.push('/login')
  }

  return (
    <nav className='menu'>
      <ul>
        <li onClick={handleLogout}>
          <CloseIcon color='white'/>
        </li>
      </ul>
    </nav>
  )
}
  