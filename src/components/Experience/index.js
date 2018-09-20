import React, { Component } from 'react'
import { Keyframes, config, animated } from 'react-spring'
import { heading, structure } from '../../tachyons-classes'
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

class Experience extends Component {

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
      <section className="relative white pt4">
        <ContentContainer>
          <Content native state={state}>
            {styles => (
              <animated.div style={styles}>
                <div className="flex flex-row pv6 bt b--dark-gray">
                  <div className={structure.containerInner}>
                  <div className="w-100 w-40-ns fl mb2">
                    <h3 className={`${heading.t2} pb4 pb0-ns`}>Experience</h3>
                  </div>
                  <div className="w-100 w-60-ns fl">
                    <div className="w-100 pl20pc-ns">
                      {data.workExperience.map((work, i) => {
                        return (
                          <div key={i} className="w-100 w-50-ns fl flex flex-column items-baseline pb5-ns pb4 pt2-ns pb0-lc">
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
              </animated.div>
            )}
          </Content>
        </ContentContainer>
      </section>

    )
  }

}

export default Experience;