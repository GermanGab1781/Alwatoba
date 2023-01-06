
import {BsInstagram , BsWhatsapp, BsPinterest,BsFillTelephoneFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {HiLocationMarker,HiReceiptRefund} from 'react-icons/hi'
import React from 'react'
import Swal from 'sweetalert2'
export default function Footer() {

  function contactMethods(){
    Swal.fire({
      html:`
        <span style="font-family:'COMFORTAA';font-size:30px;">Contactanos</span>
        <div style="display:flex;flex-wrap:wrap; gap:5px; justify-content:center; margin-top:20px;"> 
          
          <a class="customButtonSwal" href="https://wa.me/5493704413281?text=Hola, queria consultar sobre los Metodos de Pago y Envio que aceptan" target="_blank" rel='noreferrer'>Mensaje por Whatsapp</a>
          <a class="customButtonSwal" href="https://www.instagram.com/alwatoba" target="_blank" rel='noreferrer'>Nuestro Instagram</a>
          <a class="customButtonSwal" href="mailto:alwatoba@gmail.com?subject=Consulta sobre los Metodos de Pago y Envio &body=Hola, queria consultar sobre los Metodos de Pagos y Envios que aceptan" target="_blank" rel='noreferrer'>Envianos un Mail</a>
        </div>
      `
    })
  }

  return (
    <div className="md:grid md:grid-cols-6 flex flex-col bg-slate-50 border-t-2 pt-16 pb-10 z-30 relative">
      {/* Medios de Pago y Envio */}
      <div className="md:row-start-1 md:col-start-1 flex flex-col md:col-span-4 md:ml-20 ml-5 md:text-3xl text-xl place-items-center custom-Color3">
          <span className=''>Medios de Pago y Envio</span>
          <span className=' text-black text-2xl'>Arreglalo con nosotros contactandonos </span>
          <span className=''>&#8595;&#8595;&#8595;</span>
          <div onClick={contactMethods} className="relative cursor-pointer xl:w-1/4 group xl:mt-8 mt-2">
            <span className="absolute group-hover:z-10 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all bottom-1/3 left-1/2 -translate-x-1/2 text-black sm:text-2xl text-xl">Acordar</span>
            <img className="p-1 md:w-full md:h-full w-20 h-12 group-hover:scale-150 group-active:scale-150 transition-all" src={require("../media/MediosdePago/acordar.png")} alt="Metodo de pago" />
          </div>
      </div>
      {/* Redes y Contacto */}
      <div className="md:grid md:grid-rows-2 md:row-start-1 md:col-start-5 md:col-span-2 md:ml-20 ml-5 md:text-3xl text-xl">
        <div className="md:mb-0 mb-2">
          <span className="">Redes</span>
          <div className="flex flex-row pt-5 gap-x-3 md:place-content-start place-content-center custom-Color3">
            <a href="https://www.instagram.com/alwatoba" target="_blank" rel='noreferrer'><BsInstagram className="h-10 w-10 scale-110 transition-all "/></a>
            <a className="md:ml-6 ml-3" href="https://wa.me/5493704413281" target="_blank" rel='noreferrer'><BsWhatsapp className="h-10 w-10 scale-110 transition-all"/></a>            
            <a className="md:ml-6 ml-3" href="https://ar.pinterest.com/alwatoba/" target="_blank" rel='noreferrer'><BsPinterest className="h-10 w-10 scale-110 transition-all"/></a>
          </div>
        </div>   
        <div>
          <span>Contactos</span>
          <div className="flex flex-col gap-y-2 pl-2 ml-7 md:text-start text-center text-xl text-black ">
            <a className='relative' href="mailto:alwatoba@gmail.com" target="_blank" rel='noreferrer'><AiOutlineMail className="absolute -left-8 bottom-1 h-5 w-10 custom-Color3"/>alwatoba@gmail.com</a>
            <a className="relative" href="https://wa.me/5493704413281" target="_blank" rel='noreferrer'><BsFillTelephoneFill className="absolute -left-8 bottom-1 h-5 w-10 custom-Color3"/>+5493704413281</a>
            <a className="relative" href="https://www.instagram.com/alwatoba" target="_blank" rel='noreferrer'><HiLocationMarker className="absolute -left-8 bottom-1 h-5 w-10 custom-Color3"/>560 Av. Maradona</a>
            <a className="relative" href="https://wa.me/5493704413281?text=Hola,quiero devolver mi producto" target="_blank" rel='noreferrer'><HiReceiptRefund className="absolute -left-8 bottom-1 h-5 w-10 custom-Color3"/>Boton de arrepentimiento</a>
          </div>
        </div>
      </div>
    </div>
  )
}
