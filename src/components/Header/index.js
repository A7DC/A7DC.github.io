import React, { Component } from 'react'
import { Logo } from '../Icons/'
import { Navigation } from '../Navigation';
import { Keyframes, animated, config } from 'react-spring'


// Creates a spring with predefined animation slots
const Content = Keyframes.Spring({
  // Slots can take arrays/chains,
  start: [
    { delay: 1400, from: { y: 12, opacity: 0 }, to: { y: 0, opacity: 1 }, config: config.gentle },
  ]
})

export default class Home extends Component {
  state = { open: undefined }

  componentDidUpdate() {
    console.log(this.state.open, 'this.state.open')
  }

  render() {
    const state = this.state.open === undefined ? 'start' : null
    const { style } = this.props;
    return (
      <header className="fixed w-100 z-max pa3">
        <Content native state={state}>
          {({ opacity, y }) => (
            <animated.div 
              className="w-100 flex flex-row"
              style={{ 
                opacity: opacity.interpolate(opacity => opacity),
                transform: y.interpolate(y => `translate3d(0,${y}%,0)`)
          }}
          >
              <Logo />
              <Navigation />
            </animated.div>
          )}
        </Content>
      </header>
    )
  }
}



