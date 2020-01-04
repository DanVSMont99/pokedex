import { createStore, combineReducers } from 'redux'
import PokemonReducer from './reducers/pokemonReducer'

const reducers = combineReducers({
  pokemons: PokemonReducer
})

const store = createStore(reducers)

export default store