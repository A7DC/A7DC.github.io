import React, { Component } from 'react'
import { Trail, animated } from 'react-spring'
import { heading, stucture } from '../../tachyons-classes'

const classes = {
  container: 'w-100 vh-100 flex justify-center items-center bg-white content-box'
}

class LoadingAnimation extends Component {
  state = { toggle: true, items: ['item1', 'item2', 'item3', 'item4', 'item5'] }

  toggle = () => this.setState(state => ({ toggle: !state.toggle }))

  render() {
    const { toggle, items } = this.state
    return (
      <div className={classes.container}>
        <h2 className={heading.title}>Designer. Developer.</h2>

        <Trail
          native
          from={{ opacity: 0, x: -100 }}
          to={{ opacity: toggle ? 1 : 0.25, x: toggle ? 0 : 100 }}
          keys={items}>
          {items.map(item => ({ x, opacity }) => (
            <animated.div
              className="box"
              onClick={this.toggle}
              style={{
                opacity,
                transform: x.interpolate(x => `translate3d(${x}%,0,0)`)
              }}
            >
              {"example"}
            </animated.div>
          ))}
        </Trail>
      </div>
    )
  }


}

export default LoadingAnimation;

