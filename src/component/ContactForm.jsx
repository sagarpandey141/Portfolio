import React, { useEffect ,useRef} from 'react'
import {useForm} from "react-hook-form"
import {toast} from "react-hot-toast"
const ContactForm = () => {

    const{
        register,
        setValue,
        reset,
        handleSubmit        
    }=useForm();
   

    const submitHandler=()=>{
        console.log("hii")
        toast.success("Thank you for contacting us")
    }
   
  
  return (
    <div  >
         
      <form onSubmit={handleSubmit(submitHandler)}>
      <div className='flex-col'>
                  {/*name email*/}
            <div className='flex gap-14'>
                  {/*name*/}
                  <div>
                      <input
                        name='userName'
                        id='userName'
                        placeholder='Name'
                        className='border-2 border-[#6e57e0] py-5 px-1 rounded-lg bg-[#ece9fb] h-20  placeholder-black  pl-4 pt-1 focus:outline-none focus:ring focus:ring-red-300'
                        
                        {...register("userName",{required:true})}
                      />
                  </div>
                  {/*email*/}
                    <div>
                        <input
                        name='userEmail'
                        id='userEmail'
                        placeholder='Email'
                        className='border-2 border-[#6e57e0] py-5 px-1 rounded-lg bg-[#ece9fb] h-20  placeholder-black  pl-4 pt-1 focus:outline-none focus:ring focus:ring-violet-300'
                        {...register("userEmail",{required:true})}
                      />
                    </div>
            </div>

            {/*subject*/}
              <div className=' mt-10 '> 
                  <input
                    name='subjectName'
                    id='subjectName'
                    placeholder='Subject'
                    className='border-2 border-[#6e57e0] py-5 px-1 rounded-lg bg-[#ece9fb] w-[100%]  h-20  placeholder-black  pl-4 pt-1 focus:outline-none focus:ring focus:ring-violet-300'
                    {...register("subjectName",{required:true})}
                />
              </div>

            {/*message*/}
              <div>
                  <textarea
                    id='messageName'
                    name='messageName'
                    placeholder='Message'
                    className='border-2 border-[#6e57e0] py-5 px-1 rounded-lg bg-[#ece9fb] w-[100%] mt-5 h-56  placeholder-black  pl-4  -pt-0 focus:outline-none focus:ring focus:ring-violet-300'
                    {...register("messageName",{required:true})}
                />
              </div>

            {/*send message button*/}
            <button type='submit'  className='bg-[#6e57e0]  text-white font-bold py-5 px-4 rounded-lg lg:flex items-center gap-2 mt-3'>
                Send Message
            </button>
         </div> 
      </form>
    </div>
  )
}

export default ContactForm