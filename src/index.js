import React from 'react'
import ReactDOM from 'react-dom'
import { Transition, config } from 'react-spring'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ReactGA from 'react-ga';

import './styles.css'
import './extend-tachyons.css'

import urls from  './urls.js'

// components
import Home from './components/Home'
import Bordellio from './components/Bordellio'
import BordellioDev from './components/BordellioDev'

ReactGA.initialize('UA-68646651-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => (
  <Router>
    <Route
      render={({ location, ...rest }) => (
        <div className="fill sans-serif font-smoothing lh-copy">
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <div className="content">
            <Transition
              native
              config={config.slow}
              keys={location.pathname.split('/').filter(a => a)[0]}
              from={{ willChange: 'transform,opacity', 
                       transform: 'translateY(500px)', opacity: 0 }}
              enter={{ transform: 'translateY(0px)', opacity: 1 }}
              leave={{ transform: 'translateX(-500px)', opacity: 0 }}>
              {style => (
                <Switch location={location}>
                  <Route path="/home" render={props => <Home {...props} style={style} />} />
                  <Route path={urls.bordellioDev} render={props => <BordellioDev {...props} style={style} />} />
                  <Route path={urls.bordellio} render={props => <Bordellio {...props} style={style} />} />
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
