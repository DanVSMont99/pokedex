import React from 'react'
import { ErrorMessage, Field } from 'formik'
import './styles.scss'

export default props => {
  const inputSize = {
    width: props.width,
    height: props.height
  }

  return (
    <div className='field' style={inputSize}>
      <label htmlFor={props.name}>
        {props.label}
      </label>
      <Field 
        id={props.name}
        name={props.name}
        type={props.type || 'text'} 
        placeholder={props.placeholder} 
      />
      <ErrorMessage component='span' name={props.name} />
    </div>
  )
}