import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import PublicRoute from './PublicRoute' 
import PrivateRoute from './PrivateRoute'

import Home from '../pages/Home'
import Login from '../pages/Login'
import AddPokemon from '../pages/AddPokemon'
import UpdatePokemon from '../pages/UpdatePokemon'

export default () => 
  <BrowserRouter>
    <Switch name='http://localhost:3000'>
      <PublicRoute path='/login' component={Login} exact />
      <PrivateRoute path='/add' component={AddPokemon} exact />
      <PrivateRoute path='/update/:id' component={UpdatePokemon} exact />
      <PrivateRoute component={Home} />
    </Switch>
  </BrowserRouter>