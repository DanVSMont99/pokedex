import React from 'react'
import PokemonForm from '../../components/PokemonForm'

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
  
  return <PokemonForm fieldInitialValues={fieldInitialValues} endpoint='pokemon' />
}