"use client"
import { AnimatePresence, motion } from "motion/react";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AnimatePresence mode={'wait'}>
        <motion.div layout>
        {children}
        </motion.div>
        </AnimatePresence>

      </body>
    </html>
  )
}