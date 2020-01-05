import React from 'react'
import { useSelector } from 'react-redux'
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
  const pathname = history.location.pathname
  const pokemonId = pathname.split('update/')[1]

  let pokemonData = useSelector(state =>
    state.pokemons.filter(pokemon => pokemon._id === pokemonId)
  )[0]

  const deletePokemon = async () => {
    await api.delete(`pokemons/${pokemonId}`)
    history.push('/')
  }
  
  return (
    <div className='update-pokemon-page'>
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
          fieldInitialValues={replaceNullToEmpty(pokemonData)} 
        />
        <span className='delete-button'>
          <Button onClick={deletePokemon} width='100%' class='outline'>
            Delete this pokemon
          </Button>
        </span>
      </Modal>
    </div>
  )
}