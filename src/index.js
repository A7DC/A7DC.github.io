import React, {Component} from 'react'
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
import withTracker from './components/withTracker'

const withTrackerWrapper = (Page) => {
  const Wrapper = withTracker(Page)
  return props => <Wrapper {...props} />
}


class App extends Component {

  componentWillUpdate({ location, history }) {
    const gtag = window.gtag

    if (location.pathname === this.props.location.pathname) {
      return
    }

    if (history.action === 'PUSH' && typeof (gtag) === 'function') {
      gtag('config', 'GA_TRACKING_ID', {
        'page_location': window.location.href,
        'page_path': location.pathname,
      })
    }
  }

  render() {
    return (
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
                  from={{
                    willChange: 'transform,opacity',
                    transform: 'translateY(500px)', opacity: 0
                  }}
                  enter={{ transform: 'translateY(0px)', opacity: 1 }}
                  leave={{ transform: 'translateX(-500px)', opacity: 0 }}>
                  {style => (
                    <Switch location={location}>
                      <Route path="/home" render={props => withTrackerWrapper(Home)({...props, style: style})} />
                      <Route path={urls.bordellioDev} render={props => withTrackerWrapper(BordellioDev)({ ...props, style: style })} />
                      <Route path={urls.bordellio} render={props => withTrackerWrapper(Bordellio)({ ...props, style: style })} />
                    </Switch>
                  )}
                </Transition>
              </div>
            </div>
          )}
        />
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
