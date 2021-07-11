import { combineReducers } from 'redux'

import animeReducer from './animeReducer'

const rootReducer = combineReducers({
  anime: animeReducer
})

export default rootReducer
