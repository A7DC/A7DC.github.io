import React, { Component } from 'react'
import { Keyframes, config, animated } from 'react-spring'
import ContentContainer from '../ContentContainer'
import { heading, content } from '../../tachyons-classes'

const classes = {
  h1: 'f1-ns f2 fw6 lh-title ma0 pb3',
  subtitle: 'f4-ns f5 lh-copy ma0 mb4-ns mb6',
  hero: 'w-100 vh-100 flex pb1'
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

const Bg = createKeyFrames(600, -20, 0)
const Content = createKeyFrames(1100, 40, 0)

class Hero extends Component {
  state = { open: 'start' }
  render() {
    const state = this.state.open === undefined ? null : 'start'
    return (
      <Bg native state={state}>
        {style => (
          <animated.div style={style}>
            <section 
              className={classes.hero}
              style={{
                backgroundColor: '#1B1B1C',
                color: '#fff',
                boxSizing: 'content-box'
        }}>
              <ContentContainer bottom>
                <Content native state={state}>
                  {styles => (
                    <animated.div style={styles}>
                      <h1 className={heading.title}>Daniel Caine is a product <b className="db-ns w-100-ns fw6">designer from England </b></h1>
                      <p className={heading.subtitle}>Currently: Bordellio. Previously: SilverStripe, Levo and Reapit. <br /> Send me an <a href="#" className="underline color-inherit">email</a>, check my <a href="#" className="underline color-inherit">LinkedIn</a> profile, or download my <a href="#" className="underline color-inherit">CV</a>. <br /> Below is a selection of my work.</p>
                    </animated.div>
                  )}
                </Content>
              </ContentContainer>
            </section>
          </animated.div>
        )}
      </Bg>
    )
  }
}

export default Hero;

