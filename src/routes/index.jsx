import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'

export default () => 
  <BrowserRouter>
    <Switch name='http://localhost:3000'>
      <Route path='/login' component={Login} exact />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>