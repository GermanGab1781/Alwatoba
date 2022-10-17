import React,{useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import Swal from 'sweetalert2'

export default function Admin() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  return (
    <div className='py-40 gap-y-10 flex flex-col text-center px-16 font-comfortaa'>
      <span className='text-4xl'>Admin</span>
      <NavLink className='border border-black p-5 hover:bg-black hover:text-white' to="/Admin/Upload">Subir Producto</NavLink>
      <NavLink className='border border-black p-5 hover:bg-black hover:text-white' to="/Admin/EditOrDelete">Editar/Borrar Productos</NavLink>
      <span className='cursor-pointer border border-black m-auto p-3 hover:bg-red-600' onClick={()=>{signOut(auth);Swal.fire({icon:'info',title:'Sesion terminada'})}}>Desconectarse</span>
    </div>
  )
}
