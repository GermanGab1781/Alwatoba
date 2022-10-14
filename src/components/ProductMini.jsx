import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProductMini({nombre,id,imgPath}) {
  const path = "/Product/"+id
  return (
    <NavLink className="sm:h-48 shadow shadow-black p-22 border border-black sm:w-48 h-32 w-32 transition ease-in-out duration-100 hover:scale-105 " to={path}>
      <img src={imgPath} className="sm:h-48 sm:w-48 h-32 w-32" alt="Cargando Imagen"/>
      <h1>{nombre}</h1>   
    </NavLink> 
  )
}
 