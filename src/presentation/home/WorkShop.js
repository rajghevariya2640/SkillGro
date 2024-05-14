import React from 'react'
import SGContainer from '../../shared/SGContainer'
import SGSubHead from '../../shared/SGSubHead'
import { AnalysingChartIcon, CertificateIcon, EducationCap, RightLongArrow } from '../../assets/image/svg/Icon'
import SGButton from '../../shared/SGButton'
import SGBodyText from '../../shared/SGBodyText'
import WorkShopImg from '../../assets/image/png/workshop.png'
import WorkShopShape from '../../assets/image/png/workshop-shape.png'

const WorkShop = () => {
  return (
    <div className='py-[50px] sm:py-[60px] md:py-20 lg:py-[120px]'>
      <SGContainer>
        <div className='flex flex-wrap gap-y-[30px]'>
          <div className='w-full md:w-6/12 relative md:px-3'>
            <div className='max-w-[519px] mx-auto'>
              <img src={WorkShopImg} alt='' />
            </div>
            <div className='absolute top-2 xs:top-9 right-[40%] translate-x-[50%] max-w-[80px] xs:max-w-[103px]'>
              <img src={WorkShopShape} alt='' />
            </div>
          </div>
          <div className='w-full md:w-6/12 md:px-3'>
            <SGSubHead chipText='Free Workshop' mainHeading='Join Our Free Workshops' subHeading='Edhen an unknown printer took a galley of type and scrambled it to make a type specimen bookas survived not only five centuries.Edhen an unknown printer took a galley of type and scrambled.'
            />
            <div className='flex flex-col xs:flex-row gap-5 gap-x-[30px] mt-[25px]'>
              <div>
                <div className='flex items-center gap-x-5 mb-2 xs:mb-[18px]'>
                  <div className='flex items-center justify-center rounded-full h-[60px] min-w-[60px] bg-[#FF6666] border border-[#CE3B3B] shadow-[5px_5px_0_rgba(0,0,0,0.25)]'>
                    <AnalysingChartIcon />
                  </div>
                  <p className='font-poppins text-xl font-semibold'>
                    Smooth Virtual Live Classes
                  </p>
                </div>
                <SGBodyText>
                  Edhen an unknown printer Rtook galley of type scrambled.
                </SGBodyText>
              </div>
              <div>
                <div className='flex items-center gap-x-5 mb-2 xs:mb-[18px]'>
                  <div className='flex items-center justify-center rounded-full h-[60px] min-w-[60px] bg-[#1BCBE3] border border-[#019AAF] shadow-[5px_5px_0_rgba(0,0,0,0.25)]'>
                    <EducationCap className='w-[26px] lg:w-[32px]' />
                  </div>
                  <p className='font-poppins text-xl font-semibold'>
                    99% Graduation Complete
                  </p>
                </div>
                <SGBodyText>
                  Edhen an unknown printer Rtook galley of type scrambled.
                </SGBodyText>
              </div>
            </div>
            <SGButton variant='primary' className=' mt-[30px]'>
              Quick Join Now
              <RightLongArrow />
            </SGButton>
          </div>
        </div>
      </SGContainer>
    </div>
  )
}

export default WorkShop
