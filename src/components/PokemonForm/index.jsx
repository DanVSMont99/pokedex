import React from 'react'
import api from '../../services/api'
import * as yup from 'yup'
import { Form, Field } from '../Form'
import Button from '../Button'
import { Image } from '../Icon'
import './styles.scss'

export default props => {
  const fieldValidations = yup.object().shape({
    name: yup.string().max(20).required(),
    number: yup.number().min(1).required(),
    color: yup.string().required(),
    height: yup.number().min(1).required(),
    weight: yup.number().min(1).required(),
    attack: yup.number().min(1).required(),
    defense: yup.number().min(1).required(),
    speed: yup.number().min(1).required(),
    specialAttack: yup.number().min(1).required(),
    specialDefense: yup.number().min(1).required(),
    hp: yup.number().min(1).required(),
    type: yup.string().required(),
    description: yup.string().max(30).required(),
    skillName1: yup.string().required(),
    skillForce1: yup.number().min(15).max(120).required(),
    skillDescription1: yup.string().required(),
    skillName2: yup.string().required(),
    skillForce2: yup.number().min(15).max(120).required(),
    skillDescription2: yup.string().required(),
    skillName3: yup.string().required(),
    skillForce3: yup.number().min(15).max(120).required(),
    skillDescription3: yup.string().required()
  })

  function formatFormData(data) {
    const { 
      skillName1, skillForce1, skillDescription1, 
      skillName2, skillForce2, skillDescription2, 
      skillName3, skillForce3, skillDescription3, 
      ...body 
    } = data

    const skill1 = { 
      name: skillName1,
      force: skillForce1,
      description: skillDescription1,
    }

    const skill2 = { 
      name: skillName2,
      force: skillForce2,
      description: skillDescription2,
    }

    const skill3 = { 
      name: skillName3,
      force: skillForce3,
      description: skillDescription3,
    }

    const skills = [skill1, skill2, skill3]

    body.abilities = skills

    return body
  }

  async function handleSubmit(data) {
    try {
      const headers = {headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVkZmU0ZjZjYTJlOTU1MjU1MDViMDYwYSIsIm5hbWUiOiJHYWJyaWVsIiwibGFzdE5hbWUiOiJNYXJxdWVzIiwiZW1haWwiOiJnYWJyaWVsLm1hcnF1ZXNkZXNvdXphMjhAZ21haWwuY29tIiwiY3JlYXRlQXQiOiIyMDE5LTEyLTIxVDE2OjU5OjI0Ljg0OFoiLCJfX3YiOjB9LCJpYXQiOjE1NzY5NDc1OTh9.jnjY3ngaxhgOA4U3PRWblMKPpSBbODju0VE-oAkX7gc' }}
      const body = formatFormData(data)

      props.request === 'post' 
        ? await api.post(props.endpoint, body, headers)
        : await api.put(props.endpoint, body, headers)
        
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
            <Field name='skillName1' placeholder='name' width='100%' />
            <Field name='skillForce1' placeholder='force' width='100%' />
            <Field name='skillDescription1' placeholder='description' width='100%' />
          </section>
        </section>
        <section className='abiliity-session'>
          <h2>Skill 2</h2>
          <section>
            <Field name='skillName2' placeholder='name' width='100%' />
            <Field name='skillForce2' placeholder='force' width='100%' />
            <Field name='skillDescription2' placeholder='description' width='100%' />
          </section>
        </section>
        <section className='abiliity-session'>
          <h2>Skill 3</h2>
          <section>
            <Field name='skillName3' placeholder='name' width='100%' />
            <Field name='skillForce3' placeholder='force' width='100%' />
            <Field name='skillDescription3' placeholder='description' width='100%' />
          </section>
        </section>
        <section>
          <Button label='Save' width='100%' />
        </section>
      </Form>
    </div>
  )
}