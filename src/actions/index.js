import axios from 'axios';
import httpClient from '../apis/anime'

export const fetchWorks = () => async dispatch => {
  // const response = await httpClient.get('/works')
  const response = await axios.get(
    'https://api.annict.com/v1/works',
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
      }
    })

  dispatch({
    type: 'FETCH_WORKS',
    payload: response.works
  })
}
