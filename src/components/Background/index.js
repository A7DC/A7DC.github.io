import React, { Component, Fragment } from 'react'
import { Keyframes, config, animated } from 'react-spring'

const classes = {
  bg: 'w-100 vh-100 bg-white absolute'
}

const Bg = Keyframes.Spring({
  start: {
    delay: 0,
    from: { transform: `translate3d(0,-${0}%,0)` },
    to: { transform: `translate3d(0,-${-100}%,0)` },
    config: config.slow
  }
})

class Background extends Component {
  state = { open: 'start' }
  render() {
    const state = this.state.open
    return (
      <Fragment>
        <Bg native state={state}>
          {style => (
            <animated.div style={style} className={classes.bg}></animated.div>
          )}
        </Bg>
      </Fragment>
    )
  }
}

export default Background;

