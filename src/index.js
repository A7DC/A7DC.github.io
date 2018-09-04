import React from 'react'
import ReactDOM from 'react-dom'
import { Transition } from 'react-spring'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import './styles.css'
import './extend-tachyons.css'

// components

import Home from './components/Home'
import About from './components/About'

const App = () => (
  <Router>
    <Route
      render={({ location, ...rest }) => (
        <div className="fill circular-typeface sans-serif font-smoothing lh-copy">
          <Route exact path="/" render={() => <Redirect to="/red" />} />
          <ul className="nav">
            <NavLink to="/red">Red</NavLink>
            <NavLink to="/green">Green</NavLink>
          </ul>
          <div className="content">
            <Transition
              native
              config={{ tension: 1, friction: 10 }}
              keys={location.pathname.split('/').filter(a => a)[0]}
              from={{ willChange: 'transform,opacity', transform: 'translateY(500px)', opacity: 0 }}
              enter={{ transform: 'translateY(0px)', opacity: 1 }}
              leave={{ transform: 'translateX(-250px)', opacity: 0 }}>
              {style => (
                <Switch location={location}>
                  <Route path="/red" render={props => <Home {...props} style={style} />} />
                  <Route path="/green" render={props => About({ ...props, style })} />
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

const NavLink = props => (
  <li className="navItem">
    <Link {...props} style={{ cursor: 'pointer', color: 'inherit' }} />
  </li>
)

ReactDOM.render(<App />, document.getElementById('root'))
