import React from 'react'
import { Link } from 'react-router-dom'

const classes = {
  items: 'pl4',
  links: 'link black'
}

const navItems = [
  {
    text: 'home',
    url: '/',
  },
  {
    text: 'case studies',
    url: '/case-studies'
  },
  {
    text: 'experiments',
    url: '/experiments'
  },
];

export const Navigation = () => (
  <nav className="mla overflow-x-scroll no-scrollbar">
      <ul className='list flex flex-row pa0'>
        {navItems.map(li => <li className={classes.items} key={li}><Link className={classes.links} to={li.url}>{li.text}</Link></li>)}
      </ul>
    </nav>
)
