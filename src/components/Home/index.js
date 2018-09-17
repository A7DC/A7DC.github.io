import React, { Component } from 'react'
import { animated } from 'react-spring'

// components
import Hero from '../Hero'
import Work from '../Work'
import Skills from '../Skills'
import Experience from '../Experience'
import Container from '../Container'
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
    this.setState({ windowScrollPosition: windowScrollPosition }, console.log(this.state.windowScrollPosition, 'windowScrollPosition'))
  }

  getWorkHeroRef = payload => {
    // this is the <Work> containers height
    const threshold = payload.getBoundingClientRect().top
    this.setState({ workTileThreshold: threshold })
  }

  getWorkRef = payload => {
    // this is the <Work> containers height
    const threshold = payload.getBoundingClientRect().bottom + (this.state.windowScrollPosition - window.innerHeight);
    this.setState({ skillThreshold: threshold })
  }


  getSkillsRef = payload => {
    const threshold = payload.getBoundingClientRect().bottom + (this.state.windowScrollPosition - window.innerHeight);
    this.setState({ experienceThreshold: threshold })
  }

  render() {
    const { style } = this.props
    return (
      <Container style={style} background={`#1B1B1C`} color={'#fff'}>
        <div className='vh-100 overflow-y-scroll relative' onScroll={this.handleScroll} ref={r => this.container = r}>
          <Hero home />
          <Work 
            windowScrollPosition={this.state.windowScrollPosition} 
            getWorkHeroRef={this.getWorkHeroRef} 
            getWorkRef={this.getWorkRef} 
            workTileThreshold={this.state.workTileThreshold}  />
          <Skills 
            threshold={this.state.skillThreshold} 
            windowScrollPosition={this.state.windowScrollPosition} 
            getSkillsRef={this.getSkillsRef} />
          <Experience threshold={this.state.experienceThreshold} windowScrollPosition={this.state.windowScrollPosition} />
        </div>
      </Container>
    )
  }
}

export default Home;