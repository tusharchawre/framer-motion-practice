"use client"
import { motion } from 'motion/react'
import React, { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

function page() {
    const [open, setOpen] = useState(false)

    const ref = useRef(null)
    // @ts-ignore
    useOnClickOutside(ref , ()=> setOpen(false))

  return (
    <div className='w-full h-screen flex justify-center items-center'>

        {
            open ? (
                
                <motion.div 
                ref={ref}
                layoutId='wrapper'
                className='w-96 h-64 bg-white rounded-md p-2 text-right relative'>
            <motion.span
            layoutId='feedback-span' 
            className='absolute top-4 left-4 text-black'
            
            >
            Feedback</motion.span>
            <textarea 
            className='w-full h-48  border-[2px] border-dashed border-black/30 rounded-md text-black focus:outline-none p-2 resize-none'>
                
 

            </textarea>
            <button
className='text-black border-[0.5px] border-black/40 px-3 py-2 rounded-md hover:bg-black/10 transition-all duration-100 '>
        <span>
           Send Feedback
          </span>
            </button>

        </motion.div>
            ): null
        }


        <motion.button
        layoutId='wrapper'
        onClick={()=> setOpen(true)}
        className='px-3 py-2 bg-white text-black rounded-md'

        >
          <motion.span
          layoutId='feedback-span'
          >
           Send Feedback
          </motion.span>

        </motion.button>
        
    </div>
  )
}

export default page