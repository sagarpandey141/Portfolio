import React from 'react'
import {FaLinkedinIn} from "react-icons/fa"
import {AiFillGithub} from "react-icons/ai"
import {FiTwitter} from "react-icons/fi"
const Footer = () => {
  return (
    <div className=' mt-7 h-[20rem] bg-[#6e57e0] text-white'>
         <div className='translate-y-20 flex justify-center gap-20'>

                {/*left part*/}
                <div className='-translate-x-10'>
                    <p className='text-4xl'>Sagar Pandey</p>
                    <p className='mt-2 text-xl'>Full Stack Developer</p>
                </div>

                {/*middle part*/}
                <div className='flex-col' >
                {/*top part*/}
                    <div className='flex gap-11 text-xl font-semibold'>
                    <p>About</p>
                    <p>Projects</p>
                    <p>Contact Me</p>
                    </div>
                    {/*down part*/}
                    <div className='translate-y-28 translate-x-4'>
                        <p> © Sagar Pandey. All rights reserved</p>
                    </div>
                </div>

                {/*right part*/}
                <div className='flex gap-5 text-xl'>
                    <FaLinkedinIn/>
                    <AiFillGithub/>
                    <FiTwitter/>
                </div>
         </div>
    </div>
  )
}

export default Footer