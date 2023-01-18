import { BsInstagram, BsWhatsapp, BsFacebook, BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { HiLocationMarker, HiReceiptRefund } from 'react-icons/hi'

import Swal from 'sweetalert2'

export default function Footer() {

  function contactMethods() {
    Swal.fire({
      html: `
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
    <div className="flex md:flex-row flex-col gap-y-5 py-5 place-content-evenly text-center md:text-3xl text-xl">

      <div className=''>
        <span className='text-2xl md:text-3xl'>Contactos</span>
        <div className="flex flex-col gap-y-2 pl-2 ml-7 text-start md:place-items-start place-items-center text-xl custom-Color3">
          <a className='relative' href="mailto:alwatoba@gmail.com" target="_blank" rel='noreferrer'><AiOutlineMail className="absolute -left-8 bottom-1 h-5 w-10 custom-Color3" />alwatoba@gmail.com</a>
          <a className="relative" href="https://wa.me/5493704413281" target="_blank" rel='noreferrer'><BsFillTelephoneFill className="absolute -left-8 bottom-1 h-5 w-10 custom-Color3" />+5493704413281</a>
          <a className="relative" href="https://www.instagram.com/alwatoba" target="_blank" rel='noreferrer'><HiLocationMarker className="absolute -left-8 bottom-1 h-5 w-10 custom-Color3" />560 Av. Maradona</a>
          <a className="relative" href="https://wa.me/5493704413281?text=Hola,quiero devolver mi producto" target="_blank" rel='noreferrer'><HiReceiptRefund className="absolute -left-8 bottom-1 h-5 w-10 custom-Color3" />Boton de arrepentimiento</a>
        </div>
      </div>

      <div className="">
          <span className='text-2xl md:text-3xl'>Redes</span>
          <div className="flex flex-row pt-5 gap-x-3 md:place-content-start place-content-center custom-Color3">
            <a href="https://www.instagram.com/alwatoba" target="_blank" rel='noreferrer'><BsInstagram className="h-10 w-10 scale-110 transition-all " /></a>
            <a className="md:ml-6 ml-3" href="https://wa.me/5493704413281" target="_blank" rel='noreferrer'><BsWhatsapp className="h-10 w-10 scale-110 transition-all" /></a>
            <a className="md:ml-6 ml-3" href="https://es-la.facebook.com/alwatoba/" target="_blank" rel='noreferrer'><BsFacebook className="h-10 w-10 scale-110 transition-all" /></a>
          </div>
        </div>
    </div>

  )
}
