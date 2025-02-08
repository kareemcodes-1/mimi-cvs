import SwiperSlider from "./swiper/swiper"


const Testimonials = () => {
  return (
    <div className="bg-[#FFE4C4] lg:px-[2rem] px-[1.5rem] pt-[2.5rem] pb-[4rem] relative lg:overscroll-none overflow-hidden">
      <div className="absolute -top-[0rem] lg:right-[1rem] right-0">
             {/* <img src="./leaf-2.png" alt="" className="w-[10rem] h-[10rem] rotate-[-80deg]"/>  */}
             <img src="./leaf2.png" alt="" className="lg:w-[10rem] w-[8rem] lg:h-[10rem] h-[8rem] rotate-[-80deg]"/> 
      </div>
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-[1rem] lg:items-center items-start justify-between w-full z-[10000]">
        <div className="z-[10000]">
          <span className="greatvibes text-[1.7rem] text-[#98623C]">Reviews</span>
        <h2 className="lg:text-[4rem] text-[2.5rem] golo z-[10000]">Hear from our satisified clients</h2>
        </div>
        <p className="text-[#98623C] golo z-[10000]">From glowing bridal makeovers to relaxing spa treatments, see how we've helped people look and feel their best.</p>
        </div>

           <SwiperSlider />

           <div className="absolute left-[-1rem] lg:-bottom-[5rem] -bottom-[3rem]">
             {/* <img src="./leaf-2.png" alt="" className="w-[12rem] h-[25rem] rotate-[80deg] object-contain"/>  */}
             <img src="./leaf2.png" alt="" className="lg:w-[12rem] w-[10rem] lg:h-[25rem] h-[10rem] rotate-[80deg] object-contain"/> 
             </div>
    </div>
  )
}

export default Testimonials