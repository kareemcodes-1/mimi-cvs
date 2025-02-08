import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion"
  

const FAQ = () => {
  return (
    <div className='py-[2rem] lg:px-[2rem] px-[1.5rem]'>
        <div className="lg:grid grid-cols-2 gap-[2rem]">

       <div className="flex flex-col  lg:order-last order-first mt-[1rem] mb-[2.5rem]">
             <h4 className="lg:text-[1.7rem] text-[1.3rem] text-[#d5a654]">Why choose Bellavida Spa</h4>

             <h2 className="golo lg:text-[3.7rem] text-[2.5rem]">Here's why you should choose us.​</h2>

             <Accordion type="single" collapsible>
  <AccordionItem value="item-1" className="border-[#98623c79]">
    <AccordionTrigger className="golo text-[1.3rem] text-[#d5a654] !no-underline">Experienced Professionals</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2" className="border-[#98623c79]">
    <AccordionTrigger className="golo text-[1.3rem] text-[#d5a654] !no-underline">Premium Quality Products</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-3" className="border-[#98623c79]">
    <AccordionTrigger className="golo text-[1.3rem] text-[#d5a654] !no-underline">Personalized Approach</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-4" className="border-[#98623c79]">
    <AccordionTrigger className="golo text-[1.3rem] text-[#d5a654] !no-underline">Convenient Online Booking</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

         </div>

        <div  className="lg:h-[30rem] h-[25rem] lg:order-first order-last mb-[1rem]">
         <img src="/home2.jpg" alt="" className="h-full w-full object-cover rounded-[.5rem]"/>
          </div>



         </div>
    </div>
  )
}

export default FAQ