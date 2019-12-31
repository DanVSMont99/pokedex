import React from 'react'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import { Form, Field } from '../../components/Form'
import Button from '../../components/Button'
import pokeball from '../../assets/pokeball.png'
import './styles.scss'

export default () => {
  const fieldInitialValues = {
    email: '',
    password: ''
  }  

  const fieldValidations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
  })

  const history = useHistory()

  const handleSubmit = () => history.push('/')

  return (
    <div className='login'> 
      <main>
        <header>
          <h1>Pokédex</h1>
          <h2>Welcome Pokémon Trainer</h2>
          <img src={pokeball} alt='Pokeball'/>
        </header>
        <Form 
          initialValues={fieldInitialValues} 
          validationSchema={fieldValidations}
          onSubmit={handleSubmit}
        >
          <Field label='e-mail' name='email' placeholder='Type your e-mail' width='100%' />
          <Field label='password' name='password' type='password' placeholder='Type your password' width='100%' />
          <Button label='Log In' width='100%' />
        </Form>
      </main>
    </div>
  )
}