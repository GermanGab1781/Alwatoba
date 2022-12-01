import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProductMini({nombre,id,imgPath}) {
  const path = "/Product/"+id
  
  return (
      <NavLink className="h-full w-48 shadow shadow-black p-22 border border-black  transition ease-in-out duration-100 hover:scale-105" to={path}>
        <img src={imgPath} className="h-1/2 w-48" alt="Cargando Imagen"/>
        <h1>{nombre}</h1>
      </NavLink>
  )
}
 