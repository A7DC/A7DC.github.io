import React, { Component } from 'react'
import { Keyframes, animated, config } from 'react-spring'
import WorkTile from '../WorkTile'
import ContentContainer from '../ContentContainer'

import data from '../../db'

const Container = Keyframes.Trail({
  start: [{ delay: 400, from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1 } }]
})


class Work extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      start: 'start'
    }
  }

  componentDidMount() {
    console.log(data.workMain, 'data.workMain')
  }

  render() {
    const { windowScrollPosition, getWorkHeroRef, workTileThreshold } = this.props;
    const state = this.state.start
    return (
      <section ref={r => this.container = r} className="relative flex flex-column white pv4">
        <ContentContainer>
          <WorkTile
            animation={'start'}
            workTileThreshold={workTileThreshold}
            windowScrollPosition={windowScrollPosition}
            bg={data.workMain.bg}
            title={data.workMain.title}
            subtitle={data.workMain.subtitle}
            padding={data.workMain.padding} />
          <Container native keys={data.work.map((_, i) => i)} state={state} config={config}>
            {data.work.map((work, i) => ({ y, ...props }) => {
              return (
                <animated.div
                  style={{
                    transform: y.interpolate(y => `translate3d(0,${y}%,0)`),
                    ...props
                  }}
                  className={'flex flex-column'}
                  >
                  <WorkTile 
                    animation={undefined}
                    workTileThreshold={workTileThreshold} 
                    windowScrollPosition={windowScrollPosition} 
                    bg={work.bg} 
                    title={work.title} 
                    subtitle={work.subtitle} 
                    padding={work.padding} 
                    key={i} />
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