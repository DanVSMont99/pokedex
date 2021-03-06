import React, { useState } from 'react'
import { Formik, Form as Frm, ErrorMessage, Field as Input } from 'formik'

import api from '../../services/api'

import { Image } from '../Icon'
import './styles.scss'

const Form = props =>
  <Formik 
    initialValues={props.initialValues} 
    validationSchema={props.validationSchema}
    onSubmit={props.onSubmit}
  >
    <Frm>{props.children}</Frm>
  </Formik>

const Field = props => {
  const inputSize = {
    width: props.width,
    height: props.height
  }

  return (
    <div className='field' style={inputSize}>
      {!props.label || 
        <label htmlFor={props.name}>
          {props.label}
        </label>
      }
      <Input 
        id={props.name}
        name={props.name}
        type={props.type || 'text'} 
        placeholder={props.placeholder} 
      />
      <ErrorMessage component='span' name={props.name}/>
    </div>
  )
}

const UploadForm = props => {
  const [image, setImage] = useState(
    props.src ? <img src={props.src} alt='upload'/> : null
  )

  const fileIsValid = file => {
    const fileType = file.type
    const fileSize = file.size

    if (fileType !== 'image/png') {
      setImage('We only support PNG pictures.')
      return false
    }

    if (fileSize >= 1000000) {
      setImage('Please upload a picture smaller than 1 MB.')
      return false
    }

    return true
  }

  const uploadFile = async event => {
    const file = event.target.files[0]

    if (fileIsValid(file)) {
      const formData = new FormData()
      formData.append('img', file, file.name)

      setImage('...')

      const response = props.method === 'post' 
        ? await api.post(props.action, formData)
        : await api.put(props.action, formData)

      setImage(<img src={response.data.url} alt='upload'/>)
    }
  }

  return (
    <div className='upload-form'>
      <label htmlFor={props.name}>
        <span>
          {image ? image : <Image color='#D8D8D8' size='6rem'/>}
        </span>
      </label>
      <input 
        type='file' 
        id={props.name}
        name={props.name}
        onChange={uploadFile}
      />
    </div>
  )
}

export { Form, Field, UploadForm }