import React from 'react'
import { Link } from 'react-router-dom'
import { animated } from 'react-spring'

// components
import Hero from '../Hero'

const Home = ({ style }) => (
  <animated.div className="mainRoute" style={{ ...style, background: `#1B1B1C` }}>
    <Hero />
  </animated.div>
)

export default Home
