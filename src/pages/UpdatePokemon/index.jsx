import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import PokemonForm from '../../components/PokemonForm'
import Modal from '../../components/Modal'
import { ArrowLeft } from '../../components/Icon'
import { replaceNullToEmpty } from '../../utils'
import './styles.scss'

export default () => {
  const history = useHistory()
  const path = history.location.pathname
  const pokemonId = path.split('update/')[1]

  const [form, setForm] = useState(null)

  async function loadPokemon() {
    const response = await api.get(`pokemons/${pokemonId}`)
    const pokemonData = replaceNullToEmpty(response.data)
    
    setForm(
      <Modal title='Update pokémon'>
        <PokemonForm 
          request='put' 
          endpoint={`pokemons/${pokemonId}`} 
          fieldInitialValues={pokemonData} 
        />
      </Modal>
    )
  }

  useEffect(() => {
    loadPokemon()
  }, [])
  
  return (
    <div className='update-pokemon-page'>
      <Link to='/'>
        <ArrowLeft color='white' />
      </Link>
      {form}
    </div>
  )
}