"use client"

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react"
import useMeasure from "react-use-measure";


function page() {
    const [currentStep, setCurrentStep] = useState(0)
    const [direction, setDirection] = useState(1)
    const [ref, bounds ] = useMeasure()
    const content = useMemo(()=>{
        switch (currentStep) {
            case 0:
                return (
                <>
                <h1
                className="font-bold"
                >This is step one</h1>
                <h2 className="font-thin text-black/75 mb-2">Usually in this step we would explain why this thing exists and what it does. Also, we would show a button to go to next step.</h2>
                <div className="w-3/4 p-2 bg-gray-300 rounded-md mb-1 animate-pulse"></div>
                <div className="w-2/4 p-2 bg-gray-300 rounded-md mb-1 animate-pulse"></div>
                <div className="w-4/5 p-2 bg-gray-300 rounded-md mb-1 animate-pulse"></div>
                <div className="w-3/5 p-2 bg-gray-300 rounded-md mb-1 animate-pulse"></div>
                </>
                );


                case 1:
                    return (
                    <>
                    <h1
                    className="font-bold"
                    >This is step two</h1>
                    <h2 className="font-thin text-black/75 mb-2">Usually in this step we would explain why this thing exists and what it does. Also, we would show a button to go to next step.</h2>
                    <div className="w-3/4 p-2 bg-gray-300 rounded-md mb-1 animate-pulse"></div>
                    <div className="w-3/5 p-2 bg-gray-300 rounded-md mb-1 animate-pulse"></div>
                    </>
                    );

                case 2:
                    return (
                    <>
                    <h1
                    className="font-bold"
                    >This is step three</h1>
                    <h2 className="font-thin text-black/75 mb-2">Usually in this step we would explain why this thing exists and what it does. Also, we would show a button to go to next step.</h2>
                    <div className="w-3/4 p-2 bg-gray-300 rounded-md mb-1 animate-pulse"></div>
                    <div className="w-2/4 p-2 bg-gray-300 rounded-md mb-1 animate-pulse"></div>
                    <div className="w-3/5 p-2 bg-gray-300 rounded-md mb-1 animate-pulse"></div>
                    </>
                    );

        }
    }, [currentStep])


    const variants = {
        initial: (direction: any)=>{
          return  { x: `${110 * direction}%`, opacity: 0 }
        },
        animate: (direction: any)=>{
            return  { x: `${0 * direction}%`, opacity: 1 }
          },
          exit: (direction: any)=>{
            return  { x: `${-110 * direction}%`, opacity: 0 }
          },
    }


  return (
    <div className="w-full h-screen flex items-center justify-center 

    ">
        <motion.div animate={{height:  bounds.height + 24}} className="w-[480px] p-3 bg-white rounded-md h-fit text-black
        overflow-hidden
        ">
            <motion.div ref={ref} className="overflow-hidden w-full relative">
            <AnimatePresence
            mode="popLayout"
            initial={false}
            custom={direction}

            >

            <motion.div
            ref={ref}
            transition={{bounce: 0, duration: 0.3}}
            className="overflow-hidden"
            key={currentStep}
            variants={variants}
            custom={direction}
            initial="initial"
            animate="animate"
            exit="exit"
            >
            {content}
            </motion.div>

            </AnimatePresence>
            
            <motion.div
            layout 
            className="w-full flex items-center justify-between mt-5 px-1">
                <button 
                disabled={currentStep === 0}
                
                onClick={()=>{
                    setDirection(-1)
                    setCurrentStep((prev)=> prev - 1)
                }}
                className={cn("px-2 py-1 rounded-md bg-white border-[0.7px] border-black/40 hover:bg-black/5 transition duration-100 disabled:opacity-60",
                    
                )}>Back</button>
                <button 
                disabled={currentStep === 2}
                onClick={()=>{
                    setDirection(1)
                    setCurrentStep((prev)=> prev + 1)
                }}
                className="px-2 py-1 rounded-md bg-black text-white border-[0.7px] border-black/40 disabled:opacity-60">Continue</button>
            </motion.div>
            </motion.div>

        </motion.div>

    </div>
  )
}

export default page

