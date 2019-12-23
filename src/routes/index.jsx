import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import AddPokemon from '../pages/AddPokemon'
import UpdatePokemon from '../pages/UpdatePokemon'

export default () => 
  <BrowserRouter>
    <Switch name='http://localhost:3000'>
      <Route path="/" component={Login} exact />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/addpokemon" component={AddPokemon} />
      <Route path="/updatepokemon" component={UpdatePokemon} />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>