"use client"

import { easeInOut } from "motion";
import { AnimatePresence, motion } from "motion/react";

import Image from "next/image";
import { useState } from "react";


const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

function page() {
const [active, setActive] = useState(testimonials[0])

const handlePrev = () =>{
    setActive(
        (prev) =>
        testimonials[(testimonials.length - 1 + testimonials.indexOf(prev)) % testimonials.length]
    )
}

const handleNext = () =>{
    setActive(
        (prev) =>
        testimonials[(testimonials.indexOf(prev)+ 1) % testimonials.length]
    )
}

const isActive = (idx: number) => idx === testimonials.indexOf(active) 





  return (
    <div className="h-screen flex items-center justify-center">
    <div className="grid grid-cols-2 gap-12 max-w-4xl mx-auto ">
       <div className="w-full h-80 relative">
        {testimonials.map((testimonial, idx)=>(
          <AnimatePresence>
          <motion.div 
            key={testimonial.name}
            initial={{
                opacity: 0,
                scale: "0.9",
                rotate: Math.floor(Math.random()*21) - 10,
                zIndex: -100,
                y: 0
            }}
            animate={{
                opacity: isActive(idx)? 1 :0.7,
                scale: isActive(idx) ? 1 : 0.95,
                rotate: isActive(idx) ? 0 : Math.floor(Math.random()*21) - 10,
                zIndex: isActive(idx)? 999 : testimonials.length + 2 - idx,
                y: isActive(idx) ? [0, -80,0] : 0
            }}

            exit={{
                opacity: 0,
                scale: 0.9,
                rotate: Math.floor(Math.random()*21) - 10
            }}

            transition={{
                duration: .4,
                ease: "easeInOut"
            }}

            className="absolute inset-0 origin-bottom"
            >

<Image src={testimonial.src} height="500" width="500" alt={testimonial.name} 
        className="rounded-3xl h-full w-full object-cover"
        />

            </motion.div>
            </AnimatePresence>
        ))}
        
        
        
        
        
       </div>


       <div className="w-full">
        <h2 className="text-2xl font-bold">{active.name}</h2>
        <p className="text-base text-neutral-300 ">{active.designation}</p>
        <p className="pt-10 h-36 text-lg text-neutral-100">{active.quote.split(" ").map((t, idx)=>(
            <motion.span
            initial={{
                opacity: 0,
                filter: "blur(10px)"
            }}

            animate={{
                opacity: 1,
                filter: "blur(0px)"
            }}

            transition={{
                delay: 0.05 * idx
            }}

            key={t + idx}
            >
                {t}{" "}
            </motion.span>
        ))}</p>

        <div className="flex pt-10 gap-12">
            <button onClick={handlePrev}>Left</button>
            <button onClick={handleNext}>Right</button>

        </div>
       </div>


    </div>
    </div>
  )
}

export default page