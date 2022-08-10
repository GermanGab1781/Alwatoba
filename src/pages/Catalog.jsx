import React, { useState } from 'react';
import {motion} from 'framer-motion'
import { NavLink, Outlet,Link } from 'react-router-dom';
import AlwatobaImg from '../media/AlwatobaBrand.png'

export default function Catalog() {
  const [menuButton, setMenuButton] = useState(true)
  return (
    <motion.div className="bg-amber-300 pt-16 grid grid-cols-8 text-center" initial={{opacity:1}} animate={{opacity:1}} exit={{opacity:1}}>
        <span className="row-start-1 sm:col-span-8 col-start-3 col-end-8 font-bold text-2xl sm:mt-0 mt-5">
          Nuestros Productos
        </span>
        {/* Menu lateral Izq */}
        <div className={menuButton 
          ?"sm:relative fixed flex flex-col justify-start bg-amber-200 sm:row-start-2 sm:col-start-1 sm:col-span-1 sm:mt-0 mt-5 sm:w-full w-24 h-full visible transition-all duration-500 "
          :"sm:relative fixed flex flex-col justify-start bg-amber-200 sm:row-start-2 sm:col-start-1 sm:col-span-1 sm:mt-0 mt-5 w-0 h-full invisible transition-all duration-500  delay-150"
        }>
          <Link className={menuButton ?"opacity-100 visible transition-all ease-in-out duration-300 delay-150":"opacity-0 invisible transition-all ease-in-out duration-300"} to=''>Reset</Link> 
          <Link className={menuButton ?"opacity-100 visible transition-all ease-in-out duration-300 delay-150":"opacity-0 invisible transition-all ease-in-out duration-300"} to='Categ1'>Categ1</Link>
          <button className="visible" onClick={()=>setMenuButton(!menuButton)}>CERRAR Y ABRIR MENU</button>
        </div>
        {/* Catalogo */}
        <div className='sm:bg-amber-400 row-start-2 sm:col-start-2 sm:col-span-7 col-start-3 col-end-8 min-h-screen max-h-fit'>
          <Outlet/>
        </div>
    </motion.div>
  )
}
