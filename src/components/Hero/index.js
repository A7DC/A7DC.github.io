import React, { Component } from 'react'
import { Keyframes, config, animated } from 'react-spring'
import ContentContainer from '../ContentContainer'
import { heading } from '../../tachyons-classes'

const classes = {
  hero: 'w-100 vh-80 flex pb1 white content-box'
}

const Content = Keyframes.Spring({
  start: {
    delay: 600,
    from: { transform: `translate3d(0,40px,0)`, opacity: 0 },
    to: { transform: `translate3d(0,0,0)`, opacity: 1 },
    config: config.slow
  }
})

class Hero extends Component {
  state = { open: 'start' }
  render() {
    const state = this.state.open
    return (
      <section
        className={classes.hero}>
        <ContentContainer>
          <div className={'pl3 pl6-ns pb6-ns absolute left-0 bottom-0'}>
            <Content native state={state}>
              {styles => (
                <animated.div style={styles}>
                  <h1 className={heading.title}>Daniel Caine is a product <b className="db-ns w-100-ns fw6">designer from England </b></h1>
                  <p className={heading.subtitle}>Send me an <a href="mailto: audaci7y@gmail.com" className="underline color-inherit">email</a>, check my <a href="linkedin.com" className="underline color-inherit">LinkedIn</a> profile, or download my <a href="google.com" className="underline color-inherit">CV</a>. <br /> Below is a selection of my work.</p>
                </animated.div>
              )}
            </Content>
          </div>
        </ContentContainer>
      </section>
    )
  }
}

export default Hero;

