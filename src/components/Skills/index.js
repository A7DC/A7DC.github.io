import React from 'react'
import { typography, lists } from '../../tachyons-classes'

import data from '../../db'
import AnimationContainer from '../AnimationContainer';
import ContentContainer from '../ContentContainer';

const Skills = () => { 
  return (
    <section className='ph4 ph5-ns w-100 h-100 mw9 mla mra relative'>
      <ContentContainer>
        <section ref={r => this.container = r} className="relative white pv6">
            <section className='pb5'>
                <h3 className={`${typography.t2} mb4`}>Skills</h3>
                <div className="flex flex-row-ns flex-column justify-between items-baseline">
                  {data.skills.map((skill, i) => {
                    return (
                      <div key={i} className="w-30-ns mb0-ns mb4 flex flex-column">
                        <h4 className={`${typography.p} mb2`}><b>{skill.title}</b></h4>
                        <p className={typography.p}>{skill.content}</p>
                      </div>
                    )
                  })}
                </div>
            </section>
            <h3 className={`${typography.p} mb3`}><b>More things I do</b></h3>
          <div className={`${typography.p} flex flex-row-ns flex-column justify-between items-baseline"`}>
              {data.skillsExpanded.map((col, i) => {
                return (
                  <ul className={`${lists.ul} w-30`} key={i}>
                    {col.content.map((value, i) => {
                      return <li key={i}>{value}</li>
                    })}
                  </ul>
                )
              })}
            </div>
        </section>
      </ContentContainer>
    </section>
    )
}

const SkillsAnimated = AnimationContainer(Skills)

export default SkillsAnimated;