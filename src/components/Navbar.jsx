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
      ?"sm:bg-amber-200 bg-green-400 grid grid-rows-5 grid-cols-9 content-center fixed z-50 w-screen h-10 p-8 pt-8 transition-all ease-in-out duration-1000 delay-75" 
      :"sm:bg-amber-200 bg-green-400 grid grid-rows-5 grid-cols-9 content-center fixed z-50 w-screen h-screen p-8 pt-8 transition-all ease-in-out duration-1000"}
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
        ?"invisible grid sm:col-start-1 sm:col-span-10 col-start-4 text-center gap-y-0 opacity-0 transition-all ease-in-out duration-500"
        :"visible grid sm:col-start-1 sm:col-span-10 col-start-4 text-center sm:gap-y-12 gap-y-0 opacity-1 transition-all ease-in-out duration-1000 delay-500"
      }>
        <NavLink className="whitespace-nowrap row-start-1 sm:text-5xl sm:p-2 p-1" to="/" onClick={()=>clickEv()}>Inicio</NavLink>
        <NavLink className="whitespace-nowrap row-start-2 sm:text-5xl sm:p-2 p-1" to="/" onClick={()=>clickEv()}>Catalogo</NavLink>
        <NavLink className="whitespace-nowrap row-start-3 sm:text-5xl sm:p-2 p-1" to="/" onClick={()=>clickEv()}>Collares Mapuches</NavLink>
        <NavLink className="whitespace-nowrap row-start-4 sm:text-5xl sm:p-2 p-1" to="/" onClick={()=>clickEv()}>Llaveros al por mayor</NavLink>
        <NavLink className="whitespace-nowrap row-start-5 sm:text-5xl sm:p-2 p-1" to="/" onClick={()=>clickEv()}>Pedidos Especiales</NavLink>
        <NavLink className="whitespace-nowrap row-start-6 sm:text-5xl sm:p-2 p-1" to="/" onClick={()=>clickEv()}>Mas vendidos</NavLink>
        <NavLink className="whitespace-nowrap row-start-7 sm:text-5xl sm:p-2 p-1 mt-10" to="/" onClick={()=>clickEv()}>Volver</NavLink>
      </div>
      
      
    </motion.div>
  )
}
