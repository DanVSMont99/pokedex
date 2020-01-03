import React from 'react'
import PokemonForm from '../../components/PokemonForm'
import Modal from '../../components/Modal'

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
    <Modal title='Add pokémon'>
      <PokemonForm 
        method='post' 
        action='pokemons' 
        fieldInitialValues={fieldInitialValues} 
      />
    </Modal>
  )
}