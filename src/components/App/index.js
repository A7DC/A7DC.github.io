import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// components
import Home from '../Home';
import { About } from '../About';
import LoadingAnimation from '../LoadingAnimation';

// styles
import './styles.css'

export const App = ({location}) => (
    <Router>
      <Route
        render={({ location}) => (
          <div>
            <Route 
              exact 
              path="/" 
              />
            {/* <Header /> */}
          <div>
            <Switch location={location}>
              <Route exact path='/' render={props => <Home />} />
              <Route exact path='/loading' render={props => <LoadingAnimation />} />
              <Route exact path="/about" render={props => About()} />
              <Route render={() => <div>Not Found</div>} />
            </Switch>
            </div>
          </div>
        )}
      />
    </Router>
  )