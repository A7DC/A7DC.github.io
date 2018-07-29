import React, { Component } from 'react'
import { createKeyFrames } from '../../functions'
let Background =  'images/bordellio-work-bg.png'

const classes = {
  container: 'relative white vh-100',
  images: 'absolute left-0 right-0 bottom-0 top-0 z-0',
  h6: 'f1-ns f6 ma0 pb3',
  subtitle: 'f4-ns f4 lh-copy ma0 mb4-ns mb6',
  content: 'mw8 ph3 pl6-ns pr0-ns absolute bottom-2'
}

const Bg = createKeyFrames(600, 0, 12)
const Content = createKeyFrames(1200, 0, 22)
class Work extends Component {

state = { open: false }

componentDidUpdate(prevProps) {
  if (this.props.windowScrollPosition !== prevProps.windowScrollPosition) {
    if (this.props.windowScrollPosition > 40) {
      console.log('trigger animation now')
      this.setState({
        open: true
      })
    }
  }
}

render(){
  return(
  <div
    className={`${classes.container}`}
    style={{
      backgroundImage: `url(${Background})`
    }}
  >
    <div className={classes.content}>
      <h6 className={classes.h6}>Bordellio</h6>
      <p className={classes.subtitle}>A digitial transformation of the sex industry</p>
    </div>
  </div>
  )
}
}


export default Work;

