const INITIAL_STATE = []

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UPDATE_ALL_POKEMONS':
      state = action.payload
      return state
    default:
      return state
  }
}