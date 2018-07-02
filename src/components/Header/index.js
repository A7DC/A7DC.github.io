import React from 'react'
import { Link } from 'react-router-dom';

import { Logo } from '../Icons/'
import { Navigation } from '../Navigation';

const classes = {
  items: 'w-50 tc',
  links: 'link black'
}

export const Header = () => (
  <header className="fixed w-100 z-max pa3 flex flex-row">
    <Logo />
    <Navigation />
  </header>
)


