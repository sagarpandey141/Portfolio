import React from 'react'
import {RiNewspaperLine} from "react-icons/ri"
import about_Pic from "../assest/aboutpic.jpg"
const About = () => {
  return (
    <div className=' max-w-[90%] lg:flex-col lg:mt-[15%] mx-auto ' id='about'>
         <div className='lg:ml-[40%] '>
         <h2 className='text-5xl'>About Me</h2>
         <p className='lg:ml-[3%] mt-2'>My introduction</p>
         </div>
         <div className='lg:flex text-center mt-16 justify-center gap-10'>
               {/*left part*/}
              <div>
                <img src={about_Pic} className=' h-[24rem] rounded-lg'/>
              </div>
             {/*right part*/}
             <div className='max-w-[32%] ml-4'>
             <p className=' text-richblack-600 max-w-[79%] text-[1.234rem] text-left ' >Hey there,👋 I'm Sagar a 17-year-old CSE Enthusiast who is passionate about Software Development, UI/UX Design and Product Management. Currently, I'm pursuing my career as a Full Stack Web Developer 👨🏻‍💻 with 1+ years of professional and freelance experience. I share my learnings through speaking engagements and write-ups. ✍🏻</p>
                 {/*button*/}
                 <div>
                <button className='bg-[#6e57e0]  text-white font-bold py-4 px-4 rounded lg:flex items-center gap-2 mt-3'>
                    <p>Resume</p>
                    <RiNewspaperLine/>
                </button>
             </div>
             </div>
             
         </div>
    </div>
  )
}

export default About