import React, { useState } from 'react'
import CloseIcon from '../../components/Icon'
import './styles.scss'

export default props => {
  const [modalState, setModalState] = useState(null)

  const closeModal = () => setModalState('hidden-modal')

  return (
    <div className={`modal ${modalState}`}>
      <div className='content'>
        <header>
          <h1>{props.title}</h1>
          <span onClick={closeModal}>
            <CloseIcon color='#6E6E6E' height='1.5rem' />
          </span>
        </header>
        {props.content}
      </div>
    </div>
  )
}