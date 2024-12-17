"use client"

import { AnimatePresence, motion } from 'motion/react'
import React, { useState } from 'react'

function page() {
    const [activeTab, setactiveTab] = useState("")

    const Tabs = [
        "Saved Sites",

        "Collections",

        "32 Following",

        "52 Followers"
        
    ]

    

  return (
    <AnimatePresence>
    <div className='flex items-center justify-center h-screen w-full bg-white text-black'>
        <ul className='flex'>
            {Tabs.map((tab, idx)=>(
                <li key={tab}
                className='relative flex items-center justify-center px-2
                cursor-pointer
                '
                onMouseEnter={()=> {
                    // @ts-ignore
                    setactiveTab(tab)
                    console.log(activeTab)
                }}
                onMouseLeave={()=> setactiveTab("")}
                >
                    
                    {activeTab === tab ? (
                        <motion.div 
                        
                        transition={{duration: 0.15
                        }}
                       
                        layoutId='highlight'
                        className='w-full h-8 absolute rounded-md bg-gray-200'
                        />

                    ): null}
                    
                    <span className='relative z-40 text-center '>{tab}</span>





                        
                </li>

               

                

            ))}
        </ul>
        

    </div>
    </AnimatePresence>
  )
}

export default page