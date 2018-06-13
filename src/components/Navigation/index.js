import React from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '../Icons/'

const classes = {
  items: 'mr6',
  links: 'link light-silver'
}

const navItems = [
  {
    text: 'home',
    url: '/',
  },
  {
    text: 'about',
    url: '/about'
  }
];

export const Navigation = () => (
  <nav className="ml6 pl5 overflow-x-scroll no-scrollbar">

      <ul className='list flex flex-row pa0'>
        {navItems.map(li => <li className={classes.items} key={li}><Link className={classes.links} to={li.url}>{li.text}</Link></li>)}
      </ul>
    </nav>
)
