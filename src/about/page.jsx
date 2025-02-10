import Testimonials from "../components/testimonials";
import Navbar from "../components/navbar";
import React from "react";
import BookNow from "../components/book-now";
import Footer from "../components/footer";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <>
      <div className="bg-[#FFE4C4]">
        <Navbar />

        <div className="absolute top-[-1.5rem] right-[1rem] lg:block hidden">
             <img src="./leaf2.png" alt="" className="lg:w-[10rem] w-[8rem] lg:h-[10rem] h-[8rem] rotate-[-80deg]"/> 
        </div>

        <div className="lg:px-[2rem] px-[1rem]">
          <div className="lg:grid flex flex-col grid-cols-2 gap-[1rem]">
            <div class="relative lg:h-[25rem] lg:w-[28rem] w-[18rem] h-[20rem]">
              <h1
                className="absolute lg:right-[-7rem] right-[-5rem] top-0 text-[2rem] text-[#d5a654]"
                id="hero-img"
              >
                ✦
              </h1>
              <img
                src="/home1.jpg"
                alt="First Image"
                class="h-full w-full object-cover rounded-[.5rem]"
              />

              <div class="absolute right-[-5rem] top-[10rem] lg:h-[20rem] h-[12rem] w-[18rem]">
                <img
                  src="/home1.jpg"
                  alt="Second Image"
                  class="h-full w-full object-cover rounded-[.5rem] border-[4px] border-[#d5a654]"
                />
              </div>
            </div>

            <div className="py-[2rem]">
              <h4 className="text-[1.7rem] text-[#d5a654]">About Us</h4>
              <h2 className="golo lg:text-[3.9rem] text-[2.5rem]">
                Unleashing Your &nbsp;
                <span className="relative">
                  Natural Beauty
                  <svg
                    viewBox="0 0 286 73"
                    fill="none"
                    className="absolute -left-2 -right-2 -top-[2rem] bottom-0 translate-y-1"
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
                  </svg>{" "}
                </span>{" "}
                with Passion​
              </h2>
              <p className="mt-[1.5rem] text-[#98623C]">
                MDPro Makeover & Beauty Spa is your trusted beauty destination,
                dedicated to offering a wide range of services that cater to all
                aspects of beauty and wellness. Our team of certified beauty
                experts and therapists are passionate about bringing out the
                best version of you, offering services ranging from professional
                makeovers to holistic spa treatments.
              </p>
            </div>
          </div>

          <div className="lg:grid flex flex-col grid-cols-2 gap-[2rem] py-[3rem]">
            <div>
              <h4 className="text-[1.7rem] text-[#d5a654]">Our Direction</h4>
              <h2 className="golo lg:text-[3.9rem] text-[2.5rem]">
                Empowering Beauty, Elevating Wellness.
              </h2>

              <div className="flex items-center gap-[1.5rem] mt-[1.5rem]">
                <div className="bg-white shadow-sm rounded-full text-[#98623C] w-[5.5rem] h-[3rem] flex items-center justify-center text-[1.2rem] golos font-medium hover:bg-[#4B3619] hover:text-white transition">
                  01
                </div>
                <div>
                  <h3 className="greatvibes text-[2rem] text-[#4B3619]">
                    Our Vision
                  </h3>
                  <p className="text-[#98623C]">
                    To be the leading beauty and wellness destination, where
                    every individual feels empowered, beautiful, and rejuvenated
                    through exceptional care.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-[1.5rem] mt-[1.5rem]">
                <div className="bg-white shadow-sm rounded-full text-[#98623C] w-[5.5rem] h-[3rem] flex items-center justify-center text-[1.2rem] golos font-medium hover:bg-[#4B3619] hover:text-white transition">
                  02
                </div>
                <div>
                  <h3 className="greatvibes text-[2rem] text-[#4B3619]">
                    Our Mission
                  </h3>
                  <p className="text-[#98623C]">
                    To be the leading beauty and wellness destination, where
                    every individual feels empowered, beautiful, and rejuvenated
                    through exceptional care.
                  </p>
                </div>
              </div>
            </div>

            {/* <div  className="lg:h-[30rem] h-[25rem]"> */}
            {/* <img src="/home1.jpg" alt="" className="h-full w-full object-cover rounded-[.5rem]"/> */}
            <video
              src="/bella.mp4"
              controls
              autoPlay
              loop
              preload="true"
              className="h-[30rem] w-full object-cover rounded-[.5rem]"
            ></video>
            {/* </div> */}
          </div>
        </div>
      </div>
      <Testimonials />
      <BookNow />
      <Footer />
    </>
  );
};

export default AboutPage;
