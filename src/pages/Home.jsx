import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import AlwatobaImg from '../media/AlwatobaBrand.png'

export default function Home() {
  return (
    <motion.div className="grid justify-center bg-amber-300" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      {/* Presentacion */}
      <div className="mt-7 gap-3 grid grid-cols-4 grid-rows-2 row-start-1">
        
        <NavLink to="/Catalog" className="overflow-hidden col-span-2 row-span-2 row-start-1">
          <img src={AlwatobaImg} alt='alwatoba' className="h-full w-full transition ease-in-out duration-700 hover:scale-110"/>
        </NavLink>
        <NavLink to="/Catalog" className="overflow-hidden col-span-2 row-span-1 col-start-3 row-start-1">
          <img src={AlwatobaImg} alt='alwatoba' className="h-48 w-full transition ease-in-out duration-700 hover:scale-110"/>
        </NavLink>
        <NavLink to="/Catalog" className="overflow-hidden col-span-2 row-span-1 col-start-3 row-start-2">
          <img src={AlwatobaImg} alt='alwatoba' className="h-48 w-full transition ease-in-out duration-700 hover:scale-110"/>
        </NavLink>
      </div>
      {/* Slider */}
      <div>
      </div>
      {/* Categorias */}
      <div className="grid mt-7 mb-6 text-center justify-evenly">
        
        <h2 className="mb-5 col-start-2 col-span-2 row-start-1">Categorias</h2>
        <NavLink className="row-start-2 h-32 w-32 overflow-hidden" to="/Catalog">
          <img src={AlwatobaImg} className="w-full h-full transition ease-in-out duration-700 hover:scale-110" alt="Categ1"></img>
        </NavLink>           
        <NavLink className="row-start-2 h-32 w-32 overflow-hidden" to="/Catalog">
          <img src={AlwatobaImg} className="w-full h-full transition ease-in-out duration-700 hover:scale-110" alt="Categ1"></img>
        </NavLink>           
        <NavLink className="row-start-2 h-32 w-32 overflow-hidden" to="/Catalog">
          <img src={AlwatobaImg} className="w-full h-full transition ease-in-out duration-700 hover:scale-110" alt="Categ1"></img>
        </NavLink>           
        <NavLink className="row-start-2 h-32 w-32 overflow-hidden" to="/Catalog">
          <img src={AlwatobaImg} className="w-full h-full transition ease-in-out duration-700 hover:scale-110" alt="Categ1"></img>
        </NavLink>           
               
      </div>
    </motion.div>
  )
}
