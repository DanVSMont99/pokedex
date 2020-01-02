import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-node-pokedex.herokuapp.com/api',
})

export default api