import React, { Component } from 'react'
import { Keyframes, animated, config } from 'react-spring'
import { heading } from '../../tachyons-classes'

const classes = {
  container: 'w-100 vh-100 flex justify-center items-center bg-white content-box'
}

const createKeyFrames = () =>
  Keyframes.Spring({
    start: {
      from: { transform: `translate3d(0,${0}%,0)`, opacity: 0 },
      to: { transform: `translate3d(0,${100}%,0)`, opacity: 1 },
      config: config.slow
    }
  })

const Content = createKeyFrames()

class LoadingAnimation extends Component {
  state = { 
    start: undefined,
    items: ['Designer,', 'programmer,', 'founder.']
  }

  render() {
    return (
      <Content native state={'start'}>
        {style => (
          <div className={classes.container}>
          <animated.div style={style}>
              <h1>Hello world</h1>
          </animated.div>
            </div>
        )}
      </Content>

    )
  }


}

export default LoadingAnimation;

