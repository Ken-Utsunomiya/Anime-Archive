
import { FETCH_WORKS } from '../constants'

const workReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_WORKS:
      return { ...state, [action.payload.id]: action.payload}
    default:
      return state
  }
}

export default workReducer
