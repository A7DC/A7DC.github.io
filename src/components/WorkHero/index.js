import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Keyframes, config, animated } from 'react-spring'
import ContentContainer from '../ContentContainer'
import { heading, stucture } from '../../tachyons-classes'

const classes = {
  container: 'relative white vh-100 cover mb6',
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

const Bg = createKeyFrames(1200, 100, 0)
const Content = createKeyFrames(0, 40, 0)

class Work extends Component {

  state = {
    open: 'start',
    content: false
  }

  componentDidUpdate(prevProps, nextState) {
    let windowScrollPosition = this.props.windowScrollPosition
    let height = this.container.offsetHeight;

    if (prevProps.windowScrollPosition !== windowScrollPosition) {      
      if (windowScrollPosition > (height - 200)) {
        this.setState({
          content: true
        })        
      }
    }
  }

  render() {
    const state = this.state.open
    const content = this.state.content ? 'start' : null
    const {title, subtitle} = this.props
    return (
      <Bg native state={state}>
        {style => (
          <animated.div 
            style={style}
            ref={r => { 
              this.container = ReactDOM.findDOMNode(r)
            }}
            // ref={r => { console.log(ReactDOM.findDOMNode(r)) }}
            >
            <div
              className={`${classes.container}`}
              style={{
                backgroundImage: `url(${this.props.bg})`
              }}
            >
              <ContentContainer>
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
              </ContentContainer>
            </div>
          </animated.div>
        )}
      </Bg>
    )
  }
}


export default Work;

