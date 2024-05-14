import React from 'react'
import { NavLink } from 'react-router-dom'

const SGNavLink = ({children, className, ...props}) => {
  return (
      <NavLink className={className || ''} {...props}>{children}</NavLink>
  )
}

export default SGNavLink