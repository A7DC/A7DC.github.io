import React, { Component } from 'react'
import { createKeyFrames } from '../../functions'
import { animated } from 'react-spring'

const classes = {
  h1: 'f1-ns f2 fw6 lh-title ma0 pb3',
  subtitle: 'f4-ns f5 lh-copy ma0 mb4-ns mb6',
  hero: 'w-100 vh-100 flex',
  content: 'mw8 ph3 pl6-ns pr0-ns absolute bottom-2'
}

const Bg = createKeyFrames(600, 0, 12)
const Content = createKeyFrames(1200, 0, 22)

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
        }}>
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

