import React, { Component } from 'react'
import { Keyframes, config, animated } from 'react-spring'
import ImageHover from '../ImageHover'
import { heading, stucture } from '../../tachyons-classes'
import { ArrowRight } from '../Icons';

const classes = {
  container: 'relative white cover vh-50 w-50 fl',
  images: 'absolute left-0 right-0 bottom-0 top-0 z-0',
}


const createKeyFrames = (delay, from, to) =>
  Keyframes.Spring({
    start: {
      delay,
      from: { transform: `translate3d(0,${from}px,0)`, opacity: 0},
      to: { transform: `translate3d(0,${to}px,0)`, opacity: 1 },
      config: config.slow
    }
  })

const Bg = createKeyFrames(600, 1600, 0)
const Content = createKeyFrames(1200, 40, 0)

class WorkTile extends Component {


  constructor(props) {
    super(props)

    this.state = {
      animateContainer: false,
      workTileThreshold: undefined
    }
  }

  componentDidUpdate(prevProps) {    
    let windowScrollPosition = this.props.windowScrollPosition
    const threshold = this.props.workTileThreshold
    if (prevProps.windowScrollPosition !== windowScrollPosition) {
      console.log(threshold, 'threshold from worktile')
      if (windowScrollPosition > threshold) {
        this.setState({
          animateContainer: 'start'
        })
      }
    }
  }

  render() {
    const state = this.state.animateContainer
    const { title, subtitle, bg, padding } = this.props
    const content = this.state.animateContainer ? 'start' : null
    return (
      <div className={`${classes.container} ${padding}`}>
        <Bg native state={state}>
          {style => (
            <animated.div 
              style={style}
              className={'w-100 h-100'}
              >
              <ImageHover bg={bg} />
              <div className={stucture.pullLeft}>
                <Content native state={content}>
                  {styles => (
                    <animated.div style={styles}>
                      <h6 className={heading.subtitle}>{subtitle}</h6>
                      <div className='flex flex-row items-baseline'>
                        <h2 className={`${heading.title} pr2`}>{title}</h2>
                        <ArrowRight />
                      </div>
                    </animated.div>
                  )}
                </Content>
              </div>
            </animated.div>
          )}
        </Bg>
      </div>
    )
  }
}

export default WorkTile;

