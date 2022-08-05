import React from 'react';
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom';
import AlwatobaImg from '../media/AlwatobaBrand.png'

export default function Catalog() {
  return (
    <motion.div className="bg-amber-300 pt-16" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <div className="grid text-center ">
        <h1 className="row-start-1 col-start-2 col-span-4 font-bold text-2xl">
          Nuestros Productos
        </h1>
        {/* Menu lateral Izq */}
        <div className="bg-amber-200 overflow-hidden row-start-2 col-start-1 col-span-1 w-full h-screen border border-amber-700">
          <NavLink className="" to="/Alwatoba" >
            <div className="hover:scale-110 transition mb-2">
              Categoria
            </div>              
          </NavLink>
          <NavLink className="" to="/Alwatoba" >
            <div className="hover:scale-110 transition mb-2">
              Categoria
            </div>              
          </NavLink>
          <NavLink className="" to="/Alwatoba" >
            <div className="hover:scale-110 transition mb-2">
              Categoria
            </div>              
          </NavLink>
          <NavLink className="" to="/Alwatoba" >
            <div className="hover:scale-110 transition mb-2">
              Categoria
            </div>              
          </NavLink>
          <NavLink className="" to="/Alwatoba" >
            <div className="hover:scale-110 transition mb-2">
              Categoria
            </div>              
          </NavLink>
          <NavLink className="" to="/Alwatoba" >
            <div className="hover:scale-110 transition mb-2">
              Categoria
            </div>              
          </NavLink>
        </div>
        {/* Catalogo */}
        <div className='bg-amber-400 grid grid-cols-4 w-full row-start-2 col-start-2 col-span-4 '>
          
          <NavLink className="m-5 h-48 w-48   transition ease-in-out duration-700 hover:scale-105 " to="/Product">
            <img src={AlwatobaImg} className="w-full h-full" alt="Categ1"/>
            <span>PRODUCTO</span>     
          </NavLink> 
          <NavLink className="m-5 h-48 w-48   transition ease-in-out duration-700 hover:scale-105 " to="/Product">
            <img src={AlwatobaImg} className="w-full h-full" alt="Categ1"/>
            <span>PRODUCTO</span>     
          </NavLink> 
          <NavLink className="m-5 h-48 w-48   transition ease-in-out duration-700 hover:scale-105 " to="/Product">
            <img src={AlwatobaImg} className="w-full h-full" alt="Categ1"/>
            <span>PRODUCTO</span>     
          </NavLink> 
          <NavLink className="m-5 h-48 w-48   transition ease-in-out duration-700 hover:scale-105 " to="/Product">
            <img src={AlwatobaImg} className="w-full h-full" alt="Categ1"/>
            <span>PRODUCTO</span>     
          </NavLink> 
          <NavLink className="m-5 h-48 w-48   transition ease-in-out duration-700 hover:scale-105 " to="/Product">
            <img src={AlwatobaImg} className="w-full h-full" alt="Categ1"/>
            <span>PRODUCTO</span>     
          </NavLink> 
          <NavLink className="m-5 h-48 w-48   transition ease-in-out duration-700 hover:scale-105 " to="/Product">
            <img src={AlwatobaImg} className="w-full h-full" alt="Categ1"/>
            <span>PRODUCTO</span>     
          </NavLink> 
        </div>
      </div>
    </motion.div>
  )
}
