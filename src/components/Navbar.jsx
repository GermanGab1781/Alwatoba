import React, { useState } from 'react';
import {motion} from 'framer-motion';
import {NavLink} from 'react-router-dom';
import {FaBars} from 'react-icons/fa'
export default function Navbar(){
  const [navButton, setNavButton] = useState(true);
  return (
    <motion.div className={navButton 
      ?"flex flex-col bg-slate-50 fixed z-40 w-screen md:h-10 h-10 md:py-8 py-7 place-content-center transition-all ease-in-out duration-1000 delay-75" 
      :"flex flex-col custom-BgColorMain custom-Color4 fixed z-50 w-screen h-screen md:py-2 place-content-center  transition-all ease-in-out duration-1000"}
    animate={{opacity:1}} exit={{opacity:0}}>
      <div className='flex flex-row place-content-between md:px-10 px-5 absolute top-2 w-screen'>        
        {/* img Brand */}
        <NavLink onClick={()=>setNavButton(true)} className="my-auto" to="/Alwatoba"><span className="sm:h-full sm:w-full w-1/2 h-full sm:text-3xl text-xl">Alwatoba</span></NavLink>
        {/* Nav Opener */}      
        <button onClick={()=>setNavButton(!navButton)} className=" hover:text-slate-600 transition-all delay-75 "><FaBars className="sm:w-10 sm:h-12 h-10 w-8"/></button>      
      </div>
      {/* Nav Items */}
      <div className={navButton 
        ?"invisible flex flex-col mt-5 h-screen place-content-evenly sm:whitespace-nowrap text-center opacity-0 lg:text-4xl text-3xl sm:font-semibold font-bold transition-all ease-in-out duration-500"
        :"visible flex flex-col mt-5 h-screen place-content-evenly sm:whitespace-nowrap text-center opacity-100 lg:text-4xl text-3xl sm:font-semibold font-bold transition-all ease-in-out duration-500 delay-500"
      }>
        <>
        <NavLink className="text-center cursor-pointer text-5xl custom-Color4 transition-all delay-75" to="/Alwatoba" onClick={()=>setNavButton(!navButton)}>Inicio</NavLink>
        <NavLink className="hover:text-slate-50 text-slate-700 xl:text-4xl text-3xl transition-all delay-75" to="/Catalog/All" onClick={()=>setNavButton(!navButton)}>Catalogo</NavLink>
        <NavLink className="hover:text-slate-50 text-slate-700 xl:text-3xl text-2xl transition-all delay-75" to="/Blogs" onClick={()=>setNavButton(!navButton)}>Nosotras</NavLink>
        <NavLink className="hover:text-slate-50 text-slate-700 xl:text-3xl text-2xl transition-all delay-75" to="/Catalog/Autoctona/all" onClick={()=>setNavButton(!navButton)}>Indumentaria Autoctona</NavLink>
        <NavLink className="hover:text-slate-50 text-slate-700 xl:text-3xl text-2xl transition-all delay-75" to="/Catalog/Colecciones/all" onClick={()=>setNavButton(!navButton)}>Colecciones</NavLink>
        <NavLink className="hover:text-slate-50 text-slate-700 xl:text-3xl text-3xl transition-all delay-75" to="/Catalog/ArteYDisenio/all" onClick={()=>setNavButton(!navButton)}>Arte y Diseño</NavLink>
        <span className="text-center cursor-pointer text-5xl custom-Color4 transition-all delay-75 mt-10" onClick={()=>setNavButton(!navButton)}>Cerrar</span>
        </>
        <NavLink className="hover:text-slate-50 text-xl absolute right-10 bottom-5 transition-all delay-75" to="/login" onClick={()=>setNavButton(!navButton)}>Admin</NavLink>
      </div>
      
    </motion.div>
  )
}

// sm:text-red-800 md:text-amber-400 lg:text-lime-500 xl:text-sky-500 2xl:text-violet-700 