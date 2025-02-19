import { Badge } from "./ui/badge"

const About = () => {
  return (
     <section className=" mt-[10rem] lg:mx-0 mx-[1rem]">
          <div className="mx-auto flex flex-col items-center justify-center text-center gap-[2rem]">
               <Badge className={'pill'}><span className="text-[#6056ff]">✦</span>About us</Badge>

               <div className="">
                   <p className="lg:text-[2.2rem] text-[2rem] inter font-medium lg:w-[1200px] w-full">We offer a reliable and secure certificate verification system that has successfully helped countless students, educational institutions, universities and organizations ensure the authenticity of certificates. 
                    <span className="lg:block hidden">By providing quick and accurate verifications, Mimi CVS has become a trusted solution for verifying academic credentials, professional qualifications.</span></p>
               </div>
          </div>
     </section>
  )
}

export default About