import React from 'react'
import { Badge } from './ui/badge'
import { Link } from 'react-router'

const Works = () => {
  return (
    <section className='lg:mt-[10rem] mt-[5rem] lg:mx-[4rem] mx-[1rem]'>
           <div className='text-center flex flex-col items-center justify-center mb-[4rem]'>
               <Badge className={'pill !mx-0 mb-[1rem] '}><span className="text-[#6056ff]">✦</span>How it works</Badge>
               <h2 className='lg:text-[3rem] text-[2.5rem] font-medium'>Start Verifying in <span className='text-[#6056ff]'>minutes..</span></h2>
            <p className='lg:w-[500px] w-full text-[#868a97]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laborum reprehenderit soluta ducimus doloribus iste ut doloremque error sequi nulla vel saepe perferendis sed numquam dolor id, facere ab repudiandae.</p>
           </div>
          <div className='flex flex-col gap-[8rem]'>
               <div className='works-1 lg:grid flex flex-col grid-cols-2 lg:gap-[1rem] gap-[2.5rem]'>
                   <div className='flex flex-col items-start gap-[1rem]'>
                   <Badge className={'pill !mx-0 '}><span className="text-[#6056ff]">✦</span>Step 1</Badge>
                   <h1 className='text-[2rem] font-medium text-[#6056ff]'>Sign up for an account</h1>
                   <p className='text-[#868a97]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat eum in eligendi maiores. Incidunt fuga voluptate esse quos distinctio. Repudiandae modi soluta veniam sint iste voluptatum incidunt veritatis obcaecati officiis!</p>
                   <Link className="btn mt-[1.2rem] !p-[1rem]">
                     Get Started
                    </Link>
                   </div>

                   <div className='pill'>
                   <img src="https://github.com/joschan21/quill/blob/master/public/dashboard-preview.jpg?raw=true" alt="" />
                   </div>
               </div>

               <div className='works-2 lg:grid flex flex-col grid-cols-2 lg:gap-[1rem] gap-[2.5rem]'>
                   <div className='flex flex-col items-start gap-[1rem]'>
                   <Badge className={'pill !mx-0'}><span className="text-[#6056ff]">✦</span>Step 2</Badge>
                   <h1 className='text-[2rem] font-medium text-[#6056ff]'>Upload your certificate</h1>
                   <p className='text-[#868a97]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat eum in eligendi maiores. Incidunt fuga voluptate esse quos distinctio. Repudiandae modi soluta veniam sint iste voluptatum incidunt veritatis obcaecati officiis!</p>
                   <Link className="btn mt-[1.2rem] !p-[1rem]">
                                        Get Started
                </Link>
                   </div>

                   <div className='pill'>
                   <img src="https://github.com/joschan21/quill/blob/master/public/file-upload-preview.jpg?raw=true" alt="" className=''/>
                   </div>
               </div>

               <div className='works-3 lg:grid flex flex-col grid-cols-2 lg:gap-[1rem] gap-[2.5rem]'>
                   <div className='flex flex-col items-start gap-[1rem]'>
                   <Badge className={'pill !mx-0'}><span className="text-[#6056ff]">✦</span>Step 3</Badge>
                   <h1 className='text-[2rem] font-medium text-[#6056ff]'>See your results!</h1>
                   <p className='text-[#868a97]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat eum in eligendi maiores. Incidunt fuga voluptate esse quos distinctio. Repudiandae modi soluta veniam sint iste voluptatum incidunt veritatis obcaecati officiis!</p>
                   <Link className="btn mt-[1.2rem] !p-[1rem]">
                                        Get Started
                               </Link>
                   </div>

                   <div className='pill'>
                   <img src="https://github.com/joschan21/quill/blob/master/public/file-upload-preview.jpg?raw=true" alt="" />
                   </div>
               </div>
          </div>
    </section>
  )
}

export default Works