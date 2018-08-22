import React, { Component } from 'react'
import { Trail, animated, config } from 'react-spring'
import { heading } from '../../tachyons-classes'

const classes = {
  container: 'w-100 vh-100 flex justify-center items-center bg-white content-box'
}

class LoadingAnimation extends Component {
  state = { 
    toggle: true, 
    items: ['Designer,', 'programmer,', 'founder.']
  }

  render() {
    const { toggle, items } = this.state
    return (
      <div className={classes.container}>
        <Trail
          config={config.gentle} 
          native
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: toggle ? 1 : 0, y: toggle ? 0 : 40 }}
          keys={items}>
          {items.map((_, i) => ({ y, opacity }) => (
            <animated.div
              className="box"
              style={{
                opacity,
                transform: y.interpolate(y => `translate3d(0,${y}%,0)`)
              }}
            >
              <h2 className={`${heading.t2} fw6 pr2`}>{items[i]}</h2>
            </animated.div>
          ))}
        </Trail>
      </div>
    )
  }


}

export default LoadingAnimation;

