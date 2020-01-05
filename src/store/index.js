import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import PokemonReducer from './reducers/pokemonReducer'

const persistConfig = {
  key: 'root',
  storage
}

const reducers = combineReducers({
  pokemons: PokemonReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer)

const persistor = persistStore(store)

export { store, persistor }