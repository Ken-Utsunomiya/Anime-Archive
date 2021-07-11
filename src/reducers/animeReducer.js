
const animeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_ANIMES':
      return { ...state, [action.payload.id]: action.payload}
    default:
      return state
  }
}

export default animeReducer
