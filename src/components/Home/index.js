import React, { Component, Fragment } from 'react'
import Hero from '../Hero'
import Work from '../Work'

class Home extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }


  handleScroll(e) {
    const windowScrollPosition = window.scrollY
    console.log('windowScrollPosition', windowScrollPosition)
  }


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
