import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import AlwatobaImg from '../media/AlwatobaBrand.png'

export default function Home() {
  return (
    <motion.div className="sm:bg-amber-200 md:bg-blue-800 lg:bg-amber-700 bg-green-400 grid grid-rows-6 grid-cols-6 pt-20 place-items-center" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      {/* Presentacion */}
      <NavLink className="row-start-1 col-start-3 col-span-2" to="/"><img className="w-full h-full" src={AlwatobaImg} alt="Presentacion"/></NavLink>
      {/* Frase 1 */}
      <div className="row-start-2 col-start-3 col-span-2 h-32 w-1/2 relative">
        <img className="h-full w-full rounded-full" src={AlwatobaImg} alt="Imagen fondo"/>
        <span className="absolute bg-black bottom-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap text-md font-bold text-amber-400">"Conscientes de nuestro impacto en la Cultura"</span>
      </div>
      {/* Categorias Productos */}
      <div className="row-start-3 bg-black">
        <div>
          <img className="h-full w-full rounded-full" src={AlwatobaImg} alt="Imagen de categoria de producto"/>
          <NavLink to="/Catalog"><span>Carteras</span></NavLink>
        </div>
      </div>
    </motion.div>
  )
}
