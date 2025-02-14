import { Link } from 'react-router'
import BookNow from '../components/book-now'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Testimonials from '../components/testimonials'
import React from 'react'
import toast from 'react-hot-toast'

const ContactPage = () => {

  async function sendMail (formData){
     const name = formData.get('name');
     const email = formData.get('email');
     const number = formData.get('number');
     const message = formData.get('message');

     if(!name || !email || !number || !message){
         if(!name){
            toast.error('Name is required');
         }
         if(!email){
          toast.error('Email is required');
       }
       if(!number){
        toast.error('Number is required');
       }
       if(!message){
         toast.error('Message is required');
        }
        return;
     }

      const data = {
          name,
          email,
          number,
          message
      }

      toast.success('Message Sent!');  
  }

  return (
    <>
    <div className='bg-[#FFE4C4]'>
    <Navbar />

    <div className='lg:px-[2rem] px-[1rem]'>
       <div className='lg:grid flex flex-col grid-cols-2 gap-[2rem]'>
          <div  className="lg:h-[30rem] h-[25rem]">
          <img src="https://img.freepik.com/free-photo/closeup-young-woman-enjoying-head-massage-beauty-treatment-spa_637285-2183.jpg?ga=GA1.1.825982305.1739535259" alt="" className="h-full w-full object-cover rounded-[.5rem]"/>
         </div>

         <div>
         <h4 className="text-[1.7rem] text-[#d5a654]">Contact Us</h4>
         <h2 className="golo lg:text-[3.5rem] text-[2.5rem]">Send us a message?​</h2>
         <form class="w-full max-w-[35rem] flex flex-col gap-[1.5rem]" action={sendMail}>
              <div class="flex items-center border-b border-[#d5a654] py-2">
                <input className="placeholder:text-[#ac5e3cd1] appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none lg:text-[2rem] text-[1.7rem]" type="text" placeholder="Your name?" name='name' />
               </div>

               <div class="flex items-center border-b border-[#d5a654] py-2">
                <input className="placeholder:text-[#ac5e3cd1] appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none lg:text-[2rem] text-[1.7rem]" type="email" placeholder="Your email?" name='email' />
               </div>

               <div class="flex items-center border-b border-[#d5a654] py-2">
                <input className="placeholder:text-[#ac5e3cd1] appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none lg:text-[2rem] text-[1.7rem]" type="number" placeholder="Your number?" name='number' />
               </div>

               
               {/* <div class="flex items-center border-b border-[#d5a654] py-2">
                <input className="placeholder:text-[#ac5e3cd1] appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none text-[2rem]" type="text" placeholder="How many seats?" aria-label="Full name" />
               </div> */}

               <div class="flex items-center border-b border-[#d5a654] py-2">
                <textarea className="placeholder:text-[#ac5e3cd1] appearance-none bg-transparent border-none w-full mr-3  py-1 px-2 leading-tight focus:outline-none lg:text-[2rem] text-[1.7rem] resize-none" placeholder="Message" name='message'></textarea>
               </div>

               <button type='submit' className='cart-btn'>Book now</button>
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