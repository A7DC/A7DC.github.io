import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// components
import Home from '../Home';
import Bordellio from '../Bordellio';
import LoadingAnimation from '../LoadingAnimation';


class App extends Component {


  heroLinkClicked = data => {
    this.setState({
      heroClicked: data
    }, () => console.log(this.state.heroClicked, 'this.state.heroClicked'))
  }

  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <div>
              <Route
                exact
                path="/"
              />
              <div>
                <Switch location={location}>
                  <Route exact path='/' render={() => <Home heroLinkClicked={this.heroLinkClicked} />} />
                  <Route exact path='/bordellio' render={() => <Bordellio />} />
                  <Route exact path='/loading' render={() => <LoadingAnimation heroClicked={this.state.heroClicked} />} />
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </div>
            </div>
          )}
        />
      </Router>
    )
  }
} 

export default App;