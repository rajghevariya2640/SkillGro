import React from 'react'
import SGContainer from '../../shared/SGContainer'
import People from '../../assets/image/png/subscribe-people.png'
import Shape1 from '../../assets/image/png/subscribe-shape1.png'
import Shape2 from '../../assets/image/png/subscribe-shape2.png'
import Shape3 from '../../assets/image/png/subscribe-shape3.png'
import SGInput from '../../shared/SGInput'
import SGButton from '../../shared/SGButton'

const Subscribe = () => {
  return (
    <div className='bg-primary overflow-hidden'>
      <SGContainer className='relative pt-[92px] pb-14 flex gap-x-5'>
        <div className='items-end -mb-14 hidden md:flex'>
          <div className='relative'>
            <div className='absolute bottom-0 left-1/2 translate-x-[-50%] w-full max-w-[294px] z-[2]'>
              <img src={People} alt='' />
            </div>
            <div className='absolute -top-24 right-20 z-[1]'>
              <img src={Shape2} alt='' />
            </div>
            <div className='w-full max-w-[428px]'>
              <img src={Shape1} alt='' />
            </div>
          </div>
        </div>
        <form method='get' className='flex items-end gap-x-2.5 relative z-10 flex-wrap gap-y-7'>
          <div className='max-w-[535px]'>
            <p className='text-2xl md:text-4xl text-white'>
              Want to stay <b className='text-white'>informed</b> about new <b className='text-white'>courses & study?</b>
            </p>
            <SGInput
              variant='primary'
              placeholder='Type your e-mail'
              className='mt-6'
              type='email'
              required />
          </div>
          <SGButton variant='secondary' type='submit' className='py-[21px] border-blue300 shadow-grey900 px-10'>
            Subscribe now
          </SGButton>
        </form>
        <div className='absolute right-5 top-0 bottom-0'>
          <img src={Shape3} alt='' />
        </div>
      </SGContainer>
    </div>
  )
}

export default Subscribe
