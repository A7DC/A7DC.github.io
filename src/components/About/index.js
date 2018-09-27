import React from 'react'
import { typography } from '../../tachyons-classes'

import AnimationContainer from '../AnimationContainer';
import ContentContainer from '../ContentContainer';

const About = () => (
  <ContentContainer>
    <section ref={r => this.container = r}>
      <div className='ph2 ph5-ns w-100 h-100 mw8 mla mra relative'>
        <p className={typography.pLead}>I am happiest when my work is meaningful and varied. I want to build products which help empower people and help them to be free.</p>
        <p className={typography.pLead}>Whether it be prototyping in Framer, designing in Sketch, or building real-world apps in React, my varied skillset means I’m able to fit easily into any team, </p>
      </div>
    </section>
  </ContentContainer>
)

const AboutAnimated = AnimationContainer(About)

export default AboutAnimated;