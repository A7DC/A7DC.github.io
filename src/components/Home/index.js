import React, { Component } from 'react'
import { animated } from 'react-spring'

// components
import Hero from '../Hero'
import WorkHero from '../WorkHero'
import Skills from '../Skills'
import Experience from '../Experience'
import Container from '../Container'

import data from '../../db'
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
    const { style, workTileThreshold } = this.props
    return (
      <Container style={style} background={`#1B1B1C`} color={'#fff'}>
        <div className='vh-100 overflow-y-scroll relative' onScroll={this.handleScroll} ref={r => this.container = r}>
          <Hero home />
          <WorkHero
            getWorkHeroRef={this.getWorkHeroRef}
            workTileThreshold={workTileThreshold}
            windowScrollPosition={this.state.windowScrollPosition}
            bg={data.workMain.bg}
            title={data.workMain.title}
            subtitle={data.workMain.subtitle}
            padding={data.workMain.padding} />
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