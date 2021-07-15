import React from 'react'
import { Router, Route } from 'react-router-dom'

import Work from './Work'
import WorkList from './WorkList'

const App = () => {
  return (
    <div className='ui container'>
      <Router>
        <Route path='/works' exact component={WorkList} />
        <Route path='/works/:id' exact component={Work} />
      </Router>
    </div>
  )
}

export default App
