import React from 'react'
import {ImWhatsapp} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'

export default function Construction() {
  return (
    <div className='fixed flex flex-col place-items-center z-50 w-screen h-screen bg-white text-center '>
      <img className='h-1/2' alt="alwatoba imagen" src={require("../media/AlwatobaBrandCircle.png")}/>
      <div className='font-bold text-3xl z-10 w-3/4'>
        ESTAMOS ACTUALIZANDO NUESTRAS LINEAS DE PRODUCTOS, POR CUALQUIER CONSULTA COMUNICATE A TRAVÉS DE NUESTROS MEDIOS<br/>   
      </div>
      <div className="flex flex-row gap-x-5 mt-4">
        <a className="relative" target="_blank" rel='noreferrer' href="https://www.instagram.com/alwatoba"><BsInstagram className="h-10 w-10"/></a>
        <a className="relative" target="_blank" rel='noreferrer' href="https://wa.me/5493704413281"><ImWhatsapp className="h-10 w-10"/></a>
      </div>
      <a href="mailto:alwatoba@gmail.com" target="_blank" rel='noreferrer' className='text-2xl mt-3'>Mandanos un mail</a>
      
    </div>
  )
}
