"use client"

import { motion } from "motion/react";
import { useRef } from "react";


export default function Home() {


  const scrollRef = useRef(null)

  return(
    <>
    <div ref={scrollRef} 
    className="w-96 h-[400vh] bg-white flex items-center"
    style={{ overflow: "scroll" }}>
      <motion.div
      className="w-36 h-36  bg-cyan-400"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ root: scrollRef }}
      />
    </div>

    </>
  )
}
