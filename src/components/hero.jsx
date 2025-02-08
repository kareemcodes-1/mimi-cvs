

const Hero = () => {
    return (
      <div className=" flex items-center justify-center relative p-[1rem]">
             <div className="absolute -top-[10rem] right-[1rem] lg:block hidden">
             {/* <img src="./leaf-2.png" alt="" className="w-[10rem] h-[10rem] rotate-[-80deg]"/>  */}
             <img src="./leaf2.png" alt="" className="lg:w-[10rem] w-[8rem] lg:h-[10rem] h-[8rem] rotate-[-80deg]"/> 
             </div>
  
  
             <div className="hero-container container-1">
          <div className="flex flex-col gap-[.7rem] lg:absolute right-[3rem] top-[0rem]">
            <span id="hero-desc" className="lg:block hidden text-[#98623C]">
              NEW
            </span>
            <h2 id="hero-desc" className="text-[2rem]">
              Hyaluronic Booster
            </h2>
            <div id="hero-desc">
              <p className="lg:w-[270px] text-[#98623C]">
                Browse our exquisite collection of <br />
                skincare essentials and start your <br />
                journey to flawless, radiant skin today!
              </p>
            </div>
          </div>
  
          <div className="hero-img lg:mt-0 mt-[1rem] relative lg:ml-[-5rem] ml-0 flex items-center justify-center">
            <div className="circle" id="hero-img">
              <img
                src="/home.png"
                alt=""
                className="h-[350px] object-cover"
              />
            </div>
            <h1 className="absolute left-[4rem] top-0 text-[2rem] text-[#d5a654]" id="hero-img">
              ✦
            </h1>
  
            <div
              id="hero-img"
              className="hero-img-small border-[4px] border-[#d5a654]  lg:w-[7rem] lg:h-[7rem] w-[5.5rem] h-[5.5rem] rounded-[50%] absolute lg:top-[5rem] top-[0] lg:right-[0rem] right-[-1rem]"
            >
              <img src="https://img.freepik.com/free-photo/african-american-woman-receiving-relaxing-massage-spa_144627-32958.jpg?t=st=1738844773~exp=1738848373~hmac=da8e2b07dc6813d29ce398e216c2bd653b6d5cf561f408505eed72a3dbfd42d4&w=826" className="w-full h-full rounded-[50%] object-cover" alt=""  />
            </div>
          </div>
  
          <div className="lg:text-[6rem] text-[3rem] flex items-center flex-col justify-center lg:leading-[6.5rem] leading-[5rem]  text-center z-[10000]">
            <div className="z-[10000]">
            <h2 id="hero-title">Relax.&nbsp;Refresh.</h2>{" "}
            {/* <h2 id="hero-title"></h2> */}
            </div>
  
            <div className="lg:text-[6rem] text-[3rem] lg:flex text-center">
            <h2 id="hero-title">Recharge.</h2>
          </div>
          </div>
  
          {/* <div
            className="lg:block hidden absolute left-[5rem] bottom-[0rem]"
            id="hero-desc"
          >
            <span className="">PARABEN</span>
            <p>Free</p>
          </div> */}
        </div>
  
           <div className="absolute left-[-1rem] lg:-bottom-[5rem] -bottom-[1.5rem]">
             {/* <img src="./leaf-2.png" alt="" className="w-[12rem] h-[25rem] rotate-[80deg] object-contain"/>  */}
             <img src="./leaf2.png" alt="" className="lg:w-[12rem] w-[10rem] lg:h-[25rem] h-[10rem] rotate-[80deg] object-contain"/> 
             </div>
      </div>
    )
  }
  
  export default Hero
  