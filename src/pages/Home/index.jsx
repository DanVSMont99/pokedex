import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadPokemons } from '../../store/actions/pokemons'
import api from '../../services/api'
import Header from '../../components/Header'
import Card from '../../components/Card'
import { FixedButton } from '../../components/Button'
import './styles.scss'

function Home(props) {
  async function loadPokemons() {
    const response = await api.get('pokemons')
    const pokemons = response.data
    props.loadPokemons(pokemons)
  }

  function renderPokemons(pokemons) {
    const pokemonsCards = pokemons.map((pokemon, i) => 
      <Card key={i} text={pokemon.name} code={pokemon.number} />
    )
      
    return pokemonsCards
  }

  loadPokemons()

  return (
    <div className='home'>
      <Header />
      <Link to='/add'>
        <FixedButton />
      </Link>
      <main>
        {renderPokemons(props.pokemons)}
      </main>
    </div>
  )
}
  
const mapStateToProps = state => ({ pokemons: state.pokemons })
const mapDispatchToProps = dispatch => bindActionCreators({ loadPokemons }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)