import React, { Component, Fragment } from 'react'
import Hero from '../Hero'
import Work from '../Work'
import Skills from '../Skills'
import Experience from '../Experience'
import Background from '../Background';

class Home extends Component {

  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(e) {
    let windowScrollPosition = window.scrollY
    this.setState({ windowScrollPosition: windowScrollPosition })
  }

  getWorkRef = payload => {
    const threshold = payload.getBoundingClientRect().bottom;
    this.setState({ skillsThreshold: threshold })
  }

  getSkillsRef = payload => {
    const threshold = payload.getBoundingClientRect().bottom;
    this.setState({ experienceThreshold: threshold })
  }

  render() {
    return (
      <Fragment>
        <Background />
        <Hero />
        <Work windowScrollPosition={this.state.windowScrollPosition} getWorkRef={this.getWorkRef}  />
        <Skills threshold={this.state.skillsThreshold} windowScrollPosition={this.state.windowScrollPosition} getSkillsRef={this.getSkillsRef} />
        <Experience threshold={this.state.experienceThreshold} windowScrollPosition={this.state.windowScrollPosition} />
      </Fragment>
    )
  }
}

export default Home;
