import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Keyframes, config, animated } from 'react-spring'
import ImageHover from '../ImageHover'
import { heading, stucture } from '../../tachyons-classes'

const classes = {
  container: 'relative white vh-100 cover mb5',
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

const Bg = createKeyFrames(800, 100, 0)
const Content = createKeyFrames(0, 40, 0)

class WorkHero extends Component {

  state = {
    open: 'start',
    content: false
  }

  componentDidUpdate(prevProps) {
    let windowScrollPosition = this.props.windowScrollPosition
    let bottom = this.container.getBoundingClientRect().bottom;
    if (prevProps.windowScrollPosition !== windowScrollPosition) {      
      if (windowScrollPosition > (bottom - 40)) {
        this.setState({
          content: true
        }, () => console.log('this.state.content', this.state.content))        
      }
    }
  }

  render() {
    const state = this.state.open
    const content = this.state.content ? 'start' : null
    const {title, subtitle, bg} = this.props
    return (
      <Bg native state={state}>
        {style => (
          <animated.div 
            style={style}
            ref={r => { this.container = ReactDOM.findDOMNode(r)}}
            >
            <div className={classes.container}>
              <ImageHover bg={bg} />
              <div className={stucture.pullLeft}>
                <Content native state={content}>
                  {styles => (
                    <animated.div style={styles}>
                        <h6 className={heading.subtitle}>{subtitle}</h6>
                        <h2 className={heading.title}>{title}</h2>
                    </animated.div>
                  )}
                </Content>
              </div>
            </div>
          </animated.div>
        )}
      </Bg>
    )
  }
}


export default WorkHero;

