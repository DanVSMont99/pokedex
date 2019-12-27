import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import PokemonsReducers from './reducers'
import Routes from './routes'
import './styles/reset.scss'
import './styles/custom.scss'

const reducers = combineReducers({
  pokemons: PokemonsReducers
})

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Routes />
  </Provider>, 
  document.getElementById('root')
)