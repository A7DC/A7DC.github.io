import React, {Component} from 'react'
import { Keyframes, config, animated } from 'react-spring'

const AnimationContainer = WrappedComponent => {
  class HOC extends Component {
  
    constructor(props) {
  
      super(props)
      this.state = {
        animation: undefined
      }
    }
  
    componentDidUpdate(prevProps) {
      const scrollY = this.props.scrollY
      const threshold = this.props.threshold
      if (prevProps.scrollY !== scrollY) {
        if (scrollY >= threshold) {
          this.setState({ animation: 'start' })
        }
      }
    }

    render() {
      const state = this.state.animation
      return (
        <div ref={r => this.container = r} className='min-vh-100 flex items-center justify-center'>
          <Bg native state={state}>
            {style => (
              <animated.div
                style={style}
                className="w-100"
              >
                <WrappedComponent {...this.props} {...this.state} />
              </animated.div>
            )}
          </Bg>
        </div>
      )
    }
  }

  return HOC

}

const Bg = Keyframes.Spring({
  start: {
    delay: 0,
    from: { transform: `translate3d(0,120%,0)`, opacity: 0 },
    to: { transform: `translate3d(0,0%,0)`, opacity: 1 },
    config: config.slow
  }
})


export default AnimationContainer;

