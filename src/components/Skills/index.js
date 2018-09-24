import React, {Component} from 'react'
import { heading } from '../../tachyons-classes'

import data from '../../db'
import AnimationContainer from '../AnimationContainer';
import ContentContainer from '../ContentContainer';

class Skills extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ContentContainer>
        <section ref={r => this.container = r} className="relative white pv6">
          <div className='ph2 ph5-ns w-100 h-100 mw9 mla mra relative'>
            <div className="flex flex-row-ns flex-column items-baseline">
              <div className="w-100 w-40-ns fl mb0-ns mb3">
                <h3 className={heading.t2}>Skills</h3>
              </div>
              <div className="w-100 w-60-ns fl">
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
          </div>
        </section>
      </ContentContainer>
    )
  }

}

const SkillsAnimated = AnimationContainer(Skills)

export default SkillsAnimated;