import React, { Component } from 'react'
import { Keyframes, animated, config } from 'react-spring'
import WorkTile from '../WorkTile'
import WorkHero from '../WorkHero'
import ContentContainer from '../ContentContainer'

import data from '../../db'

const Container = Keyframes.Trail({
  start: [{ delay: 0, from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1 } }]
})


class Work extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      start: 'start', 
      threshold: undefined
    }
  }

  componentDidUpdate(prevProps, prevState) {
    let windowScrollPosition = this.props.windowScrollPosition
    const threshold = this.props.workTileThreshold
    if (prevProps.windowScrollPosition !== windowScrollPosition) {
      if (windowScrollPosition > threshold) {
        this.setState({
          threshold: threshold
        })
      }
    }


  render() {
    const { windowScrollPosition, getWorkHeroRef, workTileThreshold } = this.props;
    const state = this.state.start
    return (
      <section ref={r => this.container = r} className="relative flex flex-column white pv4">
        <ContentContainer>
          <WorkHero 
            windowScrollPosition={windowScrollPosition} 
            getWorkHeroRef={getWorkHeroRef} 
            bg={data.workHero.bg} 
            title={data.workHero.title} 
            subtitle={data.workHero.subtitle} />
          <Container native keys={data.work.map((_, i) => i)} state={state} config={config}>
            {data.work.map((work, i) => ({ y, ...props }) => {
              return (
                <animated.div
                  style={{
                    transform: y.interpolate(y => `translate3d(0,${y}%,0)`),
                    ...props
                  }}>
                  <WorkTile 
                    getWorkTileRef={this.props.getWorkTileRef}
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