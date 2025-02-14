import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const FAQ = () => {
  return (
    <div className="py-[2rem] lg:px-[2rem] px-[1.5rem]">
      <div className="lg:grid grid-cols-2 gap-[2rem]">
        <div className="flex flex-col  lg:order-last order-first mt-[1rem] mb-[2.5rem]">
          <h4 className="lg:text-[1.7rem] text-[1.3rem] text-[#d5a654]">
            Why choose Bellavida Spa
          </h4>

          <h2 className="golo lg:text-[3.7rem] text-[2.5rem]">
            Here's why you should choose us.​
          </h2>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-[#98623c79]">
              <AccordionTrigger className="golo text-[1.3rem] text-[#d5a654] !no-underline">
                Experienced Professionals
              </AccordionTrigger>
              <AccordionContent className="text-[#98623C] golo text-[1rem]">
              Whether you’re here for a facial, massage, manicure, or any other treatment, you can trust our certified professionals to make your experience both relaxing and rejuvenating
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-[#98623c79]">
              <AccordionTrigger className="golo text-[1.3rem] text-[#d5a654] !no-underline">
                Affordable Prices
              </AccordionTrigger>
              <AccordionContent className="text-[#98623C] golo text-[1rem]">
              We are committed to providing excellent value, so you can indulge in top-notch services that enhance your well-being at a price that fits your budget.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-[#98623c79]">
              <AccordionTrigger className="golo text-[1.3rem] text-[#d5a654] !no-underline">
                High Quality Spa Services
              </AccordionTrigger>
              <AccordionContent className="text-[#98623C] golo text-[1rem]">
              We are dedicated to offering only the highest quality spa services to ensure you receive the best experience possible. From luxurious facials to soothing massages, each treatment is performed with attention to detail, using premium products and advanced techniques
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-[#98623c79]">
              <AccordionTrigger className="golo text-[1.3rem] text-[#d5a654] !no-underline">
                Unlimited Happy Clients
              </AccordionTrigger>
              <AccordionContent className="text-[#98623C] golo text-[1rem]">
              We take pride in the countless satisfied clients who trust us to enhance their beauty and well-being. Our spa is built on a foundation of excellent service, personalized care, and outstanding results, which is why our clients keep coming back.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="lg:h-[30rem] h-[25rem] lg:order-first order-last mb-[1rem]">
          <img
            src="/home2.jpg"
            alt=""
            className="h-full w-full object-cover rounded-[.5rem] magic-radius"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
