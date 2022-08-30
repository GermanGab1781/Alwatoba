import { motion } from 'framer-motion'
import React from 'react'
import {BsInstagram , BsWhatsapp} from 'react-icons/bs'
import {BiCopyright} from 'react-icons/bi'
export default function Footer() {
  return (
    <motion.div className="grid justify-center p-6 pt-20 custom-BgColor1 custom-ColorMain transition-all border">
      <div className="flex flex-row row-start-1 place-content-center">
        <a  href="https://www.instagram.com/alwatoba"><BsInstagram className="h-10 w-20 hover:scale-110 transition-all"/></a>
        <a  href="https://www.instagram.com/alwatoba"><BsWhatsapp className="h-10 w-20 hover:scale-110 transition-all"/></a>
      </div>
      <div className="flex flex-wrap row-start-2 mt-5 place-content-center">
        <BiCopyright/> 
        <span className="text-lg custom-Color3">Alwatoba 2018</span>
      </div>
    </motion.div>
  )
}
