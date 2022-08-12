import { motion } from 'framer-motion'
import React from 'react'
import ReactPlayer from 'react-player'
import { NavLink } from 'react-router-dom'
import AlwatobaImg from '../media/AlwatobaBrand.png'

export default function Home() {
  function clickEvHome() {
    window.scrollTo(0, 0);
  }
  return (
    <motion.div className="sm:bg-amber-200 md:bg-blue-800 lg:bg-amber-700 bg-green-400 grid gap-y-10 grid-cols-6 pt-24 place-items-center" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      
      {/* Presentacion */}
      <div className="row-start-1 col-start-3 col-span-2 border border-amber-300 p-5 rounded-2xl">
        <ReactPlayer width={"70vw"} height={"35vw"} url='https://www.youtube.com/watch?v=cFPkypL_ap8' controls="true" />
      </div>
      {/* Frase 1 */}
      <div className="relative row-start-2 col-start-3 col-span-2 h-32 w-1/2">
        <img className="h-full w-full rounded-full" src={AlwatobaImg} alt="Imagen fondo"/>
        <span className="absolute bg-black bottom-1/3 left-1/2 -translate-x-1/2 whitespace-nowrap sm:text-2xl text-xs font-bold text-amber-400">"Conscientes de nuestro impacto en la Cultura"</span>
      </div>
      {/* Collage fotos */}
      <div className="relative flex flex-row flex-wrap justify-evenly sm:gap-y-10 gap-y-5 row-start-3 sm:col-start-2 sm:col-span-4 sm:gap-x-0 gap-x-1 col-start-1 col-span-6 border border-amber-300 sm:p-8 p-3 rounded-2xl mb-10">
        <img className="overflow-hidden sm:h-96 sm:w-56 h-56 w-20 border border-black hover:scale-110 hover:rounded-2xl hover:z-40 transition-all duration-500" src={AlwatobaImg} alt="Imagen fondo"/>
        <img className="overflow-hidden sm:h-96 sm:w-56 h-56 w-20 border border-black hover:scale-110 hover:rounded-2xl hover:z-40 transition-all duration-500" src={AlwatobaImg} alt="Imagen fondo"/>
        <img className="overflow-hidden sm:h-96 sm:w-56 h-56 w-20 border border-black hover:scale-110 hover:rounded-2xl hover:z-40 transition-all duration-500" src={AlwatobaImg} alt="Imagen fondo"/>
        <img className="overflow-hidden sm:h-96 sm:w-56 h-56 w-20 border border-black hover:scale-110 hover:rounded-2xl hover:z-40 transition-all duration-500" src={AlwatobaImg} alt="Imagen fondo"/>
        <img className="overflow-hidden sm:h-96 sm:w-56 h-56 w-20 border border-black hover:scale-110 hover:rounded-2xl hover:z-40 transition-all duration-500" src={AlwatobaImg} alt="Imagen fondo"/>
        <img className="overflow-hidden sm:h-96 sm:w-56 h-56 w-20 border border-black hover:scale-110 hover:rounded-2xl hover:z-40 transition-all duration-500" src={AlwatobaImg} alt="Imagen fondo"/>
        <NavLink className="absolute -bottom-20 border border-amber-500 hover:border-amber-300 rounded-2xl p-4 hover:pl-16 hover:pr-16 hover:text-lg font-semibold transition-all duration-500" onClick={()=>clickEvHome()} to="/Catalog"><span className="">CATÁLOGO</span></NavLink>
      </div>      
      {/* Frase 2 */}
      <div className="relative row-start-5 col-start-3 col-span-2 h-32 w-1/2">
        <img className="h-full w-full rounded-full" src={AlwatobaImg} alt="Imagen fondo"/>
        <span className="absolute bg-black bottom-1/3 left-1/2 -translate-x-1/2 whitespace-nowrap sm:text-2xl text-xs font-bold text-amber-400">"Trabajando de la mano de las comunidades locales"</span>
      </div>
    </motion.div>
  )
}
