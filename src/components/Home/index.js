import React, { Component } from 'react'
import ContentContainer from '../ContentContainer'
import { Keyframes, animated, config } from 'react-spring'

const classes = {
  h1: 'f1-ns f2 fw6 lh-title ma0 pb3',
  subtitle: 'f4-ns f5 lh-copy ma0 mb4-ns mb6'
}

// Creates a spring with predefined animation slots
const Content = Keyframes.Spring({
  // Slots can take arrays/chains,
  start: [
    { delay: 600, from: { y:12, opacity: 0 }, to: { y: 0, opacity: 1 }, config: config.gentle },
  ]
})

class Home extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.style.transform !== prevProps.style.transform) {
      if (this.props.style.transform <= "translateY(-24vh)") {
        this.setState({
          open: 1
        })
      } else if (this.props.style.transform === "translateY(0vh)") {
        console.log("animation has ended")
      }
    }
  }

  state = { open: undefined }
  render() {
    const state = this.state.open === undefined ? null : 'start'
    const { style } = this.props;
    return (
    <div 
      className="mainRoute" 
    style={
      { ...style, 
        backgroundColor: '#FFF87A',
        color: '#2b2b2b'
        }
      }>
      <ContentContainer>
          <div className="mw8 ph3 pl6-ns pr0-ns absolute bottom-2">
            <Content native state={state}>
            {({ y, opacity }) => (
              <animated.div 
                style={{ 
                  transform: y.interpolate(y => `translate3d(0,${y}%,0)`),
                  opacity: opacity.interpolate(opacity => opacity)
            }}
            >
                  <h1 className={classes.h1}>Daniel Caine is a full-stack <b className="db-ns w-100-ns fw6"> designer from England </b></h1>
                  <p className={classes.subtitle}>Currently: Bordellio. Previously: SilverStripe, Levo and Reapit. <br /> Send me an <a href="#" className="underline color-inherit">email</a>, check my <a href="#" className="underline color-inherit">LinkedIn</a> profile, or download my <a href="#" className="underline color-inherit">CV</a>. <br /> Below is a selection of my work.</p>
              </animated.div>
            )}
            </Content>
        </div>
      </ContentContainer>
    </div>
    )
  }
}

export default Home;