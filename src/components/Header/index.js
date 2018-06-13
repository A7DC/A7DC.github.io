import React from 'react'
import { Link } from 'react-router-dom';

// import Navigation from './Navigation'

import { Navigation } from '../Navigation';

const classes = {
  items: 'w-50 tc',
  links: 'link light-silver'
}

export const Header = () => (
  <header className="fixed w-100 z-max pa3">
    <Navigation />
  </header>
)


