import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const classes = {
  items: 'w-50 tc'
}

export const Navigation = () => (
    <nav>
      <ul className="list flex flex-row pa0">
        <li className={classes.items}><Link to="/">home</Link></li>
        <li className={classes.items}><Link to="/about">about</Link></li>
      </ul>
    </nav>
)


