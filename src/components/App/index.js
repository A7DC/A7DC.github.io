import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { Transition } from 'react-spring'

// components
import { Navigation } from '../Navigation';
import { Home } from '../Home';
import { About } from '../About';

// styles
import './styles.css'


export const App = ({location}) =>
    console.log('window.location.pathname', window.location.pathname) || (
    <Router>
      <Route
        render={({ location}) => (
          <div className="fill">
            <Route 
              exact 
              path="/" 
              />
            <Navigation />
            <div className="content">
              <Transition
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}>
                {style => (
                  <Switch location={location}>
                    <Route exact path="/" render={props => Home({ ...props, style })} />
                    <Route exact path="/about" render={props => About({ ...props, style })} />
                    <Route render={() => <div>Not Found</div>} />
                  </Switch>
                )}
              </Transition>
            </div>
          </div>
        )}
      />
    </Router>
  )