import React from 'react'
import { heading } from '../../tachyons-classes'
import ContentContainer from '../ContentContainer'

const classes = {
  container: 'relative white cover vh-50 w-50',
  images: 'absolute left-0 right-0 bottom-0 top-0 z-0',
}

const About = ({ title, subtitle, bg}) => (
  <div 
    className={classes.container}
    style={{
      backgroundImage: `url(${bg})`
    }}
    >
    <ContentContainer>
      <h6 className={heading.subtitle}>{subtitle}</h6>
      <h2 className={heading.title}>{title}</h2>
    </ContentContainer>
  </div> 
)

export default About;