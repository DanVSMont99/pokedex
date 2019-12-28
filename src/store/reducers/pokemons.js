const INITIAL_STATE = []

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_POKEMON':
      const newPokemon = action.payload
      state.push(newPokemon)
      return state
    case 'LOAD_POKEMONS':
      state = action.payload
      return state
    default:
      return state
  }
}