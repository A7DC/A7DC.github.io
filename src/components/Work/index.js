import React from 'react'
import WorkTile from '../WorkTile'
import WorkHero from '../WorkHero'
import ContentContainer from '../ContentContainer'

import data from '../../db'

const Work = ({ windowScrollPosition }) => (
  <section className="relative flex flex-column white">
    <ContentContainer>
      <WorkHero windowScrollPosition={windowScrollPosition} bg={data.workHero.bg} title={data.workHero.title} subtitle={data.workHero.subtitle} />
        {data.work.map((work, i) => {
          return (
            <div key={i} className="w-100 fl">
              <WorkTile windowScrollPosition={windowScrollPosition} bg={work.bg} title={work.title} subtitle={work.subtitle} position={work.position} />
            </div>
          )
        })}

    </ContentContainer>
  </section>
)


export default Work;