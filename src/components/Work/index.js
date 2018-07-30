import React, { Component } from 'react'
import { Keyframes, config, animated } from 'react-spring'

let Background =  'images/bordellio-work-bg.png'

const classes = {
  container: 'relative white vh-100 cover',
  images: 'absolute left-0 right-0 bottom-0 top-0 z-0',
  h6: 'f1-ns f6 ma0 pb3',
  subtitle: 'f4-ns f4 lh-copy ma0 mb4-ns mb6',
  content: 'mw8 ph3 pl6-ns pr0-ns absolute bottom-2'
}


const createKeyFrames = (delay, from, to) =>
  Keyframes.Spring({
    start: {
      delay,
      from: { transform: `translate3d(0,${from}%,0)`, opacity: 0 },
      to: { transform: `translate3d(0,${to}%,0)`, opacity: 1 },
      config: config.slow
    }
  })

const Bg = createKeyFrames(0, 100, 0)
const Content = createKeyFrames(0, 40, 0)

class Work extends Component {

state = { 
  open: undefined,
  content: false
}


  componentDidUpdate(prevProps) {
    let windowScrollPosition = this.props.windowScrollPosition
    if (prevProps.windowScrollPosition !== windowScrollPosition) {
      //Perform some operation here
      this.setState({ open: windowScrollPosition }, () => {console.log('this.state.open', this.state.open)})
      if (windowScrollPosition > 700) {
        this.setState({
          content: true
        })
      }
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
  const content = this.state.content ? 'start' : null
  return (
    <Bg native state={state}>
      {style => (
        <animated.div style={style}>
          <div
            ref={(el) => { this.container = el }}
            className={`${classes.container}`}
            style={{
              backgroundImage: `url(${Background})`
            }}
          >
            <Content native state={content}>
              {styles => (
                <animated.div style={styles} className={classes.content}>
                  <h6 className={classes.h6}>Bordellio</h6>
                  <p className={classes.subtitle}>A digitial transformation of the sex industry</p>
                </animated.div>
              )}
            </Content>
          </div>
        </animated.div>
      )}
    </Bg>
  )
}
}


export default Work;

