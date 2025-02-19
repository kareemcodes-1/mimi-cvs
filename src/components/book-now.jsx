import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router';

const BookNow = () => {
  return (
    <section className='pill lg:w-[95%] w-[95%] lg:mx-auto mx-[1rem]  mt-[5rem] !bg-[#fff] '>
        <div className='flex items-center flex-col text-center justify-center p-[2rem] gap-[1rem]'>
             <div>
             <h2 className='lg:text-[3.5rem] text-[2rem] font-medium'>See your results.</h2>
             <h2 className='lg:text-[3.5rem] text-[2rem] font-medium'>Verify your <span className='text-[#6056ff]'>certificate</span> today!</h2>
             </div>
             <p className='text-[1rem] text-center lg:w-[800px] text-[#868a97]'>Join thousands of students, institutions, and organizations already using Mimi CVS to authenticate certificates quickly and securely. Start your verification process today and ensure the credentials you trust are the real deal!</p>
             <Link className="btn mt-[1.2rem] !p-[1rem]">
                     Get Started
            </Link>
        </div>
    </section>
  )
}

export default BookNow