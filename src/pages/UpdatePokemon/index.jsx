import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import { replaceNullToEmpty } from '../../utils'
import { UploadForm } from '../../components/Form'
import PokemonForm from '../../components/PokemonForm'
import Modal from '../../components/Modal'
import Button from '../../components/Button'
import './styles.scss'

export default () => {
  const history = useHistory()
  const path = history.location.pathname
  const pokemonId = path.split('update/')[1]

  const [form, setForm] = useState(null)

  async function deletePokemon() {
    await api.delete(`pokemons/${pokemonId}`)
    history.push('/')
  }

  async function loadPokemon() {
    const response = await api.get(`pokemons/${pokemonId}`)
    const pokemonData = replaceNullToEmpty(response.data)
    
    setForm(
      <Modal title='Update pokémon'>
        <UploadForm 
          method='put'
          action={`pokemons/upload/${pokemonId}`}
          name='img' 
          src={pokemonData.avatar_url}
        />
        <PokemonForm 
          method='put' 
          action={`pokemons/${pokemonId}`} 
          fieldInitialValues={pokemonData} 
        />
        <span className='delete-button'>
          <Button onClick={deletePokemon} width='100%' class='outline'>
            Delete this pokemon
          </Button>
        </span>
      </Modal>
    )
  }

  useEffect(() => {
    loadPokemon()
  }, [])
  
  return (
    <div className='update-pokemon-page'>
      {form}
    </div>
  )
}