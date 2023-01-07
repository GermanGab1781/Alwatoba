import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProductMini({nombre,id,imgPath}) {
  const path = "/Product/"+id
  
  return (
      <NavLink className="group relative h-full w-48 shadow-md z-5 p-22 border border-yellow-500  transition ease-in-out duration-100 hover:scale-105" to={path}>
        <img src={imgPath} className="h-fit w-48" alt="Cargando Imagen"/>
        <h1>{nombre}</h1>
      </NavLink>
  )
}
 