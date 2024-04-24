import React from 'react'
import SGContainer from '../../shared/SGContainer'
import SGSubHead from '../../shared/SGSubHead'
import { CertificateIcon, EducationCap, RightLongArrow } from '../../assets/image/svg/Icon'
import SGButton from '../../shared/SGButton'
import WorkShopImg from '../../assets/image/png/workshop.png'
import WorkShopShape from '../../assets/image/png/workshop-shape.png'

const WorkShop = () => {
  return (
    <div className='py-[120px]'>
      <SGContainer>
        <div className='flex flex-wrap'>
          <div className='w-6/12 relative'>
            <div className='max-w-[519px] mx-auto'>
              <img src={WorkShopImg} alt='' />
            </div>
            <div className='absolute top-9 right-[40%] translate-x-[50%] max-w-[103px]'>
              <img src={WorkShopShape} alt='' />
            </div>
          </div>
          <div className='w-6/12'>
            <SGSubHead chipText='Free Workshop' mainHeading='Join Our Free Workshops' subHeading='Edhen an unknown printer took a galley of type and scrambled it to make a type specimen bookas survived not only five centuries.Edhen an unknown printer took a galley of type and scrambled.'
            />
            <div className='flex gap-x-[30px] mt-[25px]'>
              <div>
                <div className='flex items-center gap-x-5 mb-[18px]'>
                  <div className='flex items-center justify-center rounded-full h-[60px] min-w-[60px] bg-[#FF6666] border border-[#CE3B3B] shadow-[5px_5px_0_rgba(0,0,0,0.25)]'>
                    <CertificateIcon />
                  </div>
                  <p className='font-poppins text-xl font-semibold'>
                    Smooth Virtual Live Classes
                  </p>
                </div>
                <p className='text-grey300 leading-[28px]'>
                  Edhen an unknown printer Rtook galley of type scrambled.
                </p>
              </div>
              <div>
                <div className='flex items-center gap-x-5 mb-[18px]'>
                  <div className='flex items-center justify-center rounded-full h-[60px] min-w-[60px] bg-[#1BCBE3] border border-[#019AAF] shadow-[5px_5px_0_rgba(0,0,0,0.25)]'>
                    <EducationCap />
                  </div>
                  <p className='font-poppins text-xl font-semibold'>
                    99% Graduation Complete
                  </p>
                </div>
                <p className='text-grey300 leading-[28px]'>
                  Edhen an unknown printer Rtook galley of type scrambled.
                </p>
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
