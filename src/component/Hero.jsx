import React from 'react'
import {FaLinkedinIn} from "react-icons/fa"
import {AiFillGithub} from "react-icons/ai"
import {FiTwitter} from "react-icons/fi"
import {MdEmail} from "react-icons/md"
import {BsMouse} from "react-icons/bs"
import {BsArrowDownCircleFill} from "react-icons/bs"
import {AiOutlineSend} from "react-icons/ai"
import pic from "../assest/sagar.png"

const Hero = () => {
  return (
    <div className='w-11/12 lg:flex  lg:ml-[21%] mt-[15%] gap-11 ' >
        
        {/*left section*/}
        <div className='text-[#6e57e0]' >

        <a href='https://www.linkedin.com/in/sagar-pandey-946752245/'  target="_blank">
            <FaLinkedinIn className='text-xl'/>
        </a>

         <a href='https://github.com/sagarpandey141' target='_blank'>
              <AiFillGithub className='text-xl mt-7'/>
         </a>

          <a > 
                <FiTwitter className='text-xl mt-7'/>
          </a>
            
            <a href='mailto:sagarwebsec@gmail.com' target='_blank'>
                 <MdEmail className='text-xl mt-7'/>   
            </a>
              
        </div>
        {/*mid section*/}
        <div className='lg:flex-col lg:mt-[-1%]' >
             <p className='text-5xl mt-[-3%] font-bold'>Hi,I'm Sagar</p>
             {/*TODO*/}
             <p className='text-2xl text-richblack-700 mt-3'>I am a FullStack Developer</p>
             <p className='mt-3 text-richblack-700 max-w-[70%] text-[19px]'>Building Software to solve real life problems</p>
             <button className='bg-[#6e57e0]  text-white font-bold py-5 px-4 rounded lg:flex items-center gap-2 mt-3'>
                <p>Contact Me</p> 
                <AiOutlineSend/>
             </button>
        </div>
           {/*right section*/}
           <div>
               <div className=' -translate-y-10 w-[250px] bg-[#6e57e0] h-[280px]  rounded-full relative'>
                 <img
                      src={pic}
                      className='absolute h-[230px] translate-x-2 translate-y-3'
                 />
                   
               </div>
           </div>
    </div>
  )
}

export default Hero