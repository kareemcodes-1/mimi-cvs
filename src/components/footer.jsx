import { Facebook, Instagram } from "lucide-react"
import { Link } from "react-router"

const Footer = () => {
  return (
    <footer className="lg:px-[2rem] px-[1.5rem] text-center relative py-[1rem] pt-[1.5rem]">

        <div className="flex lg:flex-row flex-col lg:items-center items-start lg:gap-[10rem] pb-[2rem]">
        <div>
            <Link to={'/'}>
                 <img src="./logo-result.png" alt="" className="lg:h-[15rem] w-[5rem] h-[10rem] object-cover"/>
            </Link>
         </div>


         <div className="lg:grid flex flex-col grid-cols-3 lg:gap-[1rem] gap-[2.5rem]">
         <div className="flex flex-col items-start gap-[.5rem]">
            <h2 className="text-[2rem]">Useful Links</h2>
            <Link to="/home" className="text-[1.2rem]">Home</Link>
            <Link to="/about"  className="text-[1.2rem]">About</Link>
            <Link to="/services"  className="text-[1.2rem]">Services</Link>
            <Link to="/works"  className="text-[1.2rem]">Our works</Link>
            <Link to="/contact"  className="text-[1.2rem]">Contact</Link>
         </div>

         <div className="flex flex-col gap-[.5rem] items-start">
            <h2 className="text-[2rem]">Socials</h2>
            <Link to=""  className="text-[1.2rem]">Facebook</Link>
            <Link to="https://www.instagram.com/bellavidaspa_ng/" target="_blank"  className="text-[1.2rem]">Instagram</Link>
            <Link to="https://wa.me/2348120572507" target="_blank"  className="text-[1.2rem]">Whatsapp</Link>
         </div>

         
         <div className="flex flex-col gap-[.5rem] items-start">
            <h2 className="text-[2rem]">Contact Us</h2>
            <Link to="tel:+2348120572507"  className="text-[1.2rem]">+2348120572507</Link>
            <Link to="mailto:bellavidaspang@gmail.com" target="_blank"  className="text-[1.2rem]">bellavidaspang@gmail.com</Link>
            <Link to="https://maps.app.goo.gl/bmVPRr3XXM5KoPdN6?g_st=ic" target="_blank"  className="text-[1.2rem] flex items-start text-start">3, John Olugbo Street, Ikeja, <br /> Lagos Nigeria.</Link>
         </div>
         </div>
        </div>


         {/* <div className="text-center flex flex-col items-center justify-center mx-auto">
         <span className="text-[1.5rem] text-white">Address: 128 City Road, London EC1V 2NX</span>
         <span className="text-[1.5rem] text-white">Email: beauty@serinitaslondon.co.uk</span>
         <span className="text-[1.5rem] text-white">Phone: +447903224721</span>

         <div>
             <Facebook />
             <Instagram />
         </div>
         </div> */}

         <div className="border-t border-[#4b3619c2] golo pt-[.7rem] text-[#4b3619c2]">
              @2025 Bellavida Spa. All Rights Reserved
         </div>
    </footer>
  )
}

export default Footer