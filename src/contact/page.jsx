import BookNow from '../components/book-now'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Testimonials from '../components/testimonials'
import React from 'react'

const ContactPage = () => {
  return (
    <>
    <div className='bg-[#FFE4C4] rounded-[]'>
    <Navbar />

    <div className='lg:px-[2rem] px-[1rem]'>
       <div className='lg:grid flex flex-col grid-cols-2 gap-[2rem]'>
          <div  className="lg:h-[30rem] h-[25rem]">
          <img src="/home1.jpg" alt="" className="h-full w-full object-cover rounded-[.5rem]"/>
         </div>

         <div>
         <h4 className="text-[1.7rem] text-[#d5a654]">Contact Us</h4>
         <h2 className="golo lg:text-[3.9rem] text-[2.5rem]">Send us an email?​</h2>
         <form class="w-full max-w-[35rem] flex flex-col gap-[1.5rem]" id="form">
              <div class="flex items-center border-b border-[#d5a654] py-2">
                <input className="placeholder:text-[#ac5e3cd1] appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none lg:text-[2rem] text-[1.7rem]" type="text" placeholder="Your name?" aria-label="Full name" />
               </div>

               <div class="flex items-center border-b border-[#d5a654] py-2">
                <input className="placeholder:text-[#ac5e3cd1] appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none lg:text-[2rem] text-[1.7rem]" type="email" placeholder="Your email?" aria-label="Email" />
               </div>

               <div class="flex items-center border-b border-[#d5a654] py-2">
                <input className="placeholder:text-[#ac5e3cd1] appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none lg:text-[2rem] text-[1.7rem]" type="text" placeholder="Your number?" aria-label="Full name" />
               </div>

               
               {/* <div class="flex items-center border-b border-[#d5a654] py-2">
                <input className="placeholder:text-[#ac5e3cd1] appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none text-[2rem]" type="text" placeholder="How many seats?" aria-label="Full name" />
               </div> */}

               <div class="flex items-center border-b border-[#d5a654] py-2">
                <input className="placeholder:text-[#ac5e3cd1] appearance-none bg-transparent border-none w-full mr-3  py-1 px-2 leading-tight focus:outline-none lg:text-[2rem] text-[1.7rem]" type="text" placeholder="What time?" aria-label="Full name" />
               </div>

               <button type='button' className='cart-btn'>Book now</button>
        </form>
         </div>
       </div>
       </div>
     </div>
     <Testimonials />
     <BookNow />
     <Footer />
     </>
  )
}

export default ContactPage