export const loadPokemons = (pokemons = '') => ({
  type: 'LOAD_POKEMONS',
  payload: pokemons
})