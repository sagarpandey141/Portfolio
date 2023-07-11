import React from 'react'
import {HiOutlineMail} from "react-icons/hi"
import {BsPhone} from "react-icons/bs"
import {FaLinkedinIn} from "react-icons/fa"
import {BiCurrentLocation} from "react-icons/bi"

import ContactForm from './ContactForm'
const ContactUs = () => {
  return (
    <div className=' mt-28  ' id='contact'>
        <div className=' text-center'>
        <h2 className='text-[45px]  text-richblack-700 '>Contact Me</h2>
         <p className='text-richblack-500'>Want to connect? My inbox is always open!</p>
        </div>

        <div className='flex  mt-[90px] justify-center  gap-14'>
             {/*left part*/}
         <div className='flex-col mr-11'>
             
             {/*email*/}
             <div className='flex gap-4 items-center'>
                  <HiOutlineMail className='text-[30px] text-[#6e57e0]'/>
                  <div className='flex-col gap-3'>
                     <h3 className='text-2xl font-semibold'>Email</h3>
                     <p className=' text-richblack-300 text-[1rem]'>sagarwebsec@gmail.com</p>
                  </div>
             </div>

             {/*contact us*/}
             <div className='flex mt-8 gap-4 items-center'>
                 <BsPhone className='text-[30px] text-[#6e57e0]'/>
                 <div className='flex-col gap-5'>
                    <h2 className='text-2xl font-semibold'>Contact Us</h2>
                    <p className=' text-richblack-300 text-[0.989rem]'>+91 7999840152</p>
                 </div>
             </div>

             {/*linkedln*/}
             <div className='flex mt-8 gap-4 items-center'>
                <FaLinkedinIn  className='text-[30px] text-[#6e57e0]'/>
                <div className='flex-col gap-5'>
                    <p className='text-2xl font-semibold'>Linked In</p>
                    <p className=' text-richblack-300 text-[0.989rem]'>sagar-pandey-946752245</p>
                </div>
             </div>

             {/*location*/}
             <div className='flex mt-8 gap-4 items-center'>
                <BiCurrentLocation className='text-[30px] text-[#6e57e0]'/>
                <div className='flex-col gap-5'>
                    <h2 className='text-2xl font-semibold'>Location</h2>
                    <p className=' text-richblack-300 text-[0.989rem]'>Prayagraj, India</p>
                </div>
             </div>
         </div>

         {/*form part*/}
         <ContactForm/>
        </div>
        
    </div>
  )
}

export default ContactUs