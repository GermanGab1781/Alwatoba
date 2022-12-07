
import {BsInstagram , BsWhatsapp, BsPinterest,BsFillChatRightTextFill,BsFillTelephoneFill} from 'react-icons/bs'
import {HiLocationMarker,HiReceiptRefund} from 'react-icons/hi'
import React from 'react'
export default function Footer() {
  return (
    <div className="md:grid md:grid-cols-6 flex flex-col bg-slate-50 custom-Color1 border-t-2 pt-16 pb-10 z-30 relative">
      {/* Medios de Pago y Envio */}
      <div className="md:row-start-1 md:col-start-1  md:col-span-4 md:ml-20 ml-5 md:text-3xl text-xl">
        <div>
          <span className="font-comfortaa">Medios de Pago</span>
          <div className="flex flex-row flex-wrap">
            <img className="p-1 md:w-fit md:h-fit w-20 h-12 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/american-express.png")} alt="Metodo de pago" />
            <img className="p-1 md:w-fit md:h-fit w-20 h-12 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/argencard.png")} alt="Metodo de pago" />
            <img className="p-1 md:w-fit md:h-fit w-20 h-12 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/cabal.png")} alt="Metodo de pago" />
            <img className="p-1 md:w-fit md:h-fit w-20 h-12 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/diners-club.png")} alt="Metodo de pago" />
            <img className="p-1 md:w-fit md:h-fit w-20 h-12 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/maestro.png")} alt="Metodo de pago" />
            <img className="p-1 md:w-fit md:h-fit w-20 h-12 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/mastercard.png")} alt="Metodo de pago" />
            <img className="p-1 md:w-fit md:h-fit w-20 h-12 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/mercadopago.png")} alt="Metodo de pago" />
            <img className="p-1 md:w-fit md:h-fit w-20 h-12 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/naranja.png")} alt="Metodo de pago" />
            <img className="p-1 md:w-fit md:h-fit w-20 h-12 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/nativa.png")} alt="Metodo de pago" />
            <img className="p-1 md:w-fit md:h-fit w-20 h-12 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/rapipago.png")} alt="Metodo de pago" />
            <img className="p-1 md:w-fit md:h-fit w-20 h-12 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/pagofacil.png")} alt="Metodo de pago" />
            <img className="p-1 md:w-fit md:h-fit w-20 h-12 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/visa.png")} alt="Metodo de pago" />
            <div className="relative group md:mt-6 md:mr-10 mt-2 mr-5 md:ml-7">
              <span className="absolute group-hover:z-10 cursor-default opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all bottom-1/3 left-1/2 -translate-x-1/2 font-comfortaa sm:text-2xl text-xl">Deposito</span>
              <img className="p-1 md:w-full md:h-full w-20 h-12 group-hover:scale-150 group-active:scale-150 transition-all group-hover:bg-black " src={require("../media/MediosdePago/deposito.png")} alt="Metodo de pago" />
            </div>
            <div className="relative group md:mt-6 mt-2">
              <span className="absolute group-hover:z-10 cursor-default opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all bottom-1/3 left-1/2 -translate-x-1/2 font-comfortaa sm:text-2xl text-xl">Acordar</span>
              <img className="p-1 md:w-full md:h-full w-20 h-12 group-hover:scale-150 group-active:scale-150 transition-all group-hover:bg-black " src={require("../media/MediosdePago/acordar.png")} alt="Metodo de pago" />
            </div>
          </div>
        </div>
        <div>
          <span className="font-comfortaa">Medios de Envio</span>
          <div className="flex flex-row flex-wrap">
            <div className="relative group">
              <span className="absolute group-hover:z-10 cursor-default opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all bottom-1/3 left-1/2 -translate-x-1/2 font-comfortaa sm:text-2xl text-xl">Acordar</span>
              <img className="p-1 md:w-full md:h-full w-20 h-12 group-hover:scale-150 group-active:scale-150 transition-all group-hover:bg-black " src={require("../media/MediosdePago/acordar.png")} alt="Metodo de pago" />
            </div>
          </div>
        </div>
      </div>

      {/* Redes y Contacto */}
      <div className="md:grid md:grid-rows-2 md:row-start-1 md:col-start-5 md:col-span-2 md:ml-20 ml-5 md:text-3xl text-xl">
        <div className="md:mb-0 mb-2">
          <span className="font-comfortaa">Redes</span>
          <div className="flex flex-row pt-5 gap-x-3 md:place-content-start place-content-center">
            <a className="" href="https://www.instagram.com/alwatoba" target="_blank" rel='noreferrer'><BsInstagram className="h-10 w-10 scale-110 transition-all"/></a>
            <a className="md:ml-6 ml-3" href="https://wa.me/5493704413281" target="_blank" rel='noreferrer'><BsWhatsapp className="h-10 w-10 scale-110 transition-all"/></a>            
            <a className="md:ml-6 ml-3" href="https://ar.pinterest.com/alwatoba/" target="_blank" rel='noreferrer'><BsPinterest className="h-10 w-10 scale-110 transition-all"/></a>
          </div>
        </div>   
        <div className="">
          <span className="font-comfortaa">Contactos</span>
          <div className="flex flex-col pl-2 ml-7 md:text-start text-center text-xl">
            <a href="mailto:alwatoba@gmail.com" target="_blank" rel='noreferrer'><BsFillChatRightTextFill className="absolute -left-8 bottom-0 h-5 w-10"/>alwatoba@gmail.com</a>
            <a className="relative" href="https://wa.me/5493704413281" target="_blank" rel='noreferrer'><BsFillTelephoneFill className="absolute -left-8 bottom-0 h-5 w-10"/>+5493704413281</a>
            <a className="relative" href="https://www.instagram.com/alwatoba" target="_blank" rel='noreferrer'><HiLocationMarker className="absolute -left-8 bottom-0 h-5 w-10"/>560 Av. Maradona</a>
            <a className="relative" href="https://wa.me/5493704413281?text=Hola,quiero devolver mi producto" target="_blank" rel='noreferrer'><HiReceiptRefund className="absolute -left-8 bottom-0 h-5 w-10"/>Boton de arrepentimiento</a>
          </div>
        </div>
      </div>
    </div>
  )
}
