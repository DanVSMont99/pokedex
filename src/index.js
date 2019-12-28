import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Routes from './routes'
import './styles/reset.scss'
import './styles/custom.scss'

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>, 
  document.getElementById('root')
)