import React from 'react'
import { structure } from '../../tachyons-classes'

const ContentContainer = ({ children, bottom }) => (
  <div className={structure.container}>
    {children}
  </div>
)

export default ContentContainer
