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
      <section className="relative white pv4">
        <ContentContainer>
          <Content native state={state}>
            {styles => (
              <animated.div style={styles}>
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
              </animated.div>
            )}
          </Content>
        </ContentContainer>
      </section>

    )
  }

}

export default Experience;