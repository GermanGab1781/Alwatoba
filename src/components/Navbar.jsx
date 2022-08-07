import React, { useState } from 'react';
import {motion} from 'framer-motion';
import {NavLink} from 'react-router-dom';
import {FaBars} from 'react-icons/fa'
import {BsFillCartFill} from 'react-icons/bs'
import AlwatobaImg from '../media/AlwatobaBrand.png'
export default function Navbar(){
  function clickEv() {
    setNavButton(!navButton);
    window.scrollTo(0, 0);
  }
  const [navButton, setNavButton] = useState(true);
  return (
    <motion.div className={navButton 
      ?"sm:bg-amber-200 md:bg-blue-800 lg:bg-amber-700 bg-green-400 grid grid-rows-1 grid-cols-10 content-center fixed z-50 w-screen h-10 p-8 pt-8 transition-all ease-in-out duration-1000 delay-75" 
      :"sm:bg-amber-200 md:bg-blue-800 lg:bg-amber-700 bg-green-400 grid grid-rows-1 grid-cols-10 content-center fixed z-50 w-screen h-screen p-8 pt-8 transition-all ease-in-out duration-1000"}
    animate={{opacity:1}} exit={{opacity:0}}>
      
      {/* img Brand */}
      <NavLink onClick={()=>setNavButton(true)} className="sm:ml-2 sm:col-span-2 ml-5 row-start-0 row-end-1 col-start-1 col-span-3" to="/Alwatoba"><img className="sm:h-10 sm:w-full w-1/2 h-full" src={AlwatobaImg} alt="Marca de la empresa" /></NavLink>
      {/* Botones Derecha */}
      <div className="grid row-start-0 col-start-10">        
        <NavLink onClick={()=>setNavButton(true)} className="sm:row-start-1 sm:col-start-1 row-start-1 col-start-1" to="/"><BsFillCartFill className="sm:w-8 sm:h-12 h-10 w-5" /></NavLink>
        <button onClick={()=>setNavButton(!navButton)} className="sm:row-start-1 sm:col-start-2 sm:ml-10 row-start-1 col-start-2 ml-4"><FaBars className="sm:w-10 sm:h-12 h-10 w-8"/></button>      
      </div>
      {/* Nav Items */}
      <div className={navButton 
        ?"invisible col-start-4 col-span-4 flex flex-col whitespace-nowrap text-center  opacity-0 lg:text-4xl sm:text-lg text-sm transition-all ease-in-out duration-500"
        :"visible col-start-4 col-span-4 flex flex-col whitespace-nowrap text-center opacity-100 lg:text-4xl sm:text-lg text-sm transition-all ease-in-out duration-500 delay-500"}>
        <NavLink className="lg:mt-5 md:mt-3 sm:mt-1 mt-0.5 font-medium hover:text-lime-500 transition-colors delay-75" to="/" onClick={()=>clickEv()}>Inicio</NavLink>
        <NavLink className="lg:mt-5 md:mt-3 sm:mt-1 mt-0.5 font-medium hover:text-lime-500 transition-colors delay-75" to="/" onClick={()=>clickEv()}>Catalogo</NavLink>
        <NavLink className="lg:mt-5 md:mt-3 sm:mt-1 mt-0.5 font-medium hover:text-lime-500 transition-colors delay-75" to="/" onClick={()=>clickEv()}>Collares Mapuches</NavLink>
        <NavLink className="lg:mt-5 md:mt-3 sm:mt-1 mt-0.5 font-medium hover:text-lime-500 transition-colors delay-75" to="/" onClick={()=>clickEv()}>Llaveros al por mayor</NavLink>
        <NavLink className="lg:mt-5 md:mt-3 sm:mt-1 mt-0.5 font-medium hover:text-lime-500 transition-colors delay-75" to="/" onClick={()=>clickEv()}>Pedidos Especiales</NavLink>
        <NavLink className="lg:mt-5 md:mt-3 sm:mt-1 mt-0.5 font-medium hover:text-lime-500 transition-colors delay-75" to="/" onClick={()=>clickEv()}>Mas vendidos</NavLink>
        <NavLink className="lg:mt-5 md:mt-3 sm:mt-1 mt-0.5 font-medium hover:text-lime-500 transition-colors delay-75" to="/" onClick={()=>clickEv()}>Volver</NavLink>
      </div>
      
    </motion.div>
  )
}
