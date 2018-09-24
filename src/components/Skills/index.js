import React from 'react'
import { typography } from '../../tachyons-classes'

import data from '../../db'
import AnimationContainer from '../AnimationContainer';
import ContentContainer from '../ContentContainer';

const Skills = () => (
  <ContentContainer>
    <section ref={r => this.container = r} className="relative white pv6">
      <div className='ph2 ph5-ns w-100 h-100 mw9 mla mra relative'>
        <h3 className={`${typography.t2} mb4`}>Skills</h3>
        <div className="flex flex-row-ns flex-row justify-between items-baseline">
          {data.skills.map((skill, i) => {
            return (
              <div key={i} className="w-30 flex flex-column">
                <h4 className={`${typography.p} mb2`}><b>{skill.title}</b></h4>
                <p className={typography.p}>{skill.content}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  </ContentContainer>
)

const SkillsAnimated = AnimationContainer(Skills)

export default SkillsAnimated;