import React from 'react'
import SGSubHead from '../../shared/SGSubHead'
import SGContainer from '../../shared/SGContainer'
import { BookIcon, CertificateIcon, EducationCap, FeatureIcon } from '../../assets/image/svg/Icon'

const Feature = () => {

  const singleFeature = [
    {
      icon: <EducationCap /> ,
      label: 'Expert Tutors',
      description: 'when an unknown printer took a galley offe type and scrambled makes.',
      colorClass: 'bg-[#F1FDFF] border-[#C9E4E9] shadow-[#C9E4E9]',
      iconClass: 'bg-[#1BCBE3]'
    },
    {
      icon: <BookIcon/>,
      label: 'Effective Courses',
      description: 'when an unknown printer took a galley offe type and scrambled makes.',
      colorClass: 'bg-[#EDEAFF] border-[#C8C1ED] shadow-[#D9D5F1]',
      iconClass: 'bg-[#5751E1]'
    },
    {
      icon: <CertificateIcon/>,
      label: 'Earn Certificate',
      description: 'when an unknown printer took a galley offe type and scrambled makes.',
      colorClass: 'bg-[#FFF7E2] border-[#EBE0C4] shadow-[#E5DECB]',
      iconClass: 'bg-[#FFC224]'
    },
  ]

  return (
    <div className='pt-[110px] pb-[120px]'>
      <SGContainer>
        <SGSubHead
          center={true}
          chipText='Our Top Features'
          mainHeading='Achieve Your Goal With SkillGrow'
          subHeading='when an unknown printer took a galley of type and scrambled make specimen book has survived not only five centuries'
          subHeadClass='max-w-[512px] text-center' />
        <div className='flex gap-x-[30px] mt-10'>
          {singleFeature?.map((feature, featureIndex) => {
             return (
           
               <div className={`w-4/12 relative py-[41px] px-[53px] border shadow-common rounded-[20px] hover:shadow-none duration-200 ${feature?.colorClass}`}>
                 <div className='absolute top-[22px] right-[29px]'>
                   <FeatureIcon />
                 </div>
                 <div className='flex items-center gap-x-[15px]'>
                   <div className={`h-[70px] w-[70px] rounded-full flex items-center justify-center ${feature?.iconClass}`}>
                     {feature?.icon}
                   </div>
                   <h6 className='font-semibold text-[22px] font-poppins'>{feature?.label}</h6>
                 </div>
                 <p className='mt-[18px] leading-[27px] text-blue100'>{feature?.description}</p>
               </div>
             )
           })}
        </div>
      </SGContainer>
    </div>
  )
}

export default Feature
