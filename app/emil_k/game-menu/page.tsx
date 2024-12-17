"use client"
import { AnimatePresence, motion } from 'motion/react'
import React, { act, RefObject, useEffect, useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

interface gameProps {
    name: string
    subHeading: string 
    description: string 
    imageSrc: string
}



function page() {



    const games = [
        {
          name: "The Oddysey",
          subHeading: "Explore unknown galaxies.",
          description: "Embark on a breathtaking journey across the cosmos. Navigate uncharted star systems, discover alien civilizations, and uncover ancient mysteries hidden in the void of space. Customize your starship and chart a path to becoming the greatest explorer in the galaxy.",
          imageSrc : "/_images/Image1.webp"
        },
        {
          name: "Angry Rabbits",
          subHeading: "They are coming for you.",
          description: "The rabbits have had enough! In this chaotic adventure, you must outwit and escape the army of furious rabbits on a quest for revenge. Use traps, craft tools, and strategize to defend yourself from their relentless attacks. Can you survive the bunny uprising?",
          imageSrc : "/_images/Image2.webp"
        },
        {
          name: "Ghost town",
          subHeading: "Find the ghosts.",
          description: "Step into the eerie and abandoned ghost town where whispers echo through the wind. Solve puzzles, uncover tragic secrets, and find the restless spirits that roam the streets. Will you help them move on, or will you become one of them?",
          imageSrc : "/_images/Image3.webp"
        },
        {
          name: "Pirates in the jungle",
          subHeading: "Find the treasure.",
          description: "Lost in the heart of a forgotten jungle, you and your pirate crew are on the hunt for legendary treasure. Battle wild beasts, solve ancient riddles, and outsmart rival pirates to claim the gold and uncover a hidden civilization's secrets.",
          imageSrc : "/_images/Image5.webp"
        },
        {
          name: "Lost in the mountains",
          subHeading: "Find your way home.",
          description: "After a plane crash leaves you stranded in the freezing mountains, survival is your only option. Find shelter, gather resources, and brave the harsh wilderness while searching for a way back home. Every choice you make will determine your fate.",
          imageSrc : "/_images/Image4.webp"
        }
      ];
      

      const [activeGame, setActiveGame] = useState<gameProps | null>(null)

      let ref = useRef(null)
      // @ts-ignore
      useOnClickOutside(ref, ()=> setActiveGame(null))

      useEffect(()=>{
        function onKeyDown(e: KeyboardEvent){
            if (e.key === "Escape"){
                setActiveGame(null)
            }
        }

        window.addEventListener("keydown", onKeyDown)

        return () => window.removeEventListener("keydown", onKeyDown)
      })



  return (
    <div className='flex justify-center items-center h-screen w-full'>
        
<AnimatePresence>
        {activeGame ? (
            <motion.div  
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className='bg-black/60 w-full h-full absolute flex items-center justify-center'>
            <motion.div ref={ref} 
            layoutId={`game-${activeGame.name}`} 
            className='w-[640px] h-fit bg-zinc-800 rounded-xl'>
            <div className=' flex items-center px-7 py-4 justify-between'>
    
            <div className='flex gap-4 items-center'>
            <motion.img layoutId={`image-${activeGame.name}`} src={activeGame.imageSrc} height={64} width={64} className='rounded-md' />
                    <div>
                        <motion.p layoutId={`title-${activeGame.name}`} className='font-medium text-[18px]'>{activeGame.name}</motion.p>
                        <motion.p layoutId={`subHeading-${activeGame.name}`} className='text-white/50 text-[16px]'>{activeGame.subHeading}</motion.p>                    
                    </div>
            </div>
    

            <motion.div layoutId={`button-wrapper-${activeGame.name}`}>
    <motion.button
      layoutId={`button-${activeGame.name}`}
      className="bg-zinc-700 text-blue-400 px-3 py-1 rounded-full font-semibold
                 hover:bg-zinc-600 transition ease duration-150
                 text-[16px]"
    >
      Get
    </motion.button>
  </motion.div>


            </div>
            
            <motion.p 
            initial={{opacity: 0}}
            animate={{opacity:1}}
            exit={{opacity: 0}}
            transition={{duration: 0.1}}
            className='px-7 py-4 text-zinc-400'>
                {activeGame.description}
            </motion.p>
            </motion.div>
            </motion.div>

        ) : null}

</AnimatePresence>

        <ul>
            {games.map((game)=>(
                <motion.li
                layoutId={`game-${game.name}`} 
                onClick={()=> setActiveGame(game)}
                >
                <div className='w-[480px] h-24  rounded-md border-b-[0.7px] border-white/10 flex items-center px-7 justify-between'>
                <div className=' flex items-center px-7 py-4 justify-between w-full'>
    
            <div className='flex gap-4 items-center'>
            <motion.img layoutId={`image-${game.name}`} src={game.imageSrc} height={64} width={64} className='rounded-md' />
                    <div>
                        <motion.p layoutId={`title-${game.name}`} className='font-medium text-[18px]'>{game.name}</motion.p>
                        <motion.p layoutId={`subHeading-${game.name}`} className='text-white/50 text-[16px]'>{game.subHeading}</motion.p>                    
                    </div>
            </div>
    

            <motion.div layoutId={`button-wrapper-${game.name}`}>
    <motion.button
      layoutId={`button-${game.name}`}
      className="bg-zinc-700 text-blue-400 px-3 py-1 rounded-full font-semibold
                 hover:bg-zinc-600 transition ease duration-150
                 text-[16px]"
    >
      Get
    </motion.button>
  </motion.div>

            </div>

                </div>
            </motion.li>
            ))}


            
        </ul>
    </div>
  )
}

export default page