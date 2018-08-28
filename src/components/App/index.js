import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { Transition, config } from 'react-spring'

// components
import Home from '../Home';
import About from '../About';

// styles
import './styles.css'

export const App = ({location}) => (
    <Router>
      <Route
        render={({ location}) => (
          <div className="fill">
            <Route 
              exact 
              path="/" 
              />
          <div>
              <Transition
                keys={location.pathname.split('/').filter(a => a)[0]}
                config={config.slow}
                from={{ transform: 'translateY(-100%)', opacity: 0 }}
                enter={{ transform: 'translateY(0px)', opacity: 1 }}
                leave={{ transform: 'translateY(-100%)', opacity: 0 }}>
                {style => (
                  <Switch location={location}>
                    <Route exact path='/' render={props => <Home style={style} />} />
                    <Route exact path="/about" render={props => About({ ...style })} />
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