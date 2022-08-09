import React from 'react';
import {motion} from 'framer-motion'
import { NavLink, Outlet,Link } from 'react-router-dom';
import AlwatobaImg from '../media/AlwatobaBrand.png'

export default function Catalog() {
  return (
    <motion.div className="bg-amber-300 pt-16 grid grid-cols-8 text-center" initial={{opacity:1}} animate={{opacity:1}} exit={{opacity:1}}>
        <span className="row-start-1 col-span-8 font-bold text-2xl">
          Nuestros Productos
        </span>
        {/* Menu lateral Izq */}
        <div className="bg-amber-200 row-start-2 col-start-1 col-span-1 h-screen">
          <Link to=''>Reset</Link> 
          <Link to='Categ1'>Categ1</Link>
        </div>
        {/* Catalogo */}
        <div className='bg-amber-400 row-start-2 col-start-2 col-span-7 h-screen'>
          <Outlet/>
        </div>
    </motion.div>
  )
}
