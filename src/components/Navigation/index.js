import React from 'react'
import { Link } from 'react-router-dom';

const classes = {
  items: 'w-50 tc',
  links: 'link light-silver'
}

export const Navigation = () => (
  <nav className={'fixed w-100 z-max pa2'}>
      <ul className='list flex flex-row pa0'>
        <li className={classes.items}><Link className={classes.links} to='/'>home</Link></li>
        <li className={classes.items}><Link className={classes.links} to='/about'>about</Link></li>
      </ul>
    </nav>
)


