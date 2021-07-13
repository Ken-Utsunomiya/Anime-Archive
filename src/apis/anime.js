import axios from 'axios'

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
  }
})

export default httpClient
