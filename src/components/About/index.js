import React from 'react'
import { typography } from '../../tachyons-classes'

import AnimationContainer from '../AnimationContainer';
import ContentContainer from '../ContentContainer';

const Skills = () => (
  <ContentContainer>
    <section ref={r => this.container = r} className="relative white pv6">
      <div className='ph2 ph5-ns w-100 h-100 mw9 mla mra relative'>
        <p className={typography.pLead}>I am happiest when my work is meaningful and varied. I want to build products which help empower people and help them to be free.</p>
        <p className={typography.pLead}>Whether it be prototyping in Framer, designing in Sketch, or building real-world apps in React, my varied skillset means I’m able to fit easily into any team, </p>
      </div>
    </section>
  </ContentContainer>
)

const SkillsAnimated = AnimationContainer(Skills)

export default SkillsAnimated;