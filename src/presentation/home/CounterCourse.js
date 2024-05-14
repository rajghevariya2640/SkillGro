import React from 'react'
import SGContainer from '../../shared/SGContainer'
import TextShape from '../../assets/image/png/banner-text-shape.png'
import People from '../../assets/image/png/counter-course-people.png'
import BGShape from '../../assets/image/png/counter-course-bg.png'

const CounterCourse = () => {
  return (
    <div className='pb-[120px]'>
      <SGContainer>
        <div className='bg-blue200 px-[65px] relative pt-[85px] pb-[90px] rounded-[20px] flex items-center gap-x-[75px]'>
          <div className='absolute bottom-0 right-0 max-w-[284px] z-[1]'>
            <img src={People} alt='' />
          </div>
          <div className='absolute bottom-0 right-0 w-full max-w-[310px]'>
            <img src={BGShape} alt='' />
          </div>
          <div className='max-w-[435px]'>
            <h2 className='text-4xl leading-[48px] text-white font-semibold font-poppins capitalize'>Thousands of <span className='relative ms-4'><span className='relative text-white z-[1]'>courses</span> <div className='absolute top-0 left-0 w-[200px] translate-x-[-20px] z-[0]'> <img src={TextShape} alt='' /> </div></span> authored by industry experts</h2>
          </div>
          <div className="flex items-center gap-x-[120px] relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:translate-x-[-50%] after:translate-y-[-50%] after:h-full after:w-[1px] after:bg-lineGradient">
            <div className='text-center'>
              <p className='text-[56px] leading-[47px] font-semibold text-white'>
                45K+
              </p>
              <span className='text-white leading-[19px] mt-3 block font-medium'>Active Students</span>
            </div>
            <div className='text-center'>
              <p className='text-[56px] leading-[47px] font-semibold text-white'>
                328+
              </p>
              <span className='text-white leading-[19px] mt-3 block font-medium'>Best Instructors</span>
            </div>
          </div>
        </div>
      </SGContainer>
    </div>
  )
}

export default CounterCourse
