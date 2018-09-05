import React, { Component } from 'react'
import { animated } from 'react-spring'

// components
import Hero from '../Hero'
import Work from '../Work'
import Skills from '../Skills'
// import Experience from '../Experience'

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
    let windowScrollPosition = this.container.scrollTop
    this.setState({ windowScrollPosition: windowScrollPosition })
  }

  getWorkHeroRef = payload => {
    // this is the <Work> containers height
    
    const threshold = payload.getBoundingClientRect().bottom + (this.state.windowScrollPosition - window.innerHeight);
    this.setState({ workTileThreshold: threshold })
  }

  getSkillsRef = payload => {
    const threshold = payload.getBoundingClientRect().bottom;
    this.setState({ experienceThreshold: threshold })
  }

  render() {
    const { style } = this.props
    return (
      <animated.div className="mainRoute" style={{ ...style, background: `#1B1B1C` }}>
        <div className='vh-100 overflow-y-scroll relative' onScroll={this.handleScroll} ref={r => this.container = r}>
          <Hero />
          <Work windowScrollPosition={this.state.windowScrollPosition} getWorkHeroRef={this.getWorkHeroRef} workTileThreshold={this.state.workTileThreshold} />
          {/* <Skills threshold={this.state.skillsThreshold} windowScrollPosition={this.state.windowScrollPosition} getSkillsRef={this.getSkillsRef} /> */}
          {/* <Experience threshold={this.state.experienceThreshold} windowScrollPosition={this.state.windowScrollPosition} /> */}
        </div>
      </animated.div>
    )
  }
}

export default Home;