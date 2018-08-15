import React from 'react'
import { heading } from '../../tachyons-classes'
import ContentContainer from '../ContentContainer'

import data from '../../db'


export const Experience = (style) => (
  <section className="bg-black relative white">
    <ContentContainer>
      <div className="flex flex-row pv6  bt b--dark-gray">
        <div className="w-50 fl">
          <h3 className={heading.title}>Experience</h3>
        </div>
        <div className="w-50 fl">
          <div className="w-100 pl20pc">
            {data.workExperience.map((work, index) => {
              return (
                <div className="w-50 fl flex flex-column items-baseline pb5 pt2 pb0-lc">
                  <h6 className={heading.t6}>{work.employer}</h6>
                  <span className={heading.p}>{work.jobTitle}</span>
                  <span className={heading.p}>{work.datesWorked}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </ContentContainer>
  </section>
)

export default Experience;