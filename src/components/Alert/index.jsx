import React, { useState, useEffect } from 'react'
import CloseIcon from '../Icon'
import './styles.scss'

export default props => {
  const [showAlert, setShowAlert] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false)
    }, props.time || 5000)
  })

  return (
    !showAlert || 
    <div className='alert'>
      {props.message}
      <span onClick={() => setShowAlert(false)}>
        <CloseIcon size='1.2rem' color='white' />
      </span>
    </div>
  )
}