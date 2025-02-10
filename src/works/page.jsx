import Testimonials from '../components/testimonials'
import Navbar from '../components/navbar'
import React from 'react'
import BookNow from '../components/book-now'
import Footer from '../components/footer'
import { motion } from "framer-motion"

const Works = () => {
  return (
     <>
       <div className='bg-[#FFE4C4]'>
        <Navbar />

        <div className="absolute top-[-1.5rem] right-[1rem] lg:block hidden">
             <img src="./leaf2.png" alt="" className="lg:w-[10rem] w-[8rem] lg:h-[10rem] h-[8rem] rotate-[-80deg]"/> 
        </div>

        <div className='lg:px-[2rem] px-[1rem]'>
            <div className='text-center mx-auto'>
             <h4 className="text-[1.7rem] text-[#d5a654]">Our Works</h4>
             <h2 className="golo lg:text-[3.9rem] text-[2.5rem]">A Glimpse our <span className="relative lg:p-[.5rem]">
          Excellent
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute -left-2 -right-2 -top-[.5rem] bottom-0 translate-y-1"
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
          </svg> </span> work</h2>
             <p className="mt-[1rem] text-center lg:w-[700px] w-full mx-auto text-[#98623C]">MDPro Makeover & Beauty Spa is your trusted beauty destination, dedicated to offering a wide range of services that cater to all aspects of beauty and wellness. Our team of certified beauty experts and therapists are passionate about bringing out the best version of you, offering services ranging from professional makeovers to holistic spa treatments.</p>
             </div>

             <div className='lg:grid flex flex-col grid-cols-3 gap-[1rem] mt-[2rem]'>
                  <article className='h-[30rem]'>
                       <img src="./home1.jpg" alt="" className='h-full w-full object-cover rounded-[.5rem] border-[4px] border-[#d5a654]'/>
                  </article>

                  <article className='h-[30rem]'>
                       <img src="./home1.jpg" alt="" className='h-full w-full object-cover rounded-[.5rem] border-[4px] border-[#d5a654]'/>
                  </article>

                  <article className='h-[30rem]'>
                       <img src="./home1.jpg" alt="" className='h-full w-full object-cover rounded-[.5rem] border-[4px] border-[#d5a654]'/>
                  </article>

                  <article className='h-[30rem]'>
                       <img src="./home1.jpg" alt="" className='h-full w-full object-cover rounded-[.5rem] border-[4px] border-[#d5a654]'/>
                  </article>

                  <article className='h-[30rem]'>
                       <img src="./home1.jpg" alt="" className='h-full w-full object-cover rounded-[.5rem] border-[4px] border-[#d5a654]'/>
                  </article>

                  <article className='h-[30rem]'>
                       <img src="./home1.jpg" alt="" className='h-full w-full object-cover rounded-[.5rem] border-[4px] border-[#d5a654]'/>
                  </article>
             </div>
        </div>
    </div>
    <Testimonials />
    <BookNow />
    <Footer />
     </>
  )
}

export default Works