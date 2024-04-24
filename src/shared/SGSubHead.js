import React from 'react'
import SGBodyText from './SGBodyText'

const SGSubHead = ({chipText, mainHeading, subHeading, subHeadClass, center, mainClass}) => {
  return (
    <div className={`flex flex-col ${mainClass || ''} ${center === true ? 'items-center' :''} gap-y-[15px]`}>
      <span className='text-primary font-medium py-[5.5px] px-4 bg-primaryLight leading-[25px] rounded-full max-w-fit'>{chipText}</span>
      <h2 className='text-4xl leading-[48px] font-semibold font-poppins capitalize'>{mainHeading}</h2>
      <SGBodyText className={`${subHeadClass || ''}`}>
        {subHeading}
      </SGBodyText>
    </div>
  )
}

export default SGSubHead
