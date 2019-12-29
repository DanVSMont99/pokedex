import React from 'react'
import { Formik, Form as Frm, ErrorMessage, Field as Input } from 'formik'
import './styles.scss'

const Form = props =>
  <Formik 
    initialValues={props.initialValues} 
    validationSchema={props.validationSchema}
    onSubmit={props.onSubmit}
  >
    <Frm>
      {props.children}
    </Frm>
  </Formik>

const Field = props => {
  const inputSize = {
    width: props.width,
    height: props.height
  }

  return (
    <div className='field' style={inputSize}>
      <label htmlFor={props.name}>
        {props.label}
      </label>
      <Input 
        id={props.name}
        name={props.name}
        type={props.type || 'text'} 
        placeholder={props.placeholder} 
      />
      <ErrorMessage component='span' name={props.name} />
    </div>
  )
}

export { Form, Field }