import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import pokeball from '../../assets/pokeball.png'
import './styles.scss'

export default () => 
  <div className='login'> 
    <main>
      <header>
        <h1>Pokedex</h1>
        <h2>Seja bem vindo treinador</h2>
        <img src={pokeball} alt='Pokeball'/>
      </header>
      <form>
        <Input type='email' label='Email' width='100%' placeholder='Digite seu email' />
        <Input type='password' label='Senha' width='100%' placeholder='Digite sua senha' />
        <Link to='/home'>
          <Button label='Entrar agora' width='100%' />
        </Link>
      </form>
    </main>
  </div>