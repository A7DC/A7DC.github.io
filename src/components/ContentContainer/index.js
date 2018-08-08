import React from 'react'
import { content } from '../../tachyons-classes'

const ContentContainer = ({ children }) => (
  <div className={content.container}>
    {children}
  </div>
)

export default ContentContainer
