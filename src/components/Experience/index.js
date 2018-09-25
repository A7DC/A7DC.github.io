import React from 'react'
import { typography, structure } from '../../tachyons-classes'
import ContentContainer from '../ContentContainer'
import AnimationContainer from '../AnimationContainer'

import data from '../../db'

const classes = {
  col: 'w-100 w-50-l fl'
}

const Experience = () => (
  <section className='ph2 ph5-ns w-100 h-100 mw9 mla mra relative'>
    <ContentContainer>
      <div className="flex flex-row pv6">
        <div className={structure.containerInner}>
          <div className={classes.col}>
            <h3 className={`${typography.t2} mb4 mb0-l`}>Experience</h3>
          </div>
          <div className={classes.col}>
            <div className="w-100 pl20pc">
              {data.workExperience.map((work, i) => {
                return (
                  <div key={i} className="w-100 w-50-l fl flex flex-column items-baseline pb5">
                    <h6 className={typography.p}><b>{work.employer}</b></h6>
                    <span className={typography.p}>{work.jobTitle}</span>
                    <span className={typography.p}>{work.datesWorked}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  </section>  
)

const ExperienceAnimated = AnimationContainer(Experience)

export default ExperienceAnimated;
