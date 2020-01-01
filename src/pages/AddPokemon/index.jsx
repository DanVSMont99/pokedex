import React from 'react'
import { Link } from 'react-router-dom'
import PokemonForm from '../../components/PokemonForm'
import Modal from '../../components/Modal'
import { ArrowLeft } from '../../components/Icon'
import './styles.scss'

export default () => {
  let fieldInitialValues = {
    name: '',
    number: '',
    color: '',
    height: '',
    weight: '',
    attack: '',
    defense: '',
    speed: '',
    specialAttack: '',
    specialDefense: '',
    hp: '',
    type: '',
    description: '',
    abilities: [{
      name: '',
      force: '',
      description: ''
    },
    {
      name: '',
      force: '',
      description: ''
    },
    {
      name: '',
      force: '',
      description: ''
    }]
  }
  
  return (
    <div className='add-pokemon-page'>
      <Link to='/'>
        <ArrowLeft color='white' />
      </Link>
      <Modal title='Add pokémon'>
        <PokemonForm 
          request='post' 
          endpoint='pokemons' 
          fieldInitialValues={fieldInitialValues} 
        />
      </Modal>
    </div>
  )
}