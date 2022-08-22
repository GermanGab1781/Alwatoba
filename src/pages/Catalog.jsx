import React, { useState } from 'react';
import {motion} from 'framer-motion'
import { Outlet,Link } from 'react-router-dom';


export default function Catalog() {
  const [menuButton, setMenuButton] = useState(true)
  return (
    <motion.div className="bg-amber-300 pt-16 pb-10 grid grid-cols-8 text-center" initial={{opacity:1}} animate={{opacity:1}} exit={{opacity:1}}>
        <span className="row-start-1 col-span-8 font-bold text-2xl sm:mt-0 mt-5">
          Nuestros Productos
        </span>
        {/* Menu lateral Izq */}
        <div className={menuButton 
          ?"sm:relative fixed flex flex-col justify-start bg-amber-200 z-40 sm:row-start-2 sm:col-start-1 sm:col-span-1 sm:mt-0 mt-4 sm:w-full w-24 h-full visible transition-all duration-500"
          :"sm:relative fixed flex flex-col justify-start bg-amber-200 z-40 sm:row-start-2 sm:col-start-1 sm:col-span-1 sm:mt-0 mt-4 w-0 h-full invisible transition-all duration-500  delay-150"
        }>
          <Link className={menuButton ?"opacity-100 visible transition-all ease-in-out duration-300 delay-300":"opacity-0 invisible transition-all ease-in-out duration-300"} to=''>Reset</Link> 
          <Link className={menuButton ?"opacity-100 visible transition-all ease-in-out duration-300 delay-300":"opacity-0 invisible transition-all ease-in-out duration-300"} to='Categ1'>Categoria 1</Link>
          <Link className={menuButton ?"opacity-100 visible transition-all ease-in-out duration-300 delay-300":"opacity-0 invisible transition-all ease-in-out duration-300"} to='Categ2'>Categoria 2</Link>
          <button className={menuButton 
            ?"sm:invisible visible absolute bg-amber-200 -right-7 bottom-1/2 rounded-tr-full rounded-br-full pr-4 pl-1 transition-all duration-500 delay-75"
            :"sm:invisible visible absolute bg-amber-200 -right-7 bottom-3/4 rounded-tr-full rounded-br-full pr-4 pl-1 transition-all duration-500 delay-75"
          } onClick={()=>setMenuButton(!menuButton)}>F<br/>I<br/>L<br/>T<br/>R<br/>A<br/>R</button>
        </div>
        {/* Catalogo */}
        <div className="bg-amber-400 row-start-2 sm:col-start-2 sm:col-span-7 col-start-1 col-end-9 min-h-screen max-h-fit pl-2">
          <Outlet/>
        </div>
    </motion.div>
  )
}
