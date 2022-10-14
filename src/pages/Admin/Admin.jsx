import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Admin() {
  return (
    <div className='py-40 gap-y-10 flex flex-col text-center px-16'>
      <span>Admin</span>
      <NavLink className='border border-black p-5 hover:bg-black hover:text-white' to="/Admin/Upload">Subir Producto</NavLink>
      <NavLink className='border border-black p-5 hover:bg-black hover:text-white' to="/Admin/EditOrDelete">Editar/Borrar Productos</NavLink>
      <span>Desconectarse</span>
    </div>
  )
}
