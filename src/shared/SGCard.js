import React from 'react'

const SGCard = ({contentDirectionClass, primaryChip, image, yellowChip, heading, iconContent}) => {
  return (
    <div className='bg-white border rounded-[10px] border-grey600 p-[21px] h-full'>
      <div className='relative'>
        <div className='overflow-hidden rounded-md max-h-[212px]'>
          <img src={image} alt='' />
        </div>
        {primaryChip && (
         
         <div className='absolute top-[17px] left-[22px] rounded-full bg-primary text-white text-[13px] font-medium py-[8.5px] px-3.5'>
           {primaryChip}
         </div>
         )}
        {yellowChip && (
         
         <div className='absolute font-poppins left-0 -bottom-3 bg-yellow50 rounded-full shadow-[4px_4px_0px] shadow-grey900 text-sm leading-none font-semibold py-[9px] px-3.5'>
           {yellowChip}
         </div>
         )}
      </div>
      <div className={`flex flex-col ${contentDirectionClass || ''}`}>
        <h6 className='font-semibold text-[19.5px] leading-[26px] font-poppins'>{heading}</h6>
        <div className='flex items-center gap-x-3.5'>
          {iconContent?.map((data, index) => {
             return (
               <div className='flex items-center gap-x-2' key={index}>
                 {data?.icon}
                     <span className='text-[15px] text-grey300 leading-none'>{data?.content}</span>
               </div>
             )
           })}
        </div>
      </div>
    </div>
  )
}

export default SGCard
