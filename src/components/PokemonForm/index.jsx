import React from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import * as yup from 'yup'
import { Form, Field } from '../Form'
import Button from '../Button'
import { Image } from '../Icon'
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
      const headers = {headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVkZmU0ZjZjYTJlOTU1MjU1MDViMDYwYSIsIm5hbWUiOiJHYWJyaWVsIiwibGFzdE5hbWUiOiJNYXJxdWVzIiwiZW1haWwiOiJnYWJyaWVsLm1hcnF1ZXNkZXNvdXphMjhAZ21haWwuY29tIiwiY3JlYXRlQXQiOiIyMDE5LTEyLTIxVDE2OjU5OjI0Ljg0OFoiLCJfX3YiOjB9LCJpYXQiOjE1NzY5NDc1OTh9.jnjY3ngaxhgOA4U3PRWblMKPpSBbODju0VE-oAkX7gc' }}

      props.request === 'post' 
        ? await api.post(props.endpoint, body, headers)
        : await api.put(props.endpoint, body, headers)

      history.push('/')
        
    } catch (error) {
      alert('Error') 
    }
  }

  return (
    <div className='add-pokemon'>
      <Form 
        initialValues={props.fieldInitialValues} 
        validationSchema={fieldValidations}
        onSubmit={handleSubmit}
      >
        <label htmlFor='file-field' className='file-field-label' >
          <Image size='5rem' color='#E6E6E6' />
          <Field name='file-field' type='file' />
        </label>
        <section>
          <Field label='name' name='name' width='100%' />
          <Field label='number' name='number' width='50%' />
        </section>
        <section>
          <Field label='color' name='color' width='100%' />
          <Field label='height' name='height' width='100%' />
          <Field label='weight' name='weight' width='100%' />
        </section>
        <section>
          <Field label='attack' name='attack' width='100%' />
          <Field label='defense' name='defense' width='100%' />
          <Field label='speed' name='speed' width='100%' />
          <Field label='special attack' name='specialAttack' width='100%' />
          <Field label='special defense' name='specialDefense' width='100%' />
          <Field label='hp' name='hp' width='100%' />
        </section>
        <section>
          <Field label='description' name='description' width='200%' />
          <Field label='type' name='type' width='100%' />
        </section>
        <section className='abiliity-session'>
          <h2>Skill 1</h2>
          <section>
            <Field name='abilities[0].name' placeholder='name' width='100%' />
            <Field name='abilities[0].force' placeholder='force' width='100%' />
            <Field name='abilities[0].description' placeholder='description' width='100%' />
          </section>
        </section>
        <section className='abiliity-session'>
          <h2>Skill 2</h2>
          <section>
            <Field name='abilities[1].name' placeholder='name' width='100%' />
            <Field name='abilities[1].force' placeholder='force' width='100%' />
            <Field name='abilities[1].description' placeholder='description' width='100%' />
          </section>
        </section>
        <section className='abiliity-session'>
          <h2>Skill 3</h2>
          <section>
            <Field name='abilities[2].name' placeholder='name' width='100%' />
            <Field name='abilities[2].force' placeholder='force' width='100%' />
            <Field name='abilities[2].description' placeholder='description' width='100%' />
          </section>
        </section>
        <section>
          <Button label='Save' width='100%' />
        </section>
      </Form>
    </div>
  )
}