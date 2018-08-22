import React, { Component } from 'react'
import { Keyframes, animated, config } from 'react-spring'
import { heading } from '../../tachyons-classes';

const classes = {
  container: 'w-100 vh-100 flex justify-center items-center bg-white content-box'
}

const Content = Keyframes.Trail({
  start: [{ delay: 600, from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1 } }, { to: { y: 100, opacity: 0 } }]
})

class LoadingAnimation extends Component {
  state = { 
    start: undefined,
    items: ['Designer, ', 'programmer, ', 'founder.']
  }

  render() {
    const {items} = this.state;
    const state = this.state.start === undefined ? 'start' : null
    return (
        <div className={classes.container}>
        <Content native keys={items.map((_, i) => i)} state={state} config={config.gentle}>
            {items.map((item) => ({ y, ...props }) => (
              <animated.div
                style={{
                transform: y.interpolate(y => `translate3d(0,${y}%,0)`),
                  ...props
                }}>
              <h2 className={`${heading.t2} fw6 pr2`}>{item}</h2>
              </animated.div>
            ))}
          </Content>
        </div>
    )
  }
}

export default LoadingAnimation;

