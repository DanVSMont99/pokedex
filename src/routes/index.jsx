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
      <PublicRoute exact path='/login' component={Login}/>
      <PrivateRoute exact path='/add' component={AddPokemon}/>
      <PrivateRoute exact path='/update/:id' component={UpdatePokemon}/>
      <PrivateRoute component={Home}/>
    </Switch>
  </BrowserRouter>