import SwiperSlider from "./swiper/swiper"
import { Badge } from "./ui/badge"


const Testimonials = () => {
  return (
    <div className="lg:mt-[7rem] mt-[5rem] lg:mx-[3rem] mx-[1rem]">
        <div className="flex items-center flex-col text-center">
        <Badge className={'pill !mx-0 mb-[1rem] hover:bg-none'}><span className="text-[#6056ff]">✦</span>Testimonials</Badge>
        <h2 className="lg:text-[3rem] text-[2rem] font-medium lg:w-[900px] w-full">Thousands of <span className="text-[#6056ff]">students</span> have already seen captivating results</h2>
        <p className="text-[#868a97] mt-[1rem]">From glowing facial massages to relaxing spa treatments, see how we've helped people look and feel their best.</p>
        </div>

           <SwiperSlider />
    </div>
  )
}

export default Testimonials