import React, { useState } from 'react'

const NavBar = () => {

  const[color,setcolor]=useState("Home");
  return (
    <div className=' w-11/12  mx-auto mt-5 '>
         <div className='lg:flex lg:justify-around  h-12  fixed top-0 left-0 right-0   bg-white   font-semibold z-50 ' >
          
                  <p className='text-2xl mt-3' >Sagar</p>

                  <div className='lg:flex gap-4 mt-3 text-lg '>

                  <a href='#home' className={color === "Home" ? "text-[#6e57e0]" : ""}
                  onClick={()=>{
                     setcolor("Home")
                  }}>
                       Home
                  </a>
                  <a href='#about' className={color === "About" ? "text-[#6e57e0]" : ""}
                   onClick={()=>{
                     setcolor("About")
                  }}>
                       About
                  </a>
                  <a href='#skill' className={color === "Skills" ? "text-[#6e57e0]" : ""}
                   onClick={()=>{
                     setcolor("Skills")
                  }}>
                      Skills
                  </a>
                  <a href='#qualification' className={color === "qualification" ? "text-[#6e57e0]" : ""}
                   onClick={()=>{
                     setcolor("qualification")
                  }}>
                          Qualifications
                  </a>
                  <a href='#project' className={color === "projects" ? "text-[#6e57e0]" : ""}
                   onClick={()=>{
                     setcolor("projects")
                  }}>
                       Projects
                  </a>
                  <a href='#contact' className={color === "contact" ? "text-[#6e57e0]" : ""}
                  onClick={()=>{
                     setcolor("contact")
                  }}>
                      Contact Me
                  </a>
                  </div>
           </div>
         </div>
 
  )
}

export default NavBar