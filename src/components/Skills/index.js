import React, {Component} from 'react'
import { Keyframes, config, animated } from 'react-spring'
import { heading } from '../../tachyons-classes'
import ContentContainer from '../ContentContainer'

import data from '../../db'

const Content = Keyframes.Spring({
    start: {
      delay: 600,
      from: { transform: `translate3d(0,120px,0)`, opacity: 0 },
      to: { transform: `translate3d(0,0,0)`, opacity: 1 },
      config: config.slow
    }
  })

class Skills extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: undefined
    }
  }

  componentDidUpdate(prevProps) {
    let windowScrollPosition = this.props.windowScrollPosition
    let threshold = this.props.threshold
    if (prevProps.windowScrollPosition !== windowScrollPosition) {
      this.props.getSkillsRef(this.container)
      if (windowScrollPosition > threshold) {
        this.setState({
          content: 'start'
        })
      }
    }
  }

  render() {
    const state = this.state.content
    return (
      <section ref={r => this.container = r} className="relative white pv6">
        <ContentContainer>
          <Content native state={state}>
            {styles => (
              <animated.div style={styles}>
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
              </animated.div>
            )}
          </Content>
        </ContentContainer>
      </section>
    )
  }

}

export default Skills;