import React, { useState } from 'react';
import {motion} from 'framer-motion'
import { Outlet,Link, NavLink } from 'react-router-dom';


export default function CatalogAutoctonaLifestyle() {
  const [menuButton, setMenuButton] = useState(true)
  return (
    <motion.div className="md:pt-10 pt-20 grid grid-cols-8 custom-ColorMain text-center" initial={{opacity:1}} animate={{opacity:1}} exit={{opacity:1}}>
        <span className="row-start-1 sm:col-start-5 sm:col-span-3 col-start-4 col-span-3 font-bold md:text-7xl sm:text-5xl text-4xl sm:mt-5 py-5 rounded-t-3xl font-mathlete">
          Lifestyle
        </span>
          {/* Link Tree */}
          <div className="row-start-1 md:col-start-3 col-start-1 col-end-5 md:col-end-5 md:mt-28 mt-10 md:ml-5 ml-3 text-start font-notethis custom-Color4 md:text-xl ">
          <NavLink className="hover:text-amber-900" to="/Catalog">Inicio</NavLink>
          <span> / </span>
          <NavLink className="hover:text-amber-900" to ="/Catalog/Autoctona">Autoctona</NavLink>
          <span> / </span>
        </div>
        {/* Menu lateral Izq */}
        <div className={menuButton 
          ?"custom-BgColor4 sm:relative fixed flex flex-col pt-32 justify-start z-40 sm:row-start-1 sm:row-end-3 sm:col-start-1 sm:col-span-2 sm:gap-y-6 gap-y-5 sm:mt-0 mt-4 sm:w-full w-44 h-full visible sm:text-2xl text-2xl font-notethis md:border-r-0 transition-all duration-500 sm:overflow-hidden"
          :"custom-BgColor4 sm:relative fixed flex flex-col pt-32 justify-start z-40 sm:row-start-1 sm:row-end-3 sm:col-start-1 sm:col-span-2 sm:gap-y-6 gap-y-5 sm:mt-0 mt-4 w-0 h-full invisible sm:text-2xl text-2xl font-notethis transition-all duration-500 delay-150"
        }>
        
          <Link className={menuButton ?"z-10 opacity-100 visible hover:text-slate-200 hover:scale-105 border-y-2 custom-BorderColor3 transition-all ease-in-out duration-300 sm:delay-75 delay-300":"opacity-0 invisible transition-all ease-in-out duration-300"} to='Categ1'>Chaguar</Link>
          <Link className={menuButton ?"z-10 opacity-100 visible hover:text-slate-200 hover:scale-105 border-y-2 custom-BorderColor3 transition-all ease-in-out duration-300 sm:delay-75 delay-300":"opacity-0 invisible transition-all ease-in-out duration-300"} to='Categ2'>Carandillo</Link>
          <Link className={menuButton ?"z-10 opacity-100 visible hover:text-slate-200 hover:scale-105 border-y-2 custom-BorderColor3 transition-all ease-in-out duration-300 sm:delay-75 delay-300":"opacity-0 invisible transition-all ease-in-out duration-300"} to='Categ1'>Palma y totora</Link>
          <Link className={menuButton ?"z-10 opacity-100 visible hover:text-slate-200 hover:scale-105 border-y-2 custom-BorderColor3 transition-all ease-in-out duration-300 sm:delay-75 delay-300":"opacity-0 invisible transition-all ease-in-out duration-300"} to='Categ1'>Palo Santo</Link>
          <Link className={menuButton ?"z-10 opacity-100 visible hover:text-slate-200 hover:scale-105 border-y-2 custom-BorderColor3 transition-all ease-in-out duration-300 sm:delay-75 delay-300":"opacity-0 invisible transition-all ease-in-out duration-300"} to='Categ1'>Diseño</Link>
          <Link className={menuButton ?"z-10 text-slate-100 opacity-100 visible hover:text-slate-200 hover:scale-105 border-y-2 custom-BorderColor3 transition-all ease-in-out duration-300 sm:delay-75 delay-300":"opacity-0 invisible transition-all ease-in-out duration-300"} to='/Catalog/Autoctona'>Volver</Link>
          <button className={menuButton 
            ?"custom-BgColor4 sm:invisible visible absolute -right-11 bottom-1/2 rounded-tr-3xl rounded-br-3xl py-5 px-5 transition-all duration-500 delay-75"
            :"custom-BgColor4 sm:invisible visible absolute -right-11 bottom-1/3 rounded-tr-3xl rounded-br-3xl py-5 px-4 transition-all duration-500 delay-75"
          } onClick={()=>setMenuButton(!menuButton)}>
            {menuButton ? <span>C<br/>E<br/>R<br/>R<br/>A<br/>R</span> : <span>C<br/>A<br/>T<br/>E<br/>G<br/>O<br/>R<br/>I<br/>A<br/>S</span>}
          </button>
        </div>
        {/* Catalogo */}
        <div className="row-start-2 sm:col-start-3 sm:col-span-7 col-start-1 col-span-8 min-h-screen max-h-fit border m-2 pl-2">
          <Outlet/>
        </div>
    </motion.div>
  )
}
