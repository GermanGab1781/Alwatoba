import React from 'react'
import {motion} from 'framer-motion'

export default function ProductEj() {
  return (
    <motion.div className="bg-amber-300" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      
    </motion.div>
  )
}
