import React from 'react'

export default function Construction() {
  return (
    <div className='fixed z-50 w-screen h-screen custom-BgColorMain font-comfortaa font-bold text-5xl text-center whitespace-nowrap'>
      <div className='absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2'>
        PAGINA EN CONSTRUCCION<br/>
        <span> Disponible a fines de Noviembre</span>          
      </div>
      <img className='absolute left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-3/4' src={require("../media/Nosotras/Nosotras3.jpg")}/>
    </div>
  )
}
