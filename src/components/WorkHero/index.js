import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Keyframes, config, animated } from 'react-spring'
import ImageHover from '../ImageHover'
import ContentContainer from '../ContentContainer'
import { typography, structure } from '../../tachyons-classes'
import urls from '../../urls'

const classes = {
  container: 'relative white vh-80 cover',
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

const Bg = createKeyFrames(400, 120, 0)
const Content = createKeyFrames(0, 40, 0)

class WorkHero extends Component {

  constructor(props) {

    super(props)
    this.state = {
      animation: 'start',
      content: undefined
    }
  }

  componentDidUpdate(prevProps) {
    const scrollY = this.props.scrollY
    const top = (this.container.getBoundingClientRect().top + scrollY) - 160;
    if (prevProps.scrollY !== scrollY) {
      if (scrollY >= top) {
        this.setState({ content: 'start' })
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
    const content = this.state.content
    const { title, subtitle, bg } = this.props
    return (
      <div ref={r => this.container = r} className='min-vh-100'>
        <ContentContainer>
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
                            <h6 className={typography.p}>{subtitle}</h6>
                            <h2 className={typography.t1}>{title}</h2>
                          </animated.div>
                        )}
                      </Content>
                    </div>
                  </div>
                </Link>
              </animated.div>
            )}
          </Bg>
        </ContentContainer>
      </div>
    )
  }
}


export default WorkHero;