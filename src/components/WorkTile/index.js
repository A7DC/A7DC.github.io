import React, { Component, Fragment } from 'react'
import { Keyframes, config, animated } from 'react-spring'

import { typography, structure } from '../../tachyons-classes'

// components
import AnimationContainer from '../AnimationContainer';
import ContentContainer from '../ContentContainer'
import ImageHover from '../ImageHover';

const classes = {
  container: 'relative white vh-100 cover',
  images: 'absolute left-0 right-0 bottom-0 top-0 z-0'
}

const createKeyFrames = (delay, from, to) =>
  Keyframes.Spring({
    start: {
      delay,
      from: { transform: `translate3d(0,${from}%,0)`, opacity: 0 },
      to: { transform: `translate3d(0,${to}%,0)`, opacity: 1 },
      config: config.slow
    }
  })

const Content = createKeyFrames(400, 40, 0)

class WorkTile extends Component {

  constructor(props) {

    super(props)
    this.state = {
      animation: undefined,
      content: undefined
    }
  }

  componentDidUpdate(prevProps) {
    let windowScrollPosition = this.props.windowScrollPosition
    const top = this.props.workTileThreshold;
    if (prevProps.windowScrollPosition !== windowScrollPosition) {
      if (windowScrollPosition >= top) {
        this.setState({ animation: 'start' })
      }
    }
  }

  render() {
    const state = this.props.animation
    const {title, subtitle, bg, margin} = this.props
    return (
      <ContentContainer>
        <div className={margin ? "mb6 " + classes.container : classes.container}>
          <ImageHover bg={bg} />
          <div className={structure.pullLeft}>
            <Content native state={state}>
              {styles => (
                <animated.div style={styles}>
                  <h6 className={typography.p}>{subtitle}</h6>
                  <h2 className={typography.t1}>{title}</h2>
                </animated.div>
              )}
            </Content>
          </div>
        </div>
      </ContentContainer>
    )
  }
}

const WorkTileAnimated = AnimationContainer(WorkTile)

export default WorkTileAnimated;

