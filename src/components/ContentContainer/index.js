import React from 'react'
import { stucture } from '../../tachyons-classes'

const ContentContainer = ({ children, styles }) => (
  <div className={`${stucture.container} ${styles}`}>
    {children}
  </div>
)

export default ContentContainer