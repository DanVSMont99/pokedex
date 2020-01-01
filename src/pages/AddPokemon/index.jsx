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
    skillName1: '',
    skillForce1: '',
    skillDescription1: '',
    skillName2: '',
    skillForce2: '',
    skillDescription2: '',
    skillName3: '',
    skillForce3: '',
    skillDescription3: ''
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