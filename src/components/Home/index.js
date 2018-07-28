import React, { Component, Fragment } from 'react'
import Hero from '../Hero'
import Work from '../Work'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Work />
      </Fragment>
    )
  }
}

export default Home;
