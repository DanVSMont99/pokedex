import { createStore, combineReducers } from 'redux'
import PokemonsReducers from './reducers/pokemons'

const reducers = combineReducers({
  pokemons: PokemonsReducers
})

const store = createStore(reducers)

export default store