import React from 'react'
import WorkTile from '../WorkTile'
import WorkHero from '../WorkHero'
import ContentContainer from '../ContentContainer'

import data from '../../db'

const Work = ({ windowScrollPosition }) => (
  <section className="relative flex flex-column white">
    <ContentContainer>
      <WorkHero windowScrollPosition={windowScrollPosition} bg={data.workHero.bg} title={data.workHero.title} subtitle={data.workHero.subtitle} />
        {data.work.map((work, index) => {
          return (
            <div className="w-100 fl">
              <WorkTile windowScrollPosition={windowScrollPosition} key={index} bg={work.bg} title={work.title} subtitle={work.subtitle} position={work.position} />
            </div>
          )
        })}

    </ContentContainer>
  </section>
)


export default Work;