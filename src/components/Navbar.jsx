import React from 'react';
import {motion} from 'framer-motion';
import {NavLink} from 'react-router-dom';
export default function Navbar() {
  return (
    <motion.div className="bg-amber-200" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <NavLink className="bg-green-900" to="/">ImgBrand</NavLink>
      <NavLink className="bg-amber-200 ml-4 mr-4 sm:bg-amber-700" to="/">Inicio</NavLink>
      <NavLink className="bg-amber-200" to="/Catalog">Catalogo</NavLink>
    </motion.div>
  )
}
