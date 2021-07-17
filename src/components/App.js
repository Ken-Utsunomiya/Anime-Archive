import React from 'react'
import { Router, Route } from 'react-router-dom'

import Work from './Work'
import WorkList from './WorkList'
import history from '../history'

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <Route path='/works' exact component={WorkList} />
        <Route path='/works/:id' exact component={Work} />
      </Router>
    </div>
  )
}

export default App
