import React from 'react'
import { animated } from 'react-spring'

const Container = ({ children, style, background, color }) => (
  <animated.div className="mainRoute" style={{ ...style, background: background, color: color }}>
      {children}
  </animated.div>
)

export default Container
