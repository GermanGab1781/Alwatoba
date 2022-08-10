import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import AlwatobaImg from '../media/AlwatobaBrand.png'

export default function CatalogCateg1() {
  return (
    <motion.div className="flex flex-wrap justify-start gap-y-10 gap-x-5 ml-5 mt-5 max-h-full max-w-full place-content-start" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <NavLink className="sm:h-48 sm:w-48 h-32 w-32 transition ease-in-out duration-100 hover:scale-105 " to="/Product">
        <img src={AlwatobaImg} className="w-full h-full" alt="Categ1"/>
        <span>PRODUCTO</span>     
      </NavLink> 
      <NavLink className="sm:h-48 sm:w-48 h-32 w-32 transition ease-in-out duration-100 hover:scale-105 " to="/Product">
        <img src={AlwatobaImg} className="w-full h-full" alt="Categ1"/>
        <span>PRODUCTO</span>     
      </NavLink>
      <NavLink className="sm:h-48 sm:w-48 h-32 w-32 transition ease-in-out duration-100 hover:scale-105 " to="/Product">
        <img src={AlwatobaImg} className="w-full h-full" alt="Categ1"/>
        <span>PRODUCTO</span>     
      </NavLink>
      <NavLink className="sm:h-48 sm:w-48 h-32 w-32 transition ease-in-out duration-100 hover:scale-105 " to="/Product">
        <img src={AlwatobaImg} className="w-full h-full" alt="Categ1"/>
        <span>PRODUCTO</span>     
      </NavLink> 
      <NavLink className="sm:h-48 sm:w-48 h-32 w-32 transition ease-in-out duration-100 hover:scale-105 " to="/Product">
        <img src={AlwatobaImg} className="w-full h-full" alt="Categ1"/>
        <span>PRODUCTO</span>     
      </NavLink> 
      <NavLink className="sm:h-48 sm:w-48 h-32 w-32 transition ease-in-out duration-100 hover:scale-105 " to="/Product">
        <img src={AlwatobaImg} className="w-full h-full" alt="Categ1"/>
        <span>PRODUCTO</span>     
      </NavLink> 
      
      
       
    </motion.div>
  )
}