import React from 'react'
import WorkTile from '../WorkTile'
import WorkHero from '../WorkHero'

import data from '../../db'

const Work = ({ windowScrollPosition }) => (
  <section className="relative flex flex-column">
    <WorkHero windowScrollPosition={windowScrollPosition} bg={data.workHero.bg} title={data.workHero.title} subtitle={data.workHero.subtitle} />
    <div className="flex flex-row">
      {data.work.map((work, index) => {
        return <WorkTile key={index} bg={work.bg} title={work.title} subtitle={work.subtitle} />
      })}
    </div>
    
  </section>
)


export default Work;