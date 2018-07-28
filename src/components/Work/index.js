import React from 'react'
let Background =  'images/bordellio-work-bg.png'

const classes = {
  container: 'relative',
  images: 'absolute left-0 right-0 bottom-0 top-0 z-0',
  h6: 'f1-ns f6 ma0 pb3',
  subtitle: 'f4-ns f4 lh-copy ma0 mb4-ns mb6',
}

const Work = () => (
  <div 
    className={`${classes.container}`}
    style={{
      backgroundImage: `url(${Background})`
    }}
    >
    <div className="z-max">
      <h6 className={classes.h6}>Bordellio</h6>
      <p className={classes.subtitle}>A digitial transformation of the sex industry</p>
    </div>
  </div>
)

export default Work;