import React from 'react'
import Marquee from 'react-fast-marquee'

const MarqueeCTA = () => {
  return (
    <section className='bg-[#4B3619] py-[1rem]'>
          <Marquee autoFill>
              <div className='text-white text-[2.5rem]'><span>Nail Tech <span className='text-[#d5a654]'>✦</span></span></div>
              <div className='text-white text-[2.5rem]'><span>Barbering <span className='text-[#d5a654]'>✦</span></span></div>
              <div className='text-white text-[2.5rem]'><span>Hair styling <span className='text-[#d5a654]'>✦</span></span></div>
              <div className='text-white text-[2.5rem]'><span>Manicure & Pedicure <span className='text-[#d5a654]'>✦</span></span></div>
              <div className='text-white text-[2.5rem]'><span>Facial Massage <span className='text-[#d5a654]'>✦</span></span></div>
          </Marquee>
    </section>
  )
}

export default MarqueeCTA