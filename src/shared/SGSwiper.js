import React from 'react'
import { Swiper } from 'swiper/react'

const SGSwiper = ({children, className, ...props}) => {
  return (
    <Swiper className={className || ''} {...props}>
      {children}
    </Swiper>
  )
}

export default SGSwiper
