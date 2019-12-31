import React, { useState ,useEffect } from 'react'
import api from '../../services/api'
import Header from '../../components/Header'
import Card from '../../components/Card'
import { FixedButton } from '../../components/Button'
import Modal from '../../components/Modal'
import AddPokemon from '../AddPokemon'
import UpdatePokemon from '../UpdatePokemon'
import './styles.scss'

export default () => {
  const [showAddModal, setShowAddModal] = useState(null)
  const [showUpdateModal, setShowUpdateModal] = useState(null)
  const [pokemons, setPokemons] = useState(null)

  function renderPokemons(pokemons) {
    const pokemonsCards = pokemons.map((pokemon, i) => 
      <Card 
        key={i} 
        text={pokemon.name} 
        code={pokemon.number}
        onClick={() => setShowUpdateModal(true)}
      />
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
      {!showAddModal || 
        <Modal title='Add Pokémon' onClose={() => setShowAddModal(false)}>
          <AddPokemon />
        </Modal>
      }
      {!showUpdateModal || 
        <Modal title='Update Pokémon' onClose={() => setShowUpdateModal(false)}>
          <UpdatePokemon pokemonId={'5e0bb14662563606449700e6'}/>
        </Modal>
      }
      <span onClick={() => setShowAddModal(true)}>
        <FixedButton />
      </span>
      <main>
        {pokemons}
      </main>
    </div>
  )
}