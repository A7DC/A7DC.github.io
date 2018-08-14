import React from 'react'
import { heading } from '../../tachyons-classes'
import ContentContainer from '../ContentContainer'

import data from '../../db'


export const Experience = (style) => (
  <section className="bg-black relative white pv6">
    <ContentContainer>
      <div className="flex flex-row items-baseline">
        <div className="w-30 fl">
          <h3 className={'f3 fw4 lh-title ma0 mb3-ns'}>Experience</h3>
        </div>
        <div className="w-70 fl">
          <div className="w-100 pl20pc">
            {data.workExperience.map((work, index) => {
              return (
                <div className="w-50 fl flex flex-column items-baseline pb5 pb0-lc">
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