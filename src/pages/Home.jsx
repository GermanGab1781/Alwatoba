import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import AlwatobaImg from '../media/AlwatobaBrand.png'

export default function Home() {
  return (
    <motion.div className="grid justify-center bg-amber-300" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      {/* Presentacion */}
      <div className="sm:mt-7 sm:gap-3 grid sm:grid-cols-4 sm:grid-rows-2 sm:row-start-1">       
        <NavLink to="/Catalog" className="overflow-hidden sm:col-span-2 sm:row-span-2 sm:row-start-1">
          <img src={AlwatobaImg} alt='alwatoba' className="h-full w-full transition ease-in-out duration-700 hover:scale-110"/>
        </NavLink>
        <NavLink to="/Catalog" className="overflow-hidden sm:col-span-2 sm:row-span-1 sm:col-start-3 sm:row-start-1">
          <img src={AlwatobaImg} alt='alwatoba' className="h-48 w-full transition ease-in-out duration-700 hover:scale-110"/>
        </NavLink>
        <NavLink to="/Catalog" className="overflow-hidden sm:col-span-2 sm:row-span-1 sm:col-start-3 sm:row-start-2">
          <img src={AlwatobaImg} alt='alwatoba' className="h-48 w-full transition ease-in-out duration-700 hover:scale-110"/>
        </NavLink>
      </div>
      {/* Slider */}
      <div>
      </div>
      {/* Categorias */}
      <div className="grid sm:mt-7 sm:mb-6 sm:text-center sm:justify-evenly">
        
        <h2 className="sm:mb-5 sm:col-start-2 sm:col-span-2 sm:row-start-1">Categorias</h2>
        <NavLink className="sm:row-start-2 sm:h-32 sm:w-32 overflow-hidden" to="/Catalog">
          <img src={AlwatobaImg} className="sm:w-full sm:h-full transition ease-in-out duration-700 hover:scale-110" alt="Categ1"></img>
        </NavLink>           
            
               
      </div>
    </motion.div>
  )
}
