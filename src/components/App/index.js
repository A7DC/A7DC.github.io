import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// components
import Home from '../Home';
import Bordellio from '../Bordellio';
import LoadingAnimation from '../LoadingAnimation';

export const App = () => (
    <Router>
      <Route
        render={({ location}) => (
          <div>
            <Route 
              exact 
              path="/" 
              />
          <div>
            <Switch location={location}>
              <Route exact path='/' render={() => <Home />} />
              <Route exact path='/bordellio' render={() => <Bordellio />} />
              <Route exact path='/loading' render={() => <LoadingAnimation />} />
              <Route render={() => <div>Not Found</div>} />
            </Switch>
            </div>
          </div>
        )}
      />
    </Router>
  )