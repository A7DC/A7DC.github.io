import React from 'react'
import { Link } from 'react-router-dom'
import { animated } from 'react-spring'

const About = ({ style }) => (
  <animated.div className="mainRoute" style={{ ...style, background: `#C7C7C7` }}>
    <div className="mainRouteItem">
      <p>About</p>
    </div>
  </animated.div>
)

export default About
