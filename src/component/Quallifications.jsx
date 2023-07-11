import React, { useState } from 'react'
import {LiaUniversitySolid} from "react-icons/lia"
import {PiBagBold} from "react-icons/pi"
import {MdOutlineDateRange} from "react-icons/md"
const Quallifications = () => {

    const[education,setEducation]=useState(true);
    const[work,setWork]=useState(false);

  return (
    <div className='flex-col text-center mt-[14%]  ' id='qualification' >
       <h2 className='text-3xl font-bold'>Qualifications</h2>
       <p className='mt-2 text-richblack-300'>My Educational Qualification & Work Experience</p>

       <div className='mt-[5%] flex  max-w-2xl mx-auto justify-center gap-20 translate-y-2'> 
       {/*education*/}
            <button className='flex items-center'>
                   <LiaUniversitySolid className='text-4xl  text-[#6e57e0]'/>
                   <p className='text-1xl text-[#6e57e0]'>Education</p>
            </button>
              

            {/*Work*/}
            <button className='flex items-center text-richblack-300 gap-3 '>
                 <PiBagBold className='text-4xl '/>
                 <p className='text-1xl '>Work</p>
            </button>
       </div>

       <div>
        {
            education && (
                <div className=' mx-auto mb-96 -translate-y-10'>
                            <div className='grid grid-cols-3  max-w-2xl  mx-auto justify-evenly  '>
                    {/*leftpart*/}
                    <div className=' '>
                      {/*codehelp certicicate*/}
                          <div className='translate-y-28 translate-x-32'>
                             
                                <div>
                                        <h2 className='text-xl  font-semibold '>MERN STACK </h2>
                                        <p className=' text-richblack-400'>CodeHelp</p>
                                </div>
                                {/*date*/}
                                <div className=''>
                                        <MdOutlineDateRange className='ml-[46%] translate-y-3 -translate-x-16 text-richblack-300 '/>
                                        <p className=' text-richblack-300 mt-[-10px] '>2022-2023</p>
                                </div>
                          </div>          
                    </div>
                    <div className=' place-self-center flex flex-col items-center translate-y-28 translate-x-3'>
                      {/*circle*/}
                        <p className='relative top-2 w-[13px] rounded-full bg-[#6e57e0] h-[13px]'></p>
                        {/*line*/}
                        <p className=' w-[1.6px] h-[98px] bg-[#6e57e0] '></p>
                        {/*circle*/}
                        <p className=' w-[13px] rounded-full bg-[#6e57e0] h-[13px] '></p>
                        {/*line*/}
                        <p className=' w-[1.6px] h-[98px] bg-[#6e57e0] '></p>
                        {/*circle*/}
                        <p className=' w-[13px] rounded-full bg-[#6e57e0] h-[13px] '></p>
                    </div>
                         {/*secondary school*/}
                    <div className=' translate-y-52 -translate-x-24'>
                              <div className=''>
                                <h2 className='text-xl font-bold translate-y-2'>Secondary School</h2>
                                <p className='text-richblack-400 translate-y-2'>Dav School, Madhya Pradesh</p>
                              </div>
                              {/*date*/}
                              <div className='translate-y-4'>
                                        <MdOutlineDateRange className='translate-y-5 translate-x-10 text-richblack-300'/>
                                        <p className=' text-richblack-300 '>2011-2021</p>
                                </div>
                          </div>


                          </div>

                    {/*right part*/}
                    <div className='translate-y-24 -translate-x-32'>
                         <div>
                             <h2 className='text-xl font-bold'>Senior Secondary School</h2>
                             <p className='text-richblack-400'>Dav School, Madhya Pradesh</p>
                         </div>
                         {/*date*/}
                         <div className='space-x-8'>
                                        <MdOutlineDateRange className='ml-[46%] translate-y-5 text-richblack-300'/>
                                        <p className=' text-richblack-300 '>2022-2024</p>
                          </div>
                    </div>
                </div>
            ) 
        }
       </div>

    </div>
  )
}

export default Quallifications