import React, { Component } from 'react'
import { Keyframes, animated, config } from 'react-spring'

const classes = {
  container: 'w-100 vh-100 flex justify-center items-center bg-white content-box'
}

const Content = Keyframes.Trail({
  start: [{ delay: 600, from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1 } }, { to: { x: -100, opacity: 0 } }]
})

class LoadingAnimation extends Component {
  state = { 
    start: undefined,
    items: ['Designer,', 'programmer,', 'founder.']
  }

  render() {
    const {items} = this.state;
    const state = this.state.start === undefined ? 'start' : null
    return (
        <div className={classes.container}>
          <Content native keys={items.map((_, i) => i)} config={{ tension: 200, friction: 20 }} state={state}>
            {items.map((item, i) => ({ x, ...props }) => (
              <animated.div
                style={{
                  transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                  ...props
                }}>
                {item}
              </animated.div>
            ))}
          </Content>
        </div>
    )
  }
}

export default LoadingAnimation;

