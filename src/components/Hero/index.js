import React, { Component, Fragment } from 'react'
import { Keyframes, config, animated } from 'react-spring'
import ContentContainer from '../ContentContainer'
import { typography, structure } from '../../tachyons-classes'

import data from '../../db'

import urls from '../../urls'

import ImageHover from '../ImageHover'

const createKeyFrames = (delay, from, to) =>
  Keyframes.Spring({
    start: {
      delay,
      from: { transform: `translate3d(0,${from}%,0)`, opacity: 0 },
      to: { transform: `translate3d(0,${to}%,0)`, opacity: 1 },
      config: config.slow
    }
  })

const Image = createKeyFrames(1600, 40, 0)

class Hero extends Component {
  state = { open: 'start' }
  render() {
    const { home } = this.props
    const state = this.state.open
    return (
      <Fragment>
        {home ?
          <HomeContent state={state}/> :
          <CaseStudyContent imageState={state} title={data.workMain.title}/>
        }
      </Fragment>
    )
  }
}

export default Hero;

const HomeContent = () => (
  <section
    className={structure.heroContainer}>
    <ContentContainer>
      <div className={`${structure.pullTextLeft} pb6-ns`}>
        <h1 className={`${typography.t1} pt6`}>Daniel Caine is a product <b className="db-ns w-100-ns fw6">designer from England </b></h1>
        <p className={typography.p}>Send me an <a href={urls.email} className="underline color-inherit">email</a>, check my <a href={urls.linkedin} className="underline color-inherit">LinkedIn</a> profile, or download my <a href={urls.cv} className="underline color-inherit">CV</a>. <br /> Below is a selection of my work.</p>
      </div>
    </ContentContainer>
  </section>
)

const CaseStudyContent = ({ title, state, imageState}) => (
  <section
    className={'w-100 flex flex-column content-box pt6'}>
    <ContentContainer>
      <div className={`${structure.pullTextLeft} pb6 pt6 ph4 pl5-l pr6-l mw8`}>
        <p className={typography.p}>Case study</p>
        <h1 className={`${typography.t1} pb3`}>{title}</h1>
        <p className={typography.pLead}>
            In 2017, advertising websites which catered for independent escorts were poorly designed, lacked features that we’ve come to expect from modern apps in terms of experience and security, and the space seemed stagnant in its pursuit of innovation.

            I was part of a project which aimed to make paid dating easier, safer, and more fun for those involved.

            Due to the privacy of our users (and for obvious competitive reasons) some details have been omitted and obfuscated from this case study.
          </p>
      </div>
    </ContentContainer>
    <Image native state={imageState}>
      {styles => (
        <animated.div style={styles}>
          <div className='vh-100'>
            <ImageHover bg={data.workMain.bg} />
          </div>
        </animated.div>
      )}
    </Image>
  </section>
)