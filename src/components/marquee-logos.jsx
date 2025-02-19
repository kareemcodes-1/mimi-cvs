import React from 'react'
import Marquee from 'react-fast-marquee'

const MarqueeLogos = () => {
  return (
    <div className='mt-[6rem]'>
       <div className='text-center text-[1rem] text-[#868a97]'>In Partnership with</div>
      <div className='mt-[5rem] grid lg:grid-cols-4 grid-cols-2 mx-auto place-items-center lg:gap-0 gap-[2rem]'>
        <div className='w-[10rem] h-[10rem]'>
        <img src="https://nigerianfinder.com/wp-content/uploads/2018/02/Uniben-Logo.png" alt="" className='w-full h-full object-cover opacity-[.5]'/>
        </div>

        <div className='w-[10rem] h-[10rem]'>
        <img src="https://i0.wp.com/niranadedokun.com/wp-content/uploads/2023/07/JAMB-logo.png?fit=1280%2C720&ssl=1" alt="" className='w-full h-full object-cover opacity-[.5]'/>
        </div>

        <div className='w-[10rem] h-[10rem]'>
        <img src="https://th.bing.com/th/id/OIP.lVGLVHsxDUDs9xqtdThLYQHaJf?w=144&h=185&c=7&r=0&o=5&pid=1.7" alt="" className='w-full h-full object-contain opacity-[.5]'/>
        </div>

        <div className='w-[10rem] h-[10rem]'>
        <img src="https://th.bing.com/th/id/OIP.zfKKkigO2Xjj0DJhfN7oYQHaHA?w=174&h=180&c=7&r=0&o=5&pid=1.7" alt="" className='w-full h-full object-cover opacity-[.5]'/>
        </div>
    </div>
    </div>
  )
}

export default MarqueeLogos