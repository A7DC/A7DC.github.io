import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { Keyframes, animated, config } from 'react-spring'
import { heading } from '../../tachyons-classes';

const classes = {
  container: 'bg-white content-box',
  bg: 'w-100 vh-100 bg-black'
}

const Background = Keyframes.Trail({
  start: [{ delay: 600, from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1 } }, { to: { y: 100, opacity: 0 } }]
})

class LoadingAnimation extends Component {

  constructor(props) {
    super(props)
    this.state = {
      start: undefined,
      items: ['Designer, ', 'programmer, ', 'founder.']
    }
  }

  // need to find out when the animation finishes really
  componentDidMount() {
    setTimeout(() => this.props.history.push('/'), 2600);
  }

  render() {
    const {items} = this.state;
    const state = this.state.start === undefined ? 'start' : null
    return (
        <div className={classes.container}>
        <div className={'flex justify-center items-center w-100 vh-100  '}>
        <Background native keys={items.map((_, i) => i)} state={state} config={config}>
            {items.map((item) => ({ y, ...props }) => (
              <animated.div
                style={{
                transform: y.interpolate(y => `translate3d(0,${y}%,0)`),
                  ...props
                }}>
              <h2 className={`${heading.t2} fw6 pr2`}>{item}</h2>
              </animated.div>
            ))}
          </Background>
          </div>
        </div>
    )
  }
}

export default withRouter(LoadingAnimation);

