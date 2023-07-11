import React, { useState } from 'react'
import {FiCode,FiTool,FiFigma} from "react-icons/fi"
import {AiOutlineArrowDown,AiFillGithub,AiOutlineDown} from "react-icons/ai"
import {IoLogoJavascript} from "react-icons/io"
import {TbBrandCpp} from "react-icons/tb"
import {BiLogoPython,BiLogoGit,BiLogoAws} from "react-icons/bi"
import {PiBracketsCurlyBold} from "react-icons/pi"
import {BiLogoReact} from "react-icons/bi"
import {SiNextdotjs,SiVercel} from "react-icons/si"
import {TbBrandTailwind} from "react-icons/tb"
import {DiNodejsSmall,DiMongodb} from "react-icons/di"
import {BsArrowDownCircleFill} from "react-icons/bs"
const Skill = () => {

    const[language,setLanguage]=useState(false);
    const[libraries,setLibraries]=useState(false);
    const[tools,settools]=useState(false);

    const handleClick=()=>{
         setLanguage(!language)
    }
  return (
    <div className='text-center mt-[9%]' id='skill'>
        {/*heading*/}
        <div>
        <h2 className='text-3xl font-bold'>Skills</h2>
         <p>My Technical Skills</p>
        </div>
        
        
       <div className='grid grid-cols-2 max-w-5xl mx-auto  gap-2 grid-flow-row mt-16  place-items-center'>
                {/*language*/}
         <div className='flex items-center  self-start'>
             
           
             <div className='flex-col'  onClick={()=>{
                setLanguage(!language)
             }}> 
             <div className='flex items-center cursor-pointer'>
             <FiCode className='text-3xl text-[#6e57e0]'/>
                  <div className='flex-grow'>
                  <h2 className='text-2xl lg:ml-[-52%] font-bold'>Languages </h2>
                 <p className=' max-w-[95%] text-richblack-400'>Languages that I have picked up over the Years</p>
                 
              
                  </div>
                  <AiOutlineDown className=' text-2xl text-[#6e57e0] ml-[-3%]' />
               </div>
                 
                 {
                   language && (
                       <div className='flex-col items-center mt-4 gap-[60%] ml-[10%]'>
                            {/*javascript*/}
                            <div className='flex items-center '>
                               <IoLogoJavascript className='text-2xl text-[#6e57e0]'/>
                               <p className='ml-[57%]'>Java</p>
                              
                            </div>
                            <div className='h-[5px] w-[70%] rounded-sm bg-[#6e57e0] mt-3 mb-2'></div>
                            <div></div>
                            {/*c++*/}
                            <div className='flex items-center '>
                             <TbBrandCpp className='text-3xl text-[#6e57e0]'/>
                               <p  className='ml-[56%]'>C++</p>
                            </div>
                            <div className='h-[5px] w-[70%] rounded-sm bg-[#6e57e0] mt-3 mb-2'></div>
                            {/*pyton*/}
                            <div className='flex items-center '>
                               <BiLogoPython className='text-[#6e57e0] text-3xl'/>
                               <p  className='ml-[53%]'>Python</p>
                            </div>
                            <div className='h-[5px] w-[70%] rounded-sm bg-[#6e57e0] mt-3 mb-2'></div>
                       </div>
                   )
                 }
             </div>
             
        </div>

        {/*libraries and framework*/}
        <div  className=' self-start flex items-center cursor-pointer '>
         

            <div className='flex-col'>
           <div className='flex items-center cursor-pointer'
           onClick={()=>{
              setLibraries(!libraries)
           }}>
            <PiBracketsCurlyBold className=' text-3xl text-[#6e57e0]'/>
            <div className='flex-grow'>
            <h2 className='text-2xl lg:ml-[-10%] tran font-bold '>Libraries & Frameworks</h2>
            <p className=' max-w-[95%] text-richblack-400'>Libraries and Frameworks that I prefer to work with</p>
            </div>
            <AiOutlineDown className='text-2xl text-[#6e57e0] ml-[-3%]'/>
         </div>

            {
               libraries && (
                   <div className='flex-col items-center mt-4 gap-[60%] ml-[10%]'>
                   {/*react*/}
                       <div className='flex items-center '>
                         <BiLogoReact className='text-3xl text-[#6e57e0]'/>
                        <p className='ml-[50%]'>React</p>
                      </div>
                      <div className='h-[5px] w-[70%] rounded-sm bg-[#6e57e0] mt-3 mb-2'></div>
                      {/*next.js*/}
                      <div className='flex items-center '>
                       <SiNextdotjs className='text-3xl text-[#6e57e0]'/>
                       <p className='ml-[48%]'>Next.js</p>
                      </div>
                      <div className='h-[5px] w-[70%] rounded-sm bg-[#6e57e0] mt-3 mb-2'></div>
                      {/*tailwind.css*/}
                      <div className='flex items-center '>
                         <TbBrandTailwind className='text-3xl text-[#6e57e0]'/>
                         <p className='ml-[38%]'>Tailwind CSS</p>
                      </div>
                      <div className='h-[5px] w-[70%] rounded-sm bg-[#6e57e0] mt-3 mb-2'></div>
                      {/*Node js*/}
                      <div className='flex items-center '>
                         <DiNodejsSmall className='text-3xl text-[#6e57e0]'/>
                         <p className='ml-[47%]'>Node.Js</p>
                      </div>
                      <div className='h-[5px] w-[70%] rounded-sm bg-[#6e57e0] mt-3 mb-2'></div>
                      {/*mongo db*/}
                      <div className='flex items-center '>
                         <DiMongodb className='text-3xl text-[#6e57e0]'/>
                         <p className='ml-[44%]'>MongoDB</p>
                      </div>
                      <div className='h-[5px] w-[70%] rounded-sm bg-[#6e57e0] mt-3 mb-2'></div>
                   </div>
               )
            }
            </div>

           
        </div>

     
       
        {/*tools*/}
        <div className='flex self-start '>
             
              <div className='flex-col ml-[2%]'>
              <div className='flex items-center cursor-pointer'
              onClick={()=>{
                 settools(!tools)
              }}>
              <FiTool className=' text-3xl text-[#6e57e0] '/>
              <div>
              <h2 className='text-2xl lg:ml-[-69%] font-bold'>Tools</h2>
              <p className='  text-richblack-400'>Tools that I know and use on a daily basis</p>
              </div>
              <AiOutlineDown className='text-2xl text-[#6e57e0] mr-7'/>
           </div>
              {
                 tools && (
                    <div className='flex-col items-center mt-10 gap-[60%] ml-[10%]'>
                    {/*Git*/}
                          <div className='flex items-center '>
                          <BiLogoGit className='text-3xl text-[#6e57e0]'/>
                          <p className='ml-[50%]'>Git</p>
                       </div>
                       <div className='h-[5px] w-[70%] rounded-sm bg-[#6e57e0] mt-3 mb-2'></div>
                       {/*Github*/}
                       <div className='flex items-center '>
                          <AiFillGithub className='text-3xl text-[#6e57e0]'/>
                          <p className='ml-[50%]'>Github </p>
                       </div>
                       <div className='h-[5px] w-[70%] rounded-sm bg-[#6e57e0] mt-3 mb-2'></div>
                       {/*Figma*/}
                       <div className='flex items-center '>
                          <FiFigma className='text-3xl text-[#6e57e0]'/>
                          <p className='ml-[50%]'>Figma</p>
                       </div>
                       <div className='h-[5px] w-[70%] rounded-sm bg-[#6e57e0] mt-3 mb-2'></div>
                       {/*Vercel*/}
                       <div className='flex items-center '>
                          <SiVercel className='text-3xl text-[#6e57e0]'/>
                          <p className='ml-[50%]'>Vercel</p>
                       </div>
                       <div className='h-[5px] w-[70%] rounded-sm bg-[#6e57e0] mt-3 mb-2'></div>
                       {/*aws*/}
                       <div className='flex items-center '>
                          <BiLogoAws className='text-3xl text-[#6e57e0]'/>
                          <p className='ml-[50%]'>AWS</p>
                       </div>
                       <div className='h-[5px] w-[70%] rounded-sm bg-[#6e57e0] mt-3 mb-2'></div>
                    </div>
                 )
              }
              </div>

              
           </div>
       </div>
    </div>
  )
}

export default Skill