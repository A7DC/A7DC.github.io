import React from 'react'
import ReactDOM from 'react-dom'
import { Transition, config } from 'react-spring'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import './styles.css'
import './extend-tachyons.css'

import urls from  './urls.js'

// components
import Home from './components/Home'
import About from './components/About'
import LoadingAnimation from './components/LoadingAnimation'

const App = () => (
  <Router>
    <Route
      render={({ location, ...rest }) => (
        <div className="fill circular-typeface sans-serif font-smoothing lh-copy">
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <div className="content">
            <Transition
              native
              config={config.slow}
              keys={location.pathname.split('/').filter(a => a)[0]}
              from={{ willChange: 'transform,opacity', transform: 'translateY(500px)', opacity: 0 }}
              enter={{ transform: 'translateY(0px)', opacity: 1 }}
              leave={{ transform: 'translateX(-250px)', opacity: 0 }}>
              {style => (
                <Switch location={location}>
                  <Route path="/home" render={props => <Home {...props} style={style} />} />
                  <Route exact path='/loading' render={() => <LoadingAnimation />} />
                  <Route path={urls.about} render={props => About({ ...props, style })} />
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

ReactDOM.render(<App />, document.getElementById('root'))
