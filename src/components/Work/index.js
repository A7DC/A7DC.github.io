import React, {Component} from 'react'
import WorkTile from '../WorkTile'
import WorkHero from '../WorkHero'
import ContentContainer from '../ContentContainer'

import data from '../../db'

class Work extends Component {

  render() {
    const {windowScrollPosition} = this.props;
    return (
      <section ref={ r => this.container = r} className="relative flex flex-column white">
        <ContentContainer>
          <WorkHero windowScrollPosition={windowScrollPosition} bg={data.workHero.bg} title={data.workHero.title} subtitle={data.workHero.subtitle} />
          {data.work.map((work, i) => {
            return (
              <WorkTile heroPosition={this.container} windowScrollPosition={windowScrollPosition} bg={work.bg} title={work.title} subtitle={work.subtitle} padding={work.padding} key={i} />
            )
          })}
        </ContentContainer>
      </section>
    )
  }

}


export default Work;