import React from 'react'

const SGBodyText = ({children, className}) => {
  return (
    <p className={`text-grey300  leading-[28px] ${className || ''}`}>
      {children}
    </p>
  )
}

export default SGBodyText
