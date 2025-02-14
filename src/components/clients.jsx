import React from 'react'

const Clients = () => {
  return (
    <div className='bg-[#4B3619]'>
        <div className='lg:grid flex flex-col grid-cols-2 place-items-center'>
            <div className='flex items-center flex-col border w-full  p-[1rem]'>
                <h2 className='text-white text-[6rem] golo'>6</h2>
                <p className='text-white text-center text-[1.2rem]'>Top Notch Services</p>
            </div>

            <div className='flex items-center flex-col border w-full  p-[1rem]'>
                <h2 className='text-white text-[6rem] golo'>3</h2>
                <p className='text-white text-center text-[1.2rem]'>Years Of Service</p>
            </div>

            <div className='flex items-center flex-col border w-full  p-[1.5rem]'>
                <h2 className='text-white text-[6rem] golo'>99%</h2>
                <p className='text-white text-center text-[1.2rem]'>Positive Feedback</p>
            </div>

            <div className='flex items-center flex-col border w-full  p-[1.5rem]'>
                <h2 className='text-white text-[6rem] golo'>800<span className='text-[#d5a654]'>+</span></h2>
                <p className='text-white text-center text-[1.2rem]'>Clients</p>
            </div>
        </div>
    </div>
  )
}

export default Clients