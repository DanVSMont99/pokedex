import React from 'react'
import { useHistory } from 'react-router-dom'

import { logout } from '../../auth'
import CloseIcon from '../../components/Icon'

export default () => {
  const history = useHistory()

  const handleLogout = () => {
    logout()
    history.push('/login')
  }

  return (
    <nav>
      <span onClick={handleLogout}>
        <CloseIcon color='white' />
      </span>
    </nav>
  )
}
  