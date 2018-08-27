import React, { Component, Fragment } from 'react'
import { heading } from '../../tachyons-classes'
import ContentContainer from '../ContentContainer'

const classes = {
  hero: 'w-100 vh-80 flex pb1 bg-near-white content-box'
}


class Bordellio extends Component {

  render() {
    return (
      <Fragment>
        <section className={classes.hero}>
          <ContentContainer>
            <div className={'pl3 pl6-ns pb6-ns absolute left-0 bottom-0'}>
              <span className={heading.subtitle}>Case studies</span>
              <h1 className={heading.title}>Digital transformation of <br /> the sex industry</h1>
            </div>
          </ContentContainer>
        </section>
        <section className='bg-near-white'>
          <ContentContainer>
            <p>In 2017, advertising websites which catered for independent escorts were poorly designed, lacked features that we’ve come to expect from modern apps in terms of experience and security, and the space seemed stagnant in its pursuit of innovation. </p>
            <p>I was part of a project which aimed to make paid dating easier, safer, and more fun for those involved.</p>
            <p>Due to the privacy of our users (and for obvious competitive reasons) some details have been omitted and obfuscated from this case study. </p>
          </ContentContainer>
        </section>
      </Fragment>
    )
  }

}

export default Bordellio;