const updateAllPokemons = (pokemons = []) => ({
  type: 'UPDATE_ALL_POKEMONS',
  payload: pokemons
})

export { updateAllPokemons }