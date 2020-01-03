import React, { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import Header from '../../components/Header'
import Card from '../../components/Card'
import { FixedButton } from '../../components/Button'
import './styles.scss'

export default () => {
  const [pokemons, setPokemons] = useState(null)

  function renderPokemons(pokemons) {
    const pokemonsCards = pokemons.map((pokemon, i) =>
      <Link key={i} to={`/update/${pokemon._id}`}> 
        <Card text={pokemon.name} code={pokemon.number} src={pokemon.avatar_url} />
      </Link>
    )
      
    return pokemonsCards
  }

  async function loadPokemons() {
    const response = await api.get('pokemons')
    const pokemons = renderPokemons(response.data)
    setPokemons(pokemons)
  }

  useEffect(() => {
    loadPokemons()
  }, [])

  return (
    <div className='home'>
      <Header />
      <Link to='/add'>
        <FixedButton />
      </Link>
      <main>
        {pokemons}
      </main>
    </div>
  )
}