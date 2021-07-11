import httpClient from '../apis/anime'

export const fetchAnimes = () => async dispatch => {
  const response = await httpClient.get('/works')

  dispatch({
    type: 'FETCH_ANIMES',
    payload: response.works
  })
}
