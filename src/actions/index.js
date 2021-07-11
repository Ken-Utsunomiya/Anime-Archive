import httpClient from '../apis/anime'

export const fetchWorks = () => async dispatch => {
  const response = await httpClient.get('/works')

  dispatch({
    type: 'FETCH_WORKS',
    payload: response.works
  })
}
