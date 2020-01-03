import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { isLogged } from '../auth/index.js'

const PublicRoute = props => 
  isLogged() ? <Redirect to='/'/> : <Route {...props}/>

export default PublicRoute