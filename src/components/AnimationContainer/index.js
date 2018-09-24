import React from 'react'
import { animated } from 'react-spring'

import createKeyFrames from 'functions'

const Bg = createKeyFrames(0, 120, 0)


class AnimationContainer extends Component {

  constructor(props) {

    super(props)
    this.state = {
      animation: undefined,
      content: undefined
    }
  }

  componentDidUpdate(prevProps) {
    let windowScrollPosition = this.props.windowScrollPosition
    const top = this.props.AnimationContainerThreshold;
    if (prevProps.windowScrollPosition !== windowScrollPosition) {
      if (windowScrollPosition >= top) {
        this.setState({ animation: 'start' })
      }
    }
  }

  onClick() {
    this.setState({
      link: 'active'
    })
  }

  render() {
    const state = this.state.animation
    return (
      <div ref={r => this.container = r} className='min-vh-100'>
        <Bg native state={state}>
          {style => (
            <animated.div
              style={style}
            >
              {this.props.children}
            </animated.div>
          )}
        </Bg>
      </div>
    )
  }
}


export default AnimationContainer;

