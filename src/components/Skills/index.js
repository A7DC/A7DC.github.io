import React from 'react'
import { heading } from '../../tachyons-classes'
import ContentContainer from '../ContentContainer'

import data from '../../db'


export const Skills = (style) => (
  <section className="relative white pv6">
    <ContentContainer>
      <div className="flex flex-row items-baseline">
        <div className="w-50 fl">
          <h3 className={heading.t2}>Skills</h3>
        </div>
        <div className="w-50 fl">
          {data.skills.map((skill, i) => {
            return (
              <div key={i} className="w-100 flex flex-row items-baseline pb5 pb0-lc">
                <span className='w-20'>
                  <h4 className={heading.subtitle}>{skill.title}</h4>
                </span>
                <span className='w-80'>
                  <p className={heading.p}>{skill.content}</p>
                </span>    
              </div>
            )
          })}
        </div>
      </div>
    </ContentContainer>
  </section>
)

export default Skills;