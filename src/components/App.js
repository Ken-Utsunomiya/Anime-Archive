import React from 'react'
import { Router, Route, Redirect } from 'react-router-dom'

import Header from './Header'
import Work from './Work'
import WorkList from './WorkList'
import history from '../history'

const App = () => {
  return (
    <div>
      <Header />
      <div style={{ paddingBottom: "2rem" }}>
        <Router history={history}>
          <Redirect from="/" to="/works" />
          <Route path='/works' exact component={WorkList} />
          <Route path='/works/:id' exact component={Work} />
        </Router>
      </div>
    </div>
  )
}

export default App
