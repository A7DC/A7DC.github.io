import React, { Component, Fragment } from 'react'
import { Keyframes, config, animated } from 'react-spring'
import ContentContainer from '../ContentContainer'
import { heading, structure } from '../../tachyons-classes'

import data from '../../db'

const Content = Keyframes.Spring({
  start: {
    delay: 1200,
    from: { transform: `translate3d(0,40px,0)`, opacity: 0 },
    to: { transform: `translate3d(0,0,0)`, opacity: 1 },
    config: config.slow
  }
})

class Hero extends Component {
  state = { open: 'start' }
  render() {
    const { home } = this.props
    const state = this.state.open
    return (
      <Fragment>
        {home ?
          <HomeContent state={state}/> :
          <CaseStudyContent state={state} title={data.workHero.title}/>
        }
      </Fragment>
    )
  }
}

export default Hero;

const HomeContent = ({state}) => (
  <section
    className={structure.heroContainer}>
    <ContentContainer>
      <div className={structure.pullTextLeft}>
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

const CaseStudyContent = ({title, state}) => (
  <section
    className={structure.heroContainer}>
    <ContentContainer>
      <div className={structure.pullTextLeft}>
        <Content native state={state}>
          {styles => (
            <animated.div style={styles}>
              <p className={heading.subtitle}>Case study</p>
              <h1 className={heading.title}>{title}</h1>
            </animated.div>
          )}
        </Content>
      </div>
    </ContentContainer>
  </section>
)