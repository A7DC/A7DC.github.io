import React, { Component } from 'react'

// components
import Container from '../Container'
import Hero from '../Hero'
import WorkHero from '../WorkHero'
import WorkTile from '../WorkTile'
import Skills from '../Skills'
import About from '../About'

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
    const scrollY = this.container.scrollTop
    this.setState({ scrollY: scrollY })
  }

  getWorkHeroRef = payload => {
    // this is the <Work> containers height
    const threshold = payload.getBoundingClientRect().top
    this.setState({ workTileThreshold: threshold })
  }

  getWorkRef = payload => {
    // this is the <Work> containers height
    const threshold = payload.getBoundingClientRect().bottom + (this.state.scrollY - window.innerHeight);
    this.setState({ skillThreshold: threshold })
  }


  getSkillsRef = payload => {
    const threshold = payload.getBoundingClientRect().bottom + (this.state.scrollY - window.innerHeight);
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
            scrollY={this.state.scrollY}
            bg={data.workMain.bg}
            title={data.workMain.title}
            subtitle={data.workMain.subtitle}
            padding={data.workMain.padding} />
          <WorkTile
            threshold={1000}
            scrollY={this.state.scrollY}
            bg={data.work[0].bg}
            title={data.work[0].title}
            subtitle={data.work[0].subtitle}
            padding={data.work[0].padding} />
          <Skills
            threshold={1500}
            scrollY={this.state.scrollY} />
          <WorkTile
            threshold={1000}
            scrollY={this.state.scrollY}
            bg={data.work[1].bg}
            title={data.work[1].title}
            subtitle={data.work[1].subtitle}
            padding={data.work[1].padding} />
          <About
            threshold={1700}
            scrollY={this.state.scrollY} />
          <WorkTile
            threshold={1000}
            scrollY={this.state.scrollY}
            bg={data.work[2].bg}
            title={data.work[2].title}
            subtitle={data.work[2].subtitle}
            padding={data.work[2].padding} />
        </div>
      </Container>
    )
  }
}

export default Home;