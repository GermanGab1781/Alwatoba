import React, { useState } from 'react';
import {motion} from 'framer-motion'
import { Outlet,Link } from 'react-router-dom';


export default function Catalog() {
  const [menuButton, setMenuButton] = useState(true)
  return (
    <motion.div className="custom-BgColor1 pt-16 pb-10 grid grid-cols-8 custom-ColorMain text-center" initial={{opacity:1}} animate={{opacity:1}} exit={{opacity:1}}>
        <span className="custom-BgColor4 row-start-1 col-span-8 font-bold sm:text-5xl text-4xl sm:mt-5 py-5 rounded-t-3xl">
          Nuestros Productos
        </span>
        {/* Menu lateral Izq */}
        <div className={menuButton 
          ?"custom-BgColor4 sm:relative fixed flex flex-col pt-16 justify-start z-40 sm:row-start-2 sm:col-start-1 sm:col-span-1 sm:gap-y-6 gap-y-5 sm:mt-0 mt-4 sm:w-full w-44 h-full visible sm:text-2xl text-2xl border-r-2 custom-BorderColor2 transition-all duration-500"
          :"custom-BgColor4 sm:relative fixed flex flex-col pt-16 justify-start z-40 sm:row-start-2 sm:col-start-1 sm:col-span-1 sm:gap-y-6 gap-y-5 sm:mt-0 mt-4 w-0 h-full invisible sm:text-2xl text-2xl border-r-2 custom-BorderColor2 transition-all duration-500 delay-150"
        }>
          <>
          <Link className={menuButton ?"opacity-100 visible transition-all ease-in-out duration-300 delay-300":"opacity-0 invisible transition-all ease-in-out duration-300"} to=''>Reset</Link> 
          <Link className={menuButton ?"opacity-100 visible transition-all ease-in-out duration-300 delay-300":"opacity-0 invisible transition-all ease-in-out duration-300"} to='Categ1'>Categoria 1</Link>
          <Link className={menuButton ?"opacity-100 visible transition-all ease-in-out duration-300 delay-300":"opacity-0 invisible transition-all ease-in-out duration-300"} to='Categ2'>Categoria 2</Link>
          <Link className={menuButton ?"opacity-100 visible transition-all ease-in-out duration-300 delay-300":"opacity-0 invisible transition-all ease-in-out duration-300"} to='Categ1'>Categoria 3</Link>
          <Link className={menuButton ?"opacity-100 visible transition-all ease-in-out duration-300 delay-300":"opacity-0 invisible transition-all ease-in-out duration-300"} to='Categ2'>Categoria 4</Link>
          <Link className={menuButton ?"opacity-100 visible transition-all ease-in-out duration-300 delay-300":"opacity-0 invisible transition-all ease-in-out duration-300"} to='Categ1'>Categoria 5</Link>
          <Link className={menuButton ?"opacity-100 visible transition-all ease-in-out duration-300 delay-300":"opacity-0 invisible transition-all ease-in-out duration-300"} to='Categ2'>Categoria 6</Link>
          <Link className={menuButton ?"opacity-100 visible transition-all ease-in-out duration-300 delay-300":"opacity-0 invisible transition-all ease-in-out duration-300"} to='Categ1'>Categoria 7</Link>
          </>
          <button className={menuButton 
            ?"custom-BgColor4 sm:invisible visible absolute -right-11 bottom-1/2 rounded-tr-3xl rounded-br-3xl py-5 px-5 border-r-2 border-t-2 border-b-2 custom-BorderColor2 transition-all duration-500 delay-75"
            :"custom-BgColor4 sm:invisible visible absolute -right-11 bottom-1/3 rounded-tr-3xl rounded-br-3xl py-5 px-4 border-r-2 border-t-2 border-b-2 custom-BorderColor2 transition-all duration-500 delay-75"
          } onClick={()=>setMenuButton(!menuButton)}>F<br/>I<br/>L<br/>T<br/>R<br/>A<br/>R<br/></button>
        </div>
        {/* Catalogo */}
        <div className="custom-BgColorMain row-start-2 sm:col-start-2 sm:col-span-7 col-start-1 col-end-9 min-h-screen max-h-fit pl-2">
          <Outlet/>
        </div>
    </motion.div>
  )
}
