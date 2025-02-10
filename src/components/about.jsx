const About = () => {
  return (
    <div className='lg:px-[2rem] px-[1.5rem] py-[4rem]'>
         <div className="lg:grid grid-cols-2 gap-[2rem]">
         <div className="flex flex-col items-start lg:mb-0 mb-[2rem]">
             <h4 className="text-[1.7rem] text-[#d5a654]">Welcome to bellavida spa</h4>

             <h2 className="golo lg:text-[3.9rem] text-[2.5rem]">Your Sanctuary for Beauty and Relaxation​</h2>

             <p className="mt-[1.5rem] text-[#98623C]">At Bellavida Spa, we believe that true beauty lies in a harmonious blend of inner peace and outer radiance. Our mission is to provide a serene and luxurious environment where you can indulge in top-tier beauty and wellness services.</p>

             <a href="/about" className='cart-btn golo !mt-[1.2rem]'>Learn more</a>
         </div>

         <div  className="lg:h-[30rem] h-[25rem]">
         <img src="/home1.jpg" alt="" className="h-full w-full object-cover rounded-[.5rem] magic-radius-2 lg:rotate-[-5deg]"/>
          </div>

         </div>
    </div>
  )
}

export default About