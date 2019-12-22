import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

export default () => 
  <nav>
    <Link to='/addpokemon'>
      <Button label='Adicionar pokémon' />
    </Link>
  </nav>