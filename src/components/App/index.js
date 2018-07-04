import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { Transition } from 'react-spring'

// components
import { Header } from '../Header';
import Home from '../Home';
import { About } from '../About';

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
            <Header />
          <div>
              <Transition
                keys={location.pathname.split('/').filter(a => a)[0]}
                config={{ tension: 3, friction: 12 }}
                from={{ transform: 'translateY(-100vh)', opacity: 0 }}
                enter={{ transform: 'translateY(0px)', opacity: 1 }}
                leave={{ transform: 'translateY(-100vh)', opacity: 0 }}>
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