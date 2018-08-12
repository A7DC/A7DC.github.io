import React from 'react'
import { heading } from '../../tachyons-classes'
import ContentContainer from '../ContentContainer'

import data from '../../db'


export const Skills = (style) => (
  <section className="bg-black vh-100 relative white pv6 flex flex-row">
    <ContentContainer>
      <div className="w-30 fl">
        <h3 className={heading.title}>Skills</h3>
      </div>
      <div className="w-70 fl">
        {data.skills.map((skill, index) => {
          return (
            <div className="w-100 flex flex-row">
              <span className='w-20 pb5'>
                <h4 className={heading.t2}>{skill.title}</h4>
              </span>
              <span className='w-80 pb5'>
                <p className={heading.subtitle}>{skill.content}</p>
              </span>    
            </div>
          )
        })}
      </div>
    </ContentContainer>
  </section>
)

export default Skills;