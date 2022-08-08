import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import ReactPlayer from 'react-player'
import AlwatobaImg from '../media/AlwatobaBrand.png'

export default function Home() {
  return (
    <motion.div className="sm:bg-amber-200 md:bg-blue-800 lg:bg-amber-700 bg-green-400 grid gap-y-20 grid-cols-6 pt-20  place-items-center" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      {/* Presentacion */}
      <div className="row-start-1 col-start-3 col-span-2 border border-amber-300 p-5 rounded-2xl">
        <ReactPlayer width={"70vw"} height={"35vw"} url='https://www.youtube.com/watch?v=cFPkypL_ap8' controls="true" />
      </div>      
      {/* Frase 1 */}
      <div className="row-start-2 col-start-3 col-span-2 h-32 w-1/2 relative ">
        <img className="h-full w-full rounded-full" src={AlwatobaImg} alt="Imagen fondo"/>
        <span className="absolute bg-black bottom-1/3 left-1/2 -translate-x-1/2 whitespace-nowrap sm:text-2xl text-md font-bold text-amber-400">"Conscientes de nuestro impacto en la Cultura"</span>
      </div>
      {/* Categorias Productos */}
      <div className="flex flex-row flex-wrap gap-y-12 justify-center col-span-7 gap-x-12 row-start-3 text-center">

        <div className="relative bg-slate-500">
          <img className="sm:h-96 sm:w-52 h-52 w-36" src={AlwatobaImg} alt="Imagen de categoria de producto"/>
          <NavLink className="absolute bg-slate-500 w-3/4 sm:h-1/6 h-fit pb-5 -bottom-6 left-1/2 -translate-x-1/2" to="/Catalog">
            <span className="text-amber-400 relative top-2 sm:text-lg  font-semibold">Categoria1</span><br/>
            <span className="text-amber-400 relative top-1 text-sm">mini descripcion </span>       
          </NavLink>         
        </div>
        <div className="relative bg-slate-500">
          <img className="sm:h-96 sm:w-52 h-52 w-36" src={AlwatobaImg} alt="Imagen de categoria de producto"/>
          <NavLink className="absolute bg-slate-500 w-3/4 sm:h-1/6 h-fit pb-5 -bottom-6 left-1/2 -translate-x-1/2" to="/Catalog">
            <span className="text-amber-400 relative top-2 sm:text-lg  font-semibold">Categoria2</span><br/>
            <span className="text-amber-400 relative top-1 text-sm">mini descripcion </span>       
          </NavLink>         
        </div>
        <div className="relative bg-slate-500">
          <img className="sm:h-96 sm:w-52 h-52 w-36" src={AlwatobaImg} alt="Imagen de categoria de producto"/>
          <NavLink className="absolute bg-slate-500 w-3/4 sm:h-1/6 h-fit pb-5 -bottom-6 left-1/2 -translate-x-1/2" to="/Catalog">
            <span className="text-amber-400 relative top-2 sm:text-lg  font-semibold">Categoria3</span><br/>
            <span className="text-amber-400 relative top-1 text-sm">mini descripcion </span>       
          </NavLink>         
        </div>
        <div className="relative bg-slate-500">
          <img className="sm:h-96 sm:w-52 h-52 w-36" src={AlwatobaImg} alt="Imagen de categoria de producto"/>
          <NavLink className="absolute bg-slate-500 w-3/4 sm:h-1/6 h-fit pb-5 -bottom-6 left-1/2 -translate-x-1/2" to="/Catalog">
            <span className="text-amber-400 relative top-2 sm:text-lg  font-semibold">Categoria4</span><br/>
            <span className="text-amber-400 relative top-1 text-sm">mini descripcion </span>       
          </NavLink>         
        </div>
      </div>
      {/* Frase 2 */}
      <div className="row-start-4 col-start-3 col-span-2 h-32 w-1/2 relative">
        <img className="h-full w-full rounded-full" src={AlwatobaImg} alt="Imagen fondo"/>
        <span className="absolute bg-black bottom-1/3 left-1/2 -translate-x-1/2 whitespace-nowrap sm:text-2xl text-md font-bold text-amber-400">"Trabajando de la mano de las comunidades locales"</span>
      </div>
      {/* Blogs */}
      <div className="flex flex-wrap justify-evenly gap-y-10 row-start-5 col-start-2 col-span-4">

        <div className="relative h-52 w-96 border border-black">
          <img className="h-full w-full" src={AlwatobaImg} alt="Imagen fondo"/>
          <span className="absolute bottom-6 text-2xl font-semibold whitespace-pre">BLOG EJEMPLO 1</span>
          <NavLink to="/"><span className="absolute bottom-1 right-1 text-md p-1 rounded-lg border  hover:text-lg border-black transition-all">VER</span></NavLink>
        </div>
        <div className="relative h-52 w-96 border border-black">
          <img className="h-full w-full" src={AlwatobaImg} alt="Imagen fondo"/>
          <span className="absolute bottom-6 text-2xl font-semibold whitespace-pre">BLOG EJEMPLO 1</span>
          <NavLink to="/"><span className="absolute bottom-1 right-1 text-md p-1 rounded-lg border  hover:text-lg border-black transition-all">VER</span></NavLink>
        </div>
        <div className="relative h-52 w-96 border border-black">
          <img className="h-full w-full" src={AlwatobaImg} alt="Imagen fondo"/>
          <span className="absolute bottom-6 text-2xl font-semibold whitespace-pre">BLOG EJEMPLO 1</span>
          <NavLink to="/"><span className="absolute bottom-1 right-1 text-md p-1 rounded-lg border  hover:text-lg border-black transition-all">VER</span></NavLink>
        </div>
        <div className="relative h-52 w-96 border border-black">
          <img className="h-full w-full" src={AlwatobaImg} alt="Imagen fondo"/>
          <span className="absolute bottom-6 text-2xl font-semibold whitespace-pre">BLOG EJEMPLO 1</span>
          <NavLink to="/"><span className="absolute bottom-1 right-1 text-md p-1 rounded-lg border  hover:text-lg border-black transition-all">VER</span></NavLink>
        </div>

        <div className="relative h-52 w-96 border border-black">
          <img className="h-full w-full" src={AlwatobaImg} alt="Imagen fondo"/>
          <span className="absolute bottom-6 text-2xl font-semibold whitespace-pre">BLOG EJEMPLO 1</span>
          <NavLink to="/"><span className="absolute bottom-1 right-1 text-md p-1 rounded-lg border  hover:text-lg border-black transition-all">VER</span></NavLink>
        </div>
        <div className="relative h-52 w-96 border border-black">
          <img className="h-full w-full" src={AlwatobaImg} alt="Imagen fondo"/>
          <span className="absolute bottom-6 text-2xl font-semibold whitespace-pre">BLOG EJEMPLO 1</span>
          <NavLink to="/"><span className="absolute bottom-1 right-1 text-md p-1 rounded-lg border  hover:text-lg border-black transition-all">VER</span></NavLink>
        </div>
      </div>
    </motion.div>
  )
}
