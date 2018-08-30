import React, {Component} from 'react'
import { Keyframes, animated, config } from 'react-spring'
import WorkTile from '../WorkTile'
import WorkHero from '../WorkHero'
import ContentContainer from '../ContentContainer'

import data from '../../db'

const Container = Keyframes.Trail({
  start: [{ delay: 0, from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1 } }]
})


class Work extends Component {

  componentDidUpdate(prevProps) {
    let windowScrollPosition = this.props.windowScrollPosition
    if (prevProps.windowScrollPosition !== windowScrollPosition) {
      this.props.getWorkRef(this.container)
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      start: undefined
    }
  }

  render() {
    const {windowScrollPosition} = this.props;
    const state = this.state.start === undefined ? 'start' : null
    return (
      <section ref={r => this.container = r} className="relative flex flex-column white overflow-hidden">
        <ContentContainer styles={'pb6'}>
          <WorkHero windowScrollPosition={windowScrollPosition} bg={data.workHero.bg} title={data.workHero.title} subtitle={data.workHero.subtitle} />
          <Container native keys={data.work.map((_, i) => i)} state={state} config={config}>
            {data.work.map((work, i) => ({ y, ...props }) => {
              return (
                <animated.div
                  style={{
                    transform: y.interpolate(y => `translate3d(0,${y}%,0)`),
                    ...props
                  }}>
                  <WorkTile heroPosition={this.container} windowScrollPosition={windowScrollPosition} bg={work.bg} title={work.title} subtitle={work.subtitle} padding={work.padding} key={i} />
                </animated.div>
              )
            })}
          </Container>
        </ContentContainer>
      </section>
    )
  }

}


export default Work;