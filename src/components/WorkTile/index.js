import React, { Component } from 'react'
import { Keyframes, config, animated } from 'react-spring'
import ImageHover from '../ImageHover'
import { heading, stucture } from '../../tachyons-classes'
import { ArrowRight } from '../Icons';

const classes = {
  container: 'relative white cover vh-50 w-50 mb6 fl pr4',
  images: 'absolute left-0 right-0 bottom-0 top-0 z-0',
}


const createKeyFrames = (delay, from, to) =>
  Keyframes.Spring({
    start: {
      delay,
      from: { transform: `translate3d(0,${from}px,0)`, opacity: 0, width: 100 + "%", height: 100 + "%" },
      to: { transform: `translate3d(0,${to}px,0)`, opacity: 1 },
      config: config.slow
    }
  })

const Bg = createKeyFrames(600, 1600, 0)

class WorkTile extends Component {

  state = {
    animateContainer: false
  }

  componentDidUpdate(prevProps) {    
    let windowScrollPosition = this.props.windowScrollPosition
    console.log(windowScrollPosition)
    
    if (prevProps.windowScrollPosition !== windowScrollPosition) {
      if (windowScrollPosition > 728) {
        this.setState({
          animateContainer: 'start'
        })
      }
    }
  }

  render() {
    const state = this.state.animateContainer
    const { title, subtitle, bg, position } = this.props
    return (
      <div className={classes.container}>
        <Bg native state={state}>
          {style => (
            <animated.div style={style}>
              <ImageHover bg={bg} />
              <div className={stucture.pullLeft}>
                <h6 className={heading.subtitle}>{subtitle}</h6>
                <div className='flex flex-row items-baseline'>
                  <h2 className={`${heading.title} pr2`}>{title}</h2>
                  <ArrowRight />
                </div>
              </div>
            </animated.div>
          )}
        </Bg>
      </div>
    )
  }
}

export default WorkTile;

