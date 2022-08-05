import React, { useState } from 'react';
import {motion} from 'framer-motion';
import {NavLink} from 'react-router-dom';
import {FaBars} from 'react-icons/fa'
import {BsFillCartFill} from 'react-icons/bs'
import AlwatobaImg from '../media/AlwatobaBrand.png'
export default function Navbar(){
  const [navButton, setNavButton] = useState(true);
  return (
    <motion.div className={navButton 
      ?"sm:bg-amber-200 bg-green-400 grid grid-rows-5 grid-cols-9 content-center fixed z-50 w-screen h-10 p-8 pt-8 transition-all ease-in-out duration-500 delay-75" 
      :"sm:bg-amber-200 bg-green-400 grid grid-rows-5 grid-cols-9 content-center fixed z-50 w-screen h-screen p-8 pt-9 transition-all ease-in-out duration-500"}
    animate={{opacity:1}} exit={{opacity:0}}>
      
      <NavLink onClick={()=>setNavButton(true)} className="sm:ml-2 ml-5 row-start-0 row-end-1 col-start-1 col-end-1" to="/Alwatoba"><img className="h-10 w-full" src={AlwatobaImg} alt="Marca de la empresa" /></NavLink>
      <div className="grid grid-cols-2 row-start-0 col-start-10">
        <button onClick={()=>setNavButton(!navButton)} className="col-start-2 place-self-center "><FaBars className="w-1/2 h-10"/></button>
        <NavLink className="row-start-1 col-start-1" to="/"><BsFillCartFill className="place-self-center w-1/2 h-12" /></NavLink>      
      </div>  
      <NavLink className={navButton 
        ?"invisible text-center row-start-1 col-start-4 col-end-7 transition-all ease-in-out duration-100"
        :"visible text-center bg-amber-700 ml-5 p-2 row-start-1 col-start-4 col-end-7 transition-all ease-in-out duration-500 delay-300"}
      to="/" onClick={()=>setNavButton(!navButton)}>Inicio</NavLink>
      <NavLink className={navButton 
        ?"invisible text-center row-start-2 col-start-4 col-end-7 transition-all ease-in-out duration-100"
        :"visible text-center bg-amber-900 ml-5 p-2 row-start-2 col-start-4 col-end-7 transition-all ease-in-out duration-500 delay-300"} 
      to="/Catalog" onClick={()=>setNavButton(!navButton)}>Catalogo</NavLink>
      <NavLink className={navButton 
        ?"invisible text-center row-start-3 col-start-4 col-end-7 transition-all ease-in-out duration-100"
        :"visible text-center bg-amber-900 ml-5 p-2 row-start-3 col-start-4 col-end-7 transition-all ease-in-out duration-500 delay-300"} 
      to="/Catalog" onClick={()=>setNavButton(!navButton)}>Catalogo</NavLink>
      <NavLink className={navButton 
        ?"invisible text-center row-start-4 col-start-4 col-end-7 transition-all ease-in-out duration-100"
        :"visible text-center bg-amber-900 ml-5 p-2 row-start-4 col-start-4 col-end-7 transition-all ease-in-out duration-500 delay-300"} 
      to="/Catalog" onClick={()=>setNavButton(!navButton)}>Catalogo</NavLink>
      
    </motion.div>
  )
}
