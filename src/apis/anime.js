import axios from 'axios'

const httpClient = axios.create({
  baseURL: process.env.ANNICT_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': process.env.ANNICT_TOKEN
  }
})

export default httpClient
