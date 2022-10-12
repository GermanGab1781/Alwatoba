import React from 'react'
import {motion} from 'framer-motion'
import { Outlet,Link,NavLink } from 'react-router-dom';

export default function CatalogComp({titulo,categorias,goBack,close,buttonState,tree}) {
  return (
    <motion.div className="md:pt-10 pt-20 grid grid-cols-8 custom-ColorMain text-center" initial={{opacity:1}} animate={{opacity:1}} exit={{opacity:1}}>
        {/* Titulo */}
        <span className="row-start-1 md:col-start-3 col-start-1 md:col-span-6 col-span-8 font-bold md:text-5xl sm:text-3xl text-2xl sm:mt-5 py-5 rounded-t-3xl font-comfortaa text-center">
          {titulo}
        </span>
        {/* Link Tree */}
          {tree &&           
          <div className="row-start-2 md:col-start-3 col-start-1 md:col-span-7 col-span-8 text-start md:ml-0 ml-5 font-notethis custom-Color4 md:text-xl ">
            {tree.map((branch,index)=>{
              return(
                <span key={index}>
                  <NavLink key={index} className="hover:text-amber-900" to={branch.pathTo}>{branch.nombre}</NavLink>
                  <span> / </span>
                </span>
              )
            })}
          </div>
          }
        {/* Menu lateral Izq */}
        <div className={buttonState 
          ?"custom-BgColor4 fixed flex flex-col pt-32 justify-start z-20 sm:gap-y-6 gap-y-5 sm:w-1/5 w-44 h-full visible sm:text-2xl text-2xl font-notethis md:border-r-0 transition-all duration-500 sm:overflow-hidden"
          :"custom-BgColor4 fixed flex flex-col pt-32 justify-start z-20 sm:gap-y-6 gap-y-5 sm:w-1/5 w-0 h-full sm:visible invisible sm:text-2xl text-2xl font-notethis transition-all duration-500 delay-150 sm:overflow-hidden"
        }>
          {/* Map de Categorias */}
          {categorias.map((categoria,index)=>{
            return(
              <Link key={index} className={buttonState ?"z-10 opacity-100 visible hover:text-slate-200 hover:scale-105 border-y-2 custom-BorderColor3 transition-all ease-in-out duration-300 sm:delay-75 delay-300":"sm:opacity-100 hover:text-slate-200 hover:scale-105 border-y-2 custom-BorderColor3 opacity-0 sm:visible invisible transition-all ease-in-out duration-300"}
              to={categoria.pathTo}>{categoria.nombre}</Link>
            )           
          })}
          {/* Boton de retroceso */}
          <Link className={buttonState ?"z-10 text-slate-100 opacity-100 visible hover:text-slate-200 hover:scale-105 border-y-2 custom-BorderColor3 transition-all ease-in-out duration-300 sm:delay-75 delay-300":"sm:opacity-100 hover:text-slate-200 text-slate-100 hover:scale-105 border-y-2 custom-BorderColor3 opacity-0 sm:visible invisible transition-all ease-in-out duration-300"} 
          to={goBack.pathTo}>{goBack.nombre}</Link>         
          <button className={buttonState 
            ?"custom-BgColor4 sm:invisible visible absolute -right-11 bottom-1/2 rounded-tr-3xl rounded-br-3xl py-5 px-5 transition-all duration-500 delay-75"
            :"custom-BgColor4 sm:invisible visible absolute -right-11 bottom-1/3 rounded-tr-3xl rounded-br-3xl py-5 px-4 transition-all duration-500 delay-75"
          } onClick={close}>
            {buttonState ? <span>C<br/>E<br/>R<br/>R<br/>A<br/>R</span> : <span>C<br/>A<br/>T<br/>E<br/>G<br/>O<br/>R<br/>I<br/>A<br/>S</span>}
          </button>
        </div>
        {/* Catalogo */}
        <div className="3 sm:col-start-3 sm:col-span-7 col-start-1 col-span-8 min-h-screen max-h-fit border m-2 pl-2">
          <Outlet/>
        </div>
    </motion.div>
  )
}
