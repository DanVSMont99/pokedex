import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import AddPokemon from '../pages/AddPokemon'
import UpdatePokemon from '../pages/UpdatePokemon'

export default () => 
  <BrowserRouter>
    <Switch name='http://localhost:3000'>
      <Route path='/login' component={Login} exact />
      <Route path='/add' component={AddPokemon} exact />
      <Route path='/update/:id' component={UpdatePokemon} exact />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>