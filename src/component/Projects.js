import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import stud1 from "../assest/image.png"
import stud2 from "../assest/portfolio2.png"
// Import Swiper styles
import "swiper/css"
import 'swiper/css/navigation';
import './style.css';
// import required modules
import { Navigation } from 'swiper/modules';

const Projects=()=>{
  return (
    <div className='mx-auto -mt-20 ' id='project'>
      <div className='text-center'>
        
     <h2 className='text-4xl font-semibold text-center'>Projects</h2>
     <p className='text-richblack-400 mt-3'>Most recent Work</p>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
           <div className='max-w-[230px]'>
           <SwiperSlide >
        <div className='flex max-w-[930px] mt-14  justify-evenly '>
               {/*image*/}
               <div>
                <img
                    src={stud1}
                    style={{ width: '1500px' ,height:"200px"}}
                    className='mt-5'
                />

               </div>
               {/*right part*/}
               <div>
                   <h2 className='text-2xl font-semibold flex  ml-20'>StudyNotion</h2>
                   <p className='text-richblack-400  ml-20 mt-3 text-start'><span className='font-semibold'>StudyNotion Website: </span>Developed a dynamic platform using MERN stack for students to purchase AI, web development, and more courses. Enabled secure payments, responsive design, and engaging content. Collaborated, tested, and maintained to ensure a seamless user experience.</p>
                 <button className='bg-[#6e57e0] px-6 py-5 rounded-md text-white -ml-64 mt-3'>
                     Check Out 
                 </button>
               </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex  max-w-[930px] mt-14  justify-evenly gap-6 '>
                 {/*image*/}
                 <img
                  src={stud2}
                  style={{ width: '1500px' ,height:"200px"}}
                    className='mt-7'
                 />
                 {/*right part*/}
                 <div>
                     <h2 className='text-2xl font-semibold -ml-[24%]'>PortFolio Website </h2>
                     <p className='text-richblack-400 max-w-[85%] ml-20 mt-3 text-start'><span className='font-semibold'>Portfolio Website: </span>Created a captivating portfolio website utilizing the power of the MERN stack. Showcased projects, skills, and experience in a visually appealing manner. ensured responsive design for optimal user experience. Collaborated, tested, and maintained the website to showcase </p>
                  
                      <button className='bg-[#6e57e0] px-6 py-5 rounded-md text-white mt-3  -translate-x-16'>
                        Check Out
                      </button>
                 </div>
            </div>
        </SwiperSlide>
    
           </div>
      </Swiper>
    </div>
  );
}

export default Projects