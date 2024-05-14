import React from 'react'

const SGContainer = ({children, className}) => {
  return (
    <div className={`container ${className || ''}`}>
      {children}
    </div>
  )
}

export default SGContainer
