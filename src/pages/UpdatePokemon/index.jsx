import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import PokemonForm from '../../components/PokemonForm'
import Modal from '../../components/Modal'
import { ArrowLeft } from '../../components/Icon'
import './styles.scss'

export default () => {
  const history = useHistory()
  const path = history.location.pathname
  const pokemonId = path.split('update/')[1]

  const [form, setForm] = useState(null)

  async function loadPokemon() {
    const response = await api.get(`pokemons/${pokemonId}`)

    const fieldInitialValues = response.data

    fieldInitialValues.skillName1 = fieldInitialValues.abilities[0].name;
    fieldInitialValues.skillForce1 = fieldInitialValues.abilities[0].force;
    fieldInitialValues.skillDescription1 = fieldInitialValues.abilities[0].description;
    fieldInitialValues.skillName2 = fieldInitialValues.abilities[1].name;
    fieldInitialValues.skillForce2 = fieldInitialValues.abilities[1].force;
    fieldInitialValues.skillDescription2 = fieldInitialValues.abilities[1].description;
    fieldInitialValues.skillName3 = fieldInitialValues.abilities[2].name;
    fieldInitialValues.skillForce3 = fieldInitialValues.abilities[2].force;
    fieldInitialValues.skillDescription3 = fieldInitialValues.abilities[2].description;

    setForm(
      <Modal>
        <h1>Update pokémon</h1>
        <PokemonForm 
          request='put' 
          endpoint={`pokemons/${pokemonId}`} 
          fieldInitialValues={fieldInitialValues} 
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