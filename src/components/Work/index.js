import React, {Component} from 'react'
import { Keyframes, animated, config } from 'react-spring'
// import WorkTile from '../WorkTile'
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
      start: 'start'
    }
  }

  componentDidUpdate(prevProps) {
    let windowScrollPosition = this.props.windowScrollPosition
    if (prevProps.windowScrollPosition !== windowScrollPosition) {
      this.props.getWorkRef(this.container)
    }
  }


  render() {
    const {windowScrollPosition} = this.props;
    const state = this.state.start === undefined ? 'start' : null
    return (
      <section ref={ r => this.container = r} className="relative flex flex-column white">
        <ContentContainer>
          <WorkHero windowScrollPosition={windowScrollPosition} bg={data.workHero.bg} title={data.workHero.title} subtitle={data.workHero.subtitle} />
        </ContentContainer>
      </section>
    )
  }

}


export default Work;