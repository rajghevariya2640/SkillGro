import React from 'react'

const SGBodyText = ({children, className}) => {
  return (
    <p className={`text-grey300 text-sm md:text-base !leading-[24px] md:!leading-[28px] ${className || ''}`}>
      {children}
    </p>
  )
}

export default SGBodyText
