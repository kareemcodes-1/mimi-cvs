import React from 'react'

const Clients = () => {
  return (
    <div className='bg-[#4B3619]'>
        <div className='lg:grid flex flex-col grid-cols-2 place-items-center'>
            <div className='flex items-center flex-col border w-full  p-[1rem]'>
                <h2 className='text-white lg:text-[6rem] text-[4rem] golo'>6</h2>
                <p className='text-white text-center lg:text-[1.2rem] text-[1rem]'>Top Notch Services</p>
            </div>

            <div className='flex items-center flex-col border w-full  p-[1rem]'>
                <h2 className='text-white lg:text-[6rem] text-[4rem] golo'>3</h2>
                <p className='text-white text-center lg:text-[1.2rem] text-[1rem]'>Years Of Service</p>
            </div>

            <div className='flex items-center flex-col border w-full  p-[1.5rem]'>
                <h2 className='text-white lg:text-[6rem] text-[4rem] golo'>99%</h2>
                <p className='text-white text-center lg:text-[1.2rem] text-[1rem]'>Positive Feedback</p>
            </div>

            <div className='flex items-center flex-col border w-full  p-[1.5rem]'>
                <h2 className='text-white lg:text-[6rem] text-[4rem] golo'>800<span className='text-[#d5a654]'>+</span></h2>
                <p className='text-white text-center lg:text-[1.2rem] text-[1rem]'>Clients</p>
            </div>
        </div>
    </div>
  )
}

export default Clients