import React from 'react'
import ContentContainer from '../ContentContainer'
import { ArrowDown } from '../Icons'

const classes = {
  h1: 'f1 lh-title ma0 pb3',
  subtitle: 'f4 lh-copy ma0 mb6'
}

export const Home = style => (
  <div 
    className="mainRoute" 
  style={
    { ...style, 
      backgroundColor: '#FFF254',
      color: '#2b2b2b'
      }
    }>
    <ContentContainer>
      <div className="mw8 pl6">
        <h1 className={classes.h1}>Hi, I’m Daniel Caine;  a product designer from England</h1>
        <p className={classes.subtitle}>Currently: Bordellio. Previously: SilverStripe, Levo and Reapit. Send me an <a href="#" className="underline color-inherit">email</a>, check my <a href="#" className="underline color-inherit">LinkedIn</a> profile, or download my <a href="#" className="underline color-inherit">CV</a>. Below is a selection of my work.</p>
        <ArrowDown />
      </div>
    </ContentContainer>
  </div>
)

