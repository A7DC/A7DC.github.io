import React, { Component } from 'react'
import { Keyframes, config, animated } from 'react-spring'
import { typography, structure } from '../../tachyons-classes'
import ContentContainer from '../ContentContainer'
import AnimationContainer from '../AnimationContainer'

import data from '../../db'

const Experience = () => (
  <section className="relative white pv4">
    <ContentContainer>
      <div className="flex flex-row pv6  bt b--dark-gray">
        <div className={structure.containerInner}>
          <div className="w-40 fl">
            <h3 className={heading.t2}>Experience</h3>
          </div>
          <div className="w-60 fl">
            <div className="w-100 pl20pc">
              {data.workExperience.map((work, i) => {
                return (
                  <div key={i} className="w-50 fl flex flex-column items-baseline pb5 pt2 pb0-lc">
                    <h6 className={heading.t6}>{work.employer}</h6>
                    <span className={heading.p}>{work.jobTitle}</span>
                    <span className={heading.p}>{work.datesWorked}</span>
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
