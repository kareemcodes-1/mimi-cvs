import { Swiper, SwiperSlide } from "swiper/react";

// @ts-ignore //
import 'swiper/css';

// @ts-ignore //
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';
import { Star } from "lucide-react";

const SwiperSlider = () => {
  return (
    <>
    <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        loop={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        className="mySwiper mt-[1rem] !hidden lg:block swiper-reviews-lg  z-[10000]"
      >
                  <SwiperSlide>
                      <div className="bg-[#d5a65472]  p-[1.5rem] flex flex-col gap-[1rem] h-[20rem]  z-[10000] rounded-[.5rem]">
                           <img src="" alt="" />
                           <div className="flex space-x-2">
                           {Array.from({length: 4}).map((_, index) => (
                               <Star fill="#eab308" key={index} className="text-yellow-500" size={20} />
                           ))}
                           </div>
                           <h2 className="text-[1.5rem] golo text-white">Ikedieze Precious</h2>
                           <p className="text-white opacity-[.9]">
                            Nice and clean environment, very polite therapist .
                           Definitely doing this again , thank you BVS 😊</p>
                      </div>
                </SwiperSlide>
                <SwiperSlide>
                      <div className="bg-[#d5a65472]  p-[1.5rem] flex flex-col gap-[1rem] h-[20rem] rounded-[.5rem]">
                           <img src="" alt="" />
                           <div className="flex space-x-2">
                           {Array.from({length: 4}).map((_, index) => (
                               <Star fill="#eab308" key={index} className="text-yellow-500" size={20} />
                           ))}
                           </div>
                           <h2 className="text-[1.5rem] golo text-white">Ademola Esther</h2>
                           <p className="text-white opacity-[.9]">I really enjoyed the massage session.
                           Bella vida is a place I will highly recommend anytime.😊</p>
                      </div>
                </SwiperSlide>
                <SwiperSlide>
                      <div className="bg-[#d5a65472] p-[1.5rem] flex flex-col gap-[1rem] h-[20rem] rounded-[.5rem]">
                           <img src="" alt="" />
                           <div className="flex space-x-2">
                           {Array.from({length: 4}).map((_, index) => (
                               <Star fill="#eab308" key={index} className="text-yellow-500" size={20} />
                           ))}
                           </div>
                           <h2 className="text-[1.5rem] golo text-white">Dolapo Adeshina</h2>
                           <p className="text-white opacity-[.9]">The spa is the best I ever seen and have well behaved trained therapist with good manners and always respect their clients 🥰</p>
                      </div>
                </SwiperSlide>
                <SwiperSlide>
                      <div className="bg-[#d5a65472]  p-[1.5rem] flex flex-col gap-[1rem] h-[20rem] rounded-[.5rem]">
                           <img src="" alt="" />
                           <div className="flex space-x-2">
                           {Array.from({length: 4}).map((_, index) => (
                               <Star fill="#eab308" key={index} className="text-yellow-500" size={20} />
                           ))}
                           </div>
                           <h2 className="text-[1.5rem] golo text-white">Ogechukwu Onoh</h2>
                           <p className="text-white opacity-[.9]">Well mannered Therapist. Clean environment and very satisfying service. I will continue to patronize their services.</p>
                      </div>
                </SwiperSlide>
      </Swiper>

      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        modules={[Autoplay]}
        className="mySwiper swiper-reviews-sm mt-[1.5rem]"
      >
                  <SwiperSlide>
                      <div className="bg-[#d5a65472]  p-[1.5rem] flex flex-col gap-[1rem] h-[20rem] rounded-[.5rem]">
                           <img src="" alt="" />
                           <div className="flex space-x-2">
                           {Array.from({length: 4}).map((_, index) => (
                               <Star fill="#eab308" key={index} className="text-yellow-500" size={20} />
                           ))}
                           </div>
                           <h2 className="text-[1.5rem] golo text-white">Ikedieze Precious</h2>
                           <p className="text-white opacity-[.9]">
                            Nice and clean environment, very polite therapist .
                           Definitely doing this again , thank you BVS 😊</p>
                      </div>
                </SwiperSlide>
                <SwiperSlide>
                      <div className="bg-[#d5a65472]  p-[1.5rem] flex flex-col gap-[1rem] h-[20rem] rounded-[.5rem]">
                           <img src="" alt="" />
                           <div className="flex space-x-2">
                           {Array.from({length: 4}).map((_, index) => (
                               <Star fill="#eab308" key={index} className="text-yellow-500" size={20} />
                           ))}
                           </div>
                           <h2 className="text-[1.5rem] golo text-white">Ademola Esther</h2>
                           <p className="text-white opacity-[.9]">I really enjoyed the massage session.
                           Bella vida is a place I will highly recommend anytime.😊</p>
                      </div>
                </SwiperSlide>
                <SwiperSlide>
                      <div className="bg-[#d5a65472] p-[1.5rem] flex flex-col gap-[1rem] h-[20rem] rounded-[.5rem]">
                           <img src="" alt="" />
                           <div className="flex space-x-2">
                           {Array.from({length: 4}).map((_, index) => (
                               <Star fill="#eab308" key={index} className="text-yellow-500" size={20} />
                           ))}
                           </div>
                           <h2 className="text-[1.5rem] golo text-white">Dolapo Adeshina</h2>
                           <p className="text-white opacity-[.9]">The spa is the best I ever seen and have well behaved trained therapist with good manners and always respect their clients 🥰</p>
                      </div>
                </SwiperSlide>
                <SwiperSlide>
                      <div className="bg-[#d5a65472]  p-[1.5rem] flex flex-col gap-[1rem] h-[20rem] rounded-[.5rem]">
                           <img src="" alt="" />
                           <div className="flex space-x-2">
                           {Array.from({length: 4}).map((_, index) => (
                               <Star fill="#eab308" key={index} className="text-yellow-500" size={20} />
                           ))}
                           </div>
                           <h2 className="text-[1.5rem] golo text-white">Ogechukwu Onoh</h2>
                           <p className="text-white opacity-[.9]">Well mannered Therapist. Clean environment and very satisfying service. I will continue to patronize their services.</p>
                      </div>
                </SwiperSlide>
      </Swiper>
    </>
  )
}

export default SwiperSlider