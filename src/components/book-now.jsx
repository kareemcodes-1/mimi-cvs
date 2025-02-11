import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router';

const BookNow = () => {
  return (
    <section className='bg-[#4B3619] lg:h-[25rem] pt-[5rem] pb-[7rem] lg:px-[2rem] px-[1.5rem]'>
        <div className='text-center mx-auto flex flex-col gap-[1.2rem]'>
        <h2 className='lg:text-[4rem] text-[2.5rem] !text-white golo'>Book Your <span className="relative">
          Appointment
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute -left-2 -right-2 -top-[1.2rem] bottom-0 translate-y-1"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="#d5a654"
              strokeWidth="3"
            />
          </svg>
        </span>{" "} Today!</h2>
        <p className='text-[1rem] lg:w-[600px] w-full text-center flex items-center justify-center mx-auto !text-white opacity-[.9]'>Don’t wait to experience the Bellavida Spa difference. Schedule your appointment online now and embark on a journey of beauty and relaxation. Let us help you discover your most radiant self.</p>
        <Link to={'https://wa.link/8e1ifh'} rel='external' target='_blank' className='cart-btn-2 !golo !mx-auto'>Book now</Link>
        </div>
    </section>
  )
}

export default BookNow