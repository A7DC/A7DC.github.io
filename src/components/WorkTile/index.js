import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import { Keyframes, config, animated } from 'react-spring'
import ImageHover from '../ImageHover'
import { heading, structure } from '../../tachyons-classes'
import urls from '../../urls'

const classes = {
  container: 'relative white vh-80 cover mb6',
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

const Bg = createKeyFrames(0, 120, 0)
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
    console.log(top, 'top')
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
    const content = this.state.animation ? this.state.animation : undefined
    const {title, subtitle, bg} = this.props
    return (
      <div ref={r => this.container = r} className='min-vh-100'>
        <Bg native state={state}>
          {style => (
            <animated.div 
              style={style}
              >
              <Link to={urls.bordellio}>
                <div className={classes.container}>
                  <ImageHover bg={bg} />
                  <div className={structure.pullLeft}>
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
              </Link>
            </animated.div>
          )}
        </Bg>
      </div>
    )
  }
}


export default WorkTile;

