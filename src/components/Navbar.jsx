import React, { useState } from 'react';
import {motion} from 'framer-motion';
import {NavLink} from 'react-router-dom';
export default function Navbar(){
  const [navButton, setNavButton] = useState(true);
  return (
    <motion.div className={navButton 
    ?"sm:bg-amber-200 mb-20 bg-green-400 grid grid-rows-5 grid-cols-3 content-center fixed z-50 w-screen h-14 pt-3 transition-all ease-in-out duration-500 delay-500" 
    :"sm:bg-amber-200 bg-green-400 grid grid-rows-5 grid-cols-3 fixed z-50 w-screen h-screen pt-3 transition-all ease-in-out duration-500"}
    initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      
      <NavLink className="sm:ml-2 bg-green-900 ml-5 p-2 rounded-full row-start-0 row-end-1 col-start-1 col-end-1" to="/Alwatoba">ImgBrand</NavLink>
      <button onClick={()=>setNavButton(!navButton)} className="row-start-0 col-start-3  bg-white">OPEN</button>      
      <NavLink className={navButton 
        ?"invisible text-center row-start-1 col-start-2 transition-all ease-in-out duration-500"
        :"visible text-center bg-amber-700 ml-5 p-2 row-start-1 col-start-2 transition-all ease-in-out duration-500 delay-500"}
      to="/" onClick={()=>setNavButton(!navButton)}>Inicio</NavLink>
      <NavLink className={navButton 
        ?"invisible text-center row-start-2 col-start-2 transition-all ease-in-out duration-500"
        :"visible text-center bg-amber-900 ml-5 p-2 row-start-2 col-start-2 col-start- transition-all ease-in-out duration-500 delay-500"} 
      to="/Catalog" onClick={()=>setNavButton(!navButton)}>Catalogo</NavLink>
      
    </motion.div>
  )
}
