import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadPokemons } from '../../store/actions/pokemons'
import api from '../../services/api'
import Header from '../../components/Header'
import Card from '../../components/Card'
import { FixedButton } from '../../components/Button'
import Modal from '../../components/Modal'
import AddPokemon from '../AddPokemon'
import './styles.scss'

function Home(props) {
  const [showModal, setShowModal] = useState(false)

  function renderPokemons(pokemons) {
    const pokemonsCards = pokemons.map((pokemon, i) => 
      <Card key={i} text={pokemon.name} code={pokemon.number} />
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
      {!showModal ||
        <Modal title='Add pokémon' onClose={() => setShowModal(false)}>
          <AddPokemon />
        </Modal>
      }
      <div className='home'>
        <Header />
        <span onClick={() => setShowModal(true)}>
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