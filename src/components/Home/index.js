import React, { Component } from 'react'
import { animated } from 'react-spring'

// components
import Hero from '../Hero'
import Work from '../Work'

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
    this.setState({ windowScrollPosition: windowScrollPosition }, () => console.log(this.state.windowScrollPosition, 'windowScrollPosition'))
  }

  getWorkRef = payload => {
    const threshold = payload.getBoundingClientRect().bottom;
    this.setState({ skillsThreshold: threshold })
  }

  render() {
    const { style } = this.props
    return (
      <animated.div className="mainRoute" style={{ ...style, background: `#1B1B1C` }}>
        <div className='vh-100 overflow-y-scroll relative' onScroll={this.handleScroll} ref={r => this.container = r}>
          <Hero />
          <Work windowScrollPosition={this.state.windowScrollPosition} getWorkRef={this.getWorkRef} />
        </div>
      </animated.div>
    )
  }
}

export default Home;