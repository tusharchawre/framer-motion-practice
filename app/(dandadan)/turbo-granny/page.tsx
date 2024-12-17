"use client"
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import React, { useState } from 'react'

function page() {
    const transition = { duration: 5 , ease: [0.23, 0.46 , -0.23, 1]}
const [isVisible, setisVisible] = useState(true)


  return (
    <motion.div
    layoutId='div'
    className='flex items-center justify-center w-full h-screen flex-col'
    >

         <motion.div 
         initial={{opacity: 1}}
          exit={{opacity: 0}}
          transition={transition}
          className='w-52 flex  justify-between text-white'>
          <p>オカルン</p>
            <p>ターボ</p>
          </motion.div>
        <div className='overflow-hidden'>
            
        <Link href={'/okarun'}>
        <motion.img 
        whileHover={{
            scale: 1.1
          }}
          transition={transition}
          src={"/turbo-granny.jpg"}
          alt='turbo granny'
          className='object-cover w-52 h-72'
          onClick={()=> {setisVisible((x)=>!x)}}
        />
        </Link>
        </div>
    </motion.div>
  )
}

export default page