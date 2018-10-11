import React, { Component } from 'react'

// components
import Container from '../Container'
import Hero from '../Hero'
import WorkHero from '../WorkHero'
import WorkTile from '../WorkTile'
import Skills from '../Skills'
import About from '../About'
import Experience from '../Experience'

import data from '../../db'
class Home extends Component {

  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      viewportHeight: document.body.clientHeight
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

  render() {
    const { style } = this.props
    const { scrollY, viewportHeight } = this.state
    return (
      <Container style={style} background={`#121212`} color={'#fff'}>
        <div className='vh-100 overflow-y-scroll relative' onScroll={this.handleScroll} ref={r => this.container = r}>
          <Hero home />
          <WorkHero
            scrollY={scrollY}
            bg={data.workMain.bg}
            title={data.workMain.title}
            subtitle={data.workMain.subtitle}
            padding={data.workMain.padding} />
          <WorkTile
            threshold={viewportHeight}
            scrollY={scrollY}
            bg={data.work[0].bg}
            title={data.work[0].title}
            subtitle={data.work[0].subtitle}
            padding={data.work[0].padding}
            link='https://dribbble.com/dcaine'
            arrow />
          <Skills
            threshold={viewportHeight * 2}
            scrollY={scrollY} />
          <WorkTile
            threshold={viewportHeight * 3}
            scrollY={scrollY}
            bg={data.work[1].bg}
            title={data.work[1].title}
            subtitle={data.work[1].subtitle}
            padding={data.work[1].padding}
            arrow
             />
          <About
            threshold={viewportHeight * 4}
            scrollY={scrollY} />
          <WorkTile
            threshold={viewportHeight * 5}
            scrollY={scrollY}
            bg={data.work[2].bg}
            title={data.work[2].title}
            subtitle={data.work[2].subtitle}
            padding={data.work[2].padding}
            link='https://blog.framer.com/redesigning-mixcloud-s-login-form-with-framer-js-d49a4f4d5b1f'
            arrow />
          <Experience 
            threshold={2200} 
            scrollY={scrollY} />
        </div>
      </Container>
    )
  }
}

export default Home;