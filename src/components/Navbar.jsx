import React, { useState } from 'react';
import {motion} from 'framer-motion';
import {NavLink} from 'react-router-dom';
export default function Navbar(){
  function changeState() {
    setNavButton(!navButton);
  }
  const [navButton, setNavButton] = useState(true);
  return (
    <motion.div className="bg-green-400 sm:bg-amber-200" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <NavLink className="bg-green-900" to="/Alwatoba">ImgBrand</NavLink>
      <NavLink className="bg-amber-200 sm:bg-amber-700" to="/">Inicio</NavLink>
      <NavLink className={navButton ? "bg-amber-400" : "bg-amber-900"} to="/Catalog">Catalogo</NavLink>
      <button onClick={()=>setNavButton(!navButton)} className="sm:hidden">ASDADAS</button>
    </motion.div>
  )
}
