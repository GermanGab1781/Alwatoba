import React, { useState } from 'react';
import {motion} from 'framer-motion';
import {NavLink} from 'react-router-dom';
import {FaBars} from 'react-icons/fa'
export default function Navbar(){
  const [navButton, setNavButton] = useState(true);
  return (
    <motion.div className={navButton 
      ?"flex flex-col bg-slate-50 fixed z-50 w-screen md:h-10 h-10 md:py-10 py-6 place-content-center transition-all ease-in-out duration-1000 delay-75" 
      :"flex flex-col custom-BgColorMain custom-Color4 fixed z-50 w-screen h-screen md:py-2 place-content-center  transition-all ease-in-out duration-1000"}
    animate={{opacity:1}} exit={{opacity:0}}>
      <div className='flex flex-row place-content-between md:px-10 px-5 absolute top-2 w-screen'>        
        {/* img Brand */}
        <NavLink onClick={()=>setNavButton(true)} className=" text-center transition-all delay-75" to="/Alwatoba"><span className="sm:h-full sm:w-full w-1/2 h-full font-bold sm:text-6xl text-3xl m-auto font-comfortaa" >Alwatoba</span></NavLink>
        {/* Nav Opener */}      
        <button onClick={()=>setNavButton(!navButton)} className=" hover:text-slate-600 transition-all delay-75 "><FaBars className="sm:w-10 sm:h-12 h-10 w-8"/></button>      
      </div>
      {/* Nav Items */}
      <div className={navButton 
        ?"invisible flex flex-col mt-5 h-screen place-content-evenly sm:whitespace-nowrap text-center opacity-0 lg:text-4xl text-3xl sm:font-semibold font-bold transition-all ease-in-out duration-500 font-notethis"
        :"visible flex flex-col mt-5 h-screen place-content-evenly sm:whitespace-nowrap text-center opacity-100 lg:text-4xl text-3xl sm:font-semibold font-bold transition-all ease-in-out duration-500 delay-500 font-notethis"
      }>
        <>
        <NavLink className="text-center cursor-pointer md:text-5xl text-4xl custom-Color4 hover:font-bold transition-all delay-75 font-comfortaa" to="/Alwatoba" onClick={()=>setNavButton(!navButton)}>Inicio</NavLink>
        <NavLink className="hover:text-slate-50 transition-all delay-75" to="/Blogs" onClick={()=>setNavButton(!navButton)}>Nosotras</NavLink>
        <NavLink className="hover:text-slate-50 transition-all delay-75" to="/Catalog/All" onClick={()=>setNavButton(!navButton)}>Catalogo</NavLink>
        <NavLink className="hover:text-slate-50 transition-all delay-75" to="/Catalog/Autoctona/all" onClick={()=>setNavButton(!navButton)}>Indumentaria Autoctona</NavLink>
        <NavLink className="hover:text-slate-50 transition-all delay-75" to="/Catalog/Colecciones/all" onClick={()=>setNavButton(!navButton)}>Colecciones</NavLink>
        <NavLink className="hover:text-slate-50 transition-all delay-75" to="/Catalog/ArteYDisenio/all" onClick={()=>setNavButton(!navButton)}>Arte y Diseño</NavLink>
        <span className="text-center cursor-pointer md:text-5xl text-4xl custom-Color4 hover:font-bold transition-all delay-75 mt-10 font-comfortaa" onClick={()=>setNavButton(!navButton)}>Volver</span>
        </>
        <NavLink className="hover:text-slate-50 text-xl absolute right-10 bottom-5 transition-all delay-75 font-comfortaa" to="/login" onClick={()=>setNavButton(!navButton)}>Admin</NavLink>
      </div>
      
    </motion.div>
  )
}

// sm:text-red-800 md:text-amber-400 lg:text-lime-500 xl:text-sky-500 2xl:text-violet-700 