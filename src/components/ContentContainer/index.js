import React from 'react'
import { content } from '../../tachyons-classes'

const ContentContainer = ({ children, bottom }) => (
  <div className={bottom ? content.containerBottom : content.container}>
    {children}
  </div>
)

export default ContentContainer
