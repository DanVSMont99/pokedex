import React from 'react'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'

import api from '../../services/api'
import { Form, Field } from '../Form'
import Button from '../Button'
import './styles.scss'

export default props => {
  const history = useHistory()

  const fieldValidations = yup.object().shape({
    name: yup.string().max(20).required(),
    number: yup.number().min(1).required(),
    color: yup.string().required(),
    height: yup.number().min(1).required(),
    weight: yup.number().min(1).required(),
    attack: yup.number().min(1),
    defense: yup.number().min(1),
    speed: yup.number().min(1),
    specialAttack: yup.number().min(1),
    specialDefense: yup.number().min(1),
    hp: yup.number().min(1),
    type: yup.string(),
    description: yup.string().max(30),
    abilities: yup.array().of(
      yup.object().shape({
        name: yup.string(),
        force: yup.number()
        .min(
          15, 
          'force must be greater than or equal to 15'
        )
        .max(
          120,
          'force must be less than or equal to 120'
        ),
        description: yup.string()
      })
    )
  })

  async function handleSubmit(body) {
    try {
      props.method === 'post' 
        ? await api.post(props.action, body)
        : await api.put(props.action, body)

      history.push('/')
    } catch (error) {
      alert('Error') 
    }
  }

  return (
    <div className='pokemon-form'>
      <Form 
        initialValues={props.fieldInitialValues} 
        validationSchema={fieldValidations}
        onSubmit={handleSubmit}
      >
        <section>
          <Field label='name' name='name' width='100%'/>
          <Field label='number' name='number' width='50%'/>
        </section>
        <section>
          <Field label='color' name='color' width='100%'/>
          <Field label='height' name='height' width='100%'/>
          <Field label='weight' name='weight' width='100%'/>
        </section>
        <section>
          <Field label='hp' name='hp' width='100%'/>
          <Field label='attack' name='attack' width='100%'/>
          <Field label='special attack' name='specialAttack' width='100%'/>
        </section>
        <section>
          <Field label='defense' name='defense' width='100%'/>
          <Field label='special defense' name='specialDefense' width='100%'/>
          <Field label='speed' name='speed' width='100%'/>
        </section>
        <section>
          <Field label='type' name='type' placeholder='Grass, Poison, ...' width='100%'/>
          <Field label='description' name='description' width='200%'/>
        </section>
        <section className='abiliity-session'>
          <header>ability</header>
          <div>
            <Field name='abilities[0].name' placeholder='name' width='100%'/>
            <Field name='abilities[0].description' placeholder='description' width='150%'/>
            <Field name='abilities[0].force' placeholder='force' width='50%'/>
          </div>
        </section>
        <section className='abiliity-session'>
          <header>ability</header>
          <div>
            <Field name='abilities[1].name' placeholder='name' width='100%'/>
            <Field name='abilities[1].description' placeholder='description' width='150%'/>
            <Field name='abilities[1].force' placeholder='force' width='50%'/>
          </div>
        </section>
        <section className='abiliity-session'>
          <header>ability</header>
          <div>
            <Field name='abilities[2].name' placeholder='name' width='100%'/>
            <Field name='abilities[2].description' placeholder='description' width='150%'/>
            <Field name='abilities[2].force' placeholder='force' width='50%'/>
          </div>
        </section>
        <section>
          <Button width='100%'>Save</Button>
        </section>
      </Form>
    </div>
  )
}