import React, { Component } from 'react'
import { Keyframes, config, animated } from 'react-spring'

let Background =  'images/bordellio-work-bg.png'

const classes = {
  container: 'relative white vh-100',
  images: 'absolute left-0 right-0 bottom-0 top-0 z-0',
  h6: 'f1-ns f6 ma0 pb3',
  subtitle: 'f4-ns f4 lh-copy ma0 mb4-ns mb6',
  content: 'mw8 ph3 pl6-ns pr0-ns absolute bottom-2'
}

export const createKeyFrames = (delay, from, to) =>
  Keyframes.Spring({
    start: {
      delay,
      from: { transform: `translate3d(0,${to}%,0)` },
      to: { transform: `translate3d(0,${from}%,0)` },
      config: config.slow
    }
  })

const Bg = createKeyFrames(0, 0, 100)
class Work extends Component {

state = { open: undefined }

  componentDidUpdate(prevProps) {
    if (prevProps.windowScrollPosition !== this.props.windowScrollPosition) {
      //Perform some operation here
      this.setState({ open: this.props.windowScrollPosition }, () => console.log('this.state.open', this.state.open))
    }
  }

  getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.windowScrollPosition !== prevState.windowScrollPosition) {
      return { windowScrollPosition: nextProps.windowScrollPosition }
    }
    else return null;
  }

render(){
  const state = this.state.open === undefined ? null : 'start'
  return (
    <Bg native state={state}>
      {style => (
        <animated.div style={style}>
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
        </animated.div>
      )}
    </Bg>
  )
}
}


export default Work;

