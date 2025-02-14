import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const Services = () => {
  return (
    <section className="bg-[#4B3619] lg:px-[2rem] px-[1.5rem] pt-[1.5rem] relative">
      <div className="absolute -top-[0rem] right-[1rem]">
             {/* <img src="./leaf-2.png" alt="" className="w-[10rem] h-[10rem] rotate-[-80deg]"/>  */}
             <img src="./leaf2.png" alt="" className="w-[10rem] h-[10rem] rotate-[-80deg] opacity-5"/> 
      </div>
      <div className="">
        <Link
          heading=" Facial &nbsp; massage"
          // subheading="Learn what we do here"
          imgSrc="https://img.freepik.com/free-photo/young-woman-lying-cosmetologist-s-table-rejuvenation-procedure_343596-63.jpg?ga=GA1.1.825982305.1739535259"
          href="/services"
        />
        <Link
          heading="Pedicure"
          // subheading="We work with great people"
          imgSrc="https://i.pinimg.com/474x/ed/c6/11/edc61171fb8f06bc04ce116652ef2ffa.jpg"
          href="/services"
        />
        <Link
          heading="Hair &nbsp; styling"
          // subheading="Our work speaks for itself"
          imgSrc="https://i.pinimg.com/236x/86/2e/65/862e6590a4a5fbb086afadfa3f9f8550.jpg"
          href="/services"
        />
        {/* <Link
          heading="Body &nbsp; Scrub"
          subheading="We want cool people"
          imgSrc="/home1.jpg"
          href="#"
        /> */}
        <Link
          heading="Body &nbsp; Massage"
          // subheading="Incase you're bored"
          imgSrc="https://i.pinimg.com/236x/f6/28/f6/f628f6131c4debd730bd452b4cfe2690.jpg"
          href="/services"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-white opacity-[.5] py-4 transition-colors duration-500 hover:border-neutral-50 hover:opacity-[1] md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block lg:text-[4rem] text-[1.8rem] font-bold text-white opacity-[.5] transition-colors duration-500 group-hover:text-neutral-50 group-hover:opacity-[1] md:text-6xl"
        >
          <span className="text-[#d5a654]">✦</span>
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-[100] h-30 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};