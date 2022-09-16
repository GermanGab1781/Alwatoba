import React, { useState } from 'react';
import {motion} from 'framer-motion';
import {NavLink} from 'react-router-dom';
import {FaBars} from 'react-icons/fa'
export default function Navbar(){
  function clickEv() {
    setNavButton(!navButton);
    window.scrollTo(0, 0);
  }
  const [navButton, setNavButton] = useState(true);
  return (
    <motion.div className={navButton 
      ?"bg-slate-50 grid grid-rows-1 grid-cols-9 content-center fixed z-50 w-screen h-10 sm:p-8 sm:pt-8 p-10 transition-all ease-in-out duration-1000 delay-75" 
      :"custom-BgColorMain custom-Color4 grid grid-rows-1 grid-cols-9 content-center fixed z-50 w-screen h-screen sm:p-8 sm:pt-8 p-10 transition-all ease-in-out duration-1000"}
    animate={{opacity:1}} exit={{opacity:0}}>
      
      {/* img Brand */}
      <NavLink onClick={()=>setNavButton(true)} className="sm:col-start-1 sm:col-end-2 sm:ml-2 ml-5 row-start-0 row-end-1 col-start-1 col-span-3 text-center hover:scale-110 transition-all delay-75" to="/Alwatoba"><span className="sm:h-full sm:w-full w-1/2 h-full font-bold text-6xl m-auto font-mathlete" >ALWATOBA</span></NavLink>
      {/* Nav Opener */}      
        <button onClick={()=>setNavButton(!navButton)} className="row-start-0 sm:col-start-9 col-start-8 hover:text-slate-600 sm:ml-10 ml-4  transition-all delay-75 px-10 "><FaBars className="sm:w-10 sm:h-12 h-10 w-8" /></button>      
      {/* Nav Items */}
      <div className={navButton 
        ?"invisible flex flex-col col-start-2 col-end-9 lg:gap-y-5 sm:gap-y-4 sm:mt-6 mt-5 gap-y-5 sm:whitespace-nowrap text-center  opacity-0 lg:text-4xl sm:text-2xl sm:font-semibold font-bold text-xl transition-all ease-in-out duration-500 font-notethis"
        :"visible flex flex-col col-start-2 col-end-9 lg:gap-y-5 sm:gap-y-4 sm:mt-6 mt-5 gap-y-5 sm:whitespace-nowrap text-center opacity-100 lg:text-4xl sm:text-2xl sm:font-semibold font-bold text-xl transition-all ease-in-out duration-500 delay-500 font-notethis"
      }>
        <NavLink className="text-center cursor-pointer text-5xl custom-Color4 hover:scale-110 hover:font-bold transition-all delay-75 mb-3" to="/Alwatoba" onClick={()=>clickEv()}>Inicio</NavLink>
        <NavLink className="hover:text-slate-50 transition-all delay-75" to="/Blogs" onClick={()=>clickEv()}>Blogs</NavLink>
        <NavLink className="hover:text-slate-50 transition-all delay-75" to="/Catalog" onClick={()=>clickEv()}>Catalogo</NavLink>
        <NavLink className="hover:text-slate-50 transition-all delay-75" to="/Product" onClick={()=>clickEv()}>Producto Ejemplo Page</NavLink>
        <span className="text-center cursor-pointer text-5xl custom-Color4 hover:scale-125 hover:font-bold transition-all delay-75 mt-6" onClick={()=>setNavButton(!navButton)}>Volver</span>
      </div>
    </motion.div>
  )
}
// eslint-disable-next-line
{/* sm:text-red-800 md:text-amber-400 lg:text-lime-500 xl:text-sky-500 2xl:text-violet-700 */}