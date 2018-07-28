import React, { Component } from 'react'
import ContentContainer from '../ContentContainer'
import { Keyframes, animated, config } from 'react-spring'

const classes = {
  h1: 'f1-ns f2 fw6 lh-title ma0 pb3',
  subtitle: 'f4-ns f5 lh-copy ma0 mb4-ns mb6',
  hero: 'w-100 vh-100 flex'
}


const createKeyFrames = (delay, from, to) =>
  Keyframes.Spring({
    start: {
      delay,
      from: { transform: `translate3d(0,${to}%,0)`, opacity: 0 },
      to: { transform: `translate3d(0,${from}%,0)`, opacity: 1 },
      config: config.slow
    }
  })

const Bg = createKeyFrames(600, 0, 12)
const Content = createKeyFrames(1400, 0, 22)

class Hero extends Component {
  state = { open: 'start' }
  render() {
    const state = this.state.open === undefined ? null : 'start'
    return (
      <Bg native state={state}>
        {style => (
          <animated.div style={style}>
            <div 
              className={classes.hero}
              style={{
                backgroundColor: '#fff87a',
                color: '#2b2b2b'
        }}
      >
              <div>
                <Content native state={state}>
                  {styles => (
                    <animated.div style={styles} className={classes.content}>
                      <h1 className={classes.h1}>I'm a title</h1>
                      <p className={classes.subtitle}>And I'm a subtitle</p>
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

export default Hero;

