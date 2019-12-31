import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadPokemons } from '../../store/actions/pokemons'
import api from '../../services/api'
import Header from '../../components/Header'
import Card from '../../components/Card'
import { FixedButton } from '../../components/Button'
import Modal from '../../components/Modal'
import PokemonForm from '../../components/PokemonForm'
import './styles.scss'

function Home(props) {
  const [showAddPokemonModal, setShowAddPokemonModal] = useState(false)
  const [showUpdatePokemonModal, setShowUpdatePokemonModal] = useState(false)
  
  function renderPokemons(pokemons) {
    const pokemonsCards = pokemons.map((pokemon, i) => 
      <Card key={i} text={pokemon.name} code={pokemon.number} onClick={() => setShowUpdatePokemonModal(true)} />
    )
      
    return pokemonsCards
  }

  async function loadPokemons() {
    const response = await api.get('pokemons')
    const pokemons = response.data
    props.loadPokemons(pokemons)
  }

  loadPokemons()

  return (
    <>
      {!showAddPokemonModal ||
        <Modal title='Add pokémon' onClose={() => setShowAddPokemonModal(false)}>
          <PokemonForm request='post' />
        </Modal>
      }
      {!showUpdatePokemonModal ||
        <Modal title='Update pokémon' onClose={() => setShowUpdatePokemonModal(false)}>
          <PokemonForm request='put' />
        </Modal>
      }
      <div className='home'>
        <Header />
        <span onClick={() => setShowAddPokemonModal(true)}>
          <FixedButton  />
        </span>
        <main>
          {renderPokemons(props.pokemons)}
        </main>
      </div>
    </>
  )
}
  
const mapStateToProps = state => ({ pokemons: state.pokemons })
const mapDispatchToProps = dispatch => bindActionCreators({ loadPokemons }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)