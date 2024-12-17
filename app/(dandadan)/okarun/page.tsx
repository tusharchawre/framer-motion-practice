"use client"
import { motion } from 'motion/react'
import React from 'react'

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };



function page() {
  return (
    <motion.div 
    layoutId='div'
    className='w-full h-screen flex items-end justify-center overflow-hidden'>
        <motion.div
        initial={{
          y: "-50%",
        }}
        transition={transition}
        animate={{
          y:0
        }}
        className='h-80 w-full flex justify-center'>
        <motion.img
        initial={{
          scale: 1.1,
          width: "13rem",
          height: "18rem"
        }}
        animate={{
          scale: 1.25,
          width: "100%",
          
        }}
        transition={transition}
        
        src="/turbo-granny.jpg" alt="" className='scale-150 object-cover -translate-y-64' />
        </motion.div>
    </motion.div>
  )
}

export default page