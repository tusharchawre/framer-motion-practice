"use client"
import { AnimatePresence, motion } from 'motion/react'
import React, { useState } from 'react'
import Loader from 'react-loader-spinner'
import { CircleLoader, GridLoader, RingLoader } from 'react-spinners'


function page() {
    const [buttonState , setButtonState] = useState("idle")

    const buttonContent : any = {
        loading : <GridLoader size={4} />,
        idle: "Send me a login link",
        success: "Login link sent!"
    }


    


  return (
    <div className='flex items-center justify-center h-screen'>
        
        <button
        disabled={buttonState !== "idle"}

        onClick={() => {
            setButtonState("loading")
    
            setInterval(()=>{
                setButtonState("success")
            }, 1700)
    
            setInterval(()=>{
                setButtonState("idle")
            }, 3000)
    
        }}
        
        className='bg-white text-black px-3 py-2 rounded-md hover:bg-white/75 transition-all duration-100 w-48 h-12'
        >
        <AnimatePresence mode='popLayout' initial={false} >
            <motion.span
            key={buttonState}
            transition={{duration: .3, bounce: 0, type: "spring" }}
            initial={{y: -10, opacity: 0}}
            animate={{y:0 , opacity: 1}}
            exit={{opacity:0 , y:10}}
            >
            {buttonContent[buttonState]}
            </motion.span>
            </AnimatePresence>
            
            </button>
    </div>
  )
}

export default page