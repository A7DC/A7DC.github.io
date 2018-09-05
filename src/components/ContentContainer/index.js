import React from 'react'
import { stucture } from '../../tachyons-classes'

const ContentContainer = ({ children, bottom }) => (
  <div className={stucture.container}>
    {children}
  </div>
)

export default ContentContainer
