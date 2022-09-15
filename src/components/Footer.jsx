import { motion } from 'framer-motion'
import {BsInstagram , BsWhatsapp, BsPinterest,BsFillChatRightTextFill,BsFillTelephoneFill} from 'react-icons/bs'
import {HiLocationMarker,HiReceiptRefund} from 'react-icons/hi'
import React from 'react'
export default function Footer() {
  return (
    <motion.div className="grid grid-cols-6 bg-slate-50 custom-Color1 border-t-2 pt-16 pb-10">
      {/* Medios de Pago y Envio */}
      <div className="md:row-start-1 md:col-start-1 md:col-span-4 ml-20">
        <div>
          <span className="font-notethis md:text-3xl">Medios de Pago</span>
          <div className="flex flex-row flex-wrap">
            <img className="p-1 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/american-express.png")} alt="Metodo de pago" />
            <img className="p-1 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/argencard.png")} alt="Metodo de pago" />
            <img className="p-1 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/cabal.png")} alt="Metodo de pago" />
            <img className="p-1 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/diners-club.png")} alt="Metodo de pago" />
            <img className="p-1 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/maestro.png")} alt="Metodo de pago" />
            <img className="p-1 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/mastercard.png")} alt="Metodo de pago" />
            <img className="p-1 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/mercadopago.png")} alt="Metodo de pago" />
            <img className="p-1 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/naranja.png")} alt="Metodo de pago" />
            <img className="p-1 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/nativa.png")} alt="Metodo de pago" />
            <img className="p-1 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/rapipago.png")} alt="Metodo de pago" />
            <img className="p-1 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/pagofacil.png")} alt="Metodo de pago" />
            <img className="p-1 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/visa.png")} alt="Metodo de pago" />
            <img className="p-1 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/deposito.png")} alt="Metodo de pago" />
            <img className="p-1 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/acordar.png")} alt="Metodo de pago" />
          </div>
        </div>
        <div>
          <span className="font-notethis md:text-3xl">Medios de Envio</span>
          <div className="flex flex-row flex-wrap">
            <img className="p-1 hover:scale-150 transition-all hover:bg-black " src={require("../media/MediosdePago/acordar.png")} alt="Metodo de pago" />
          </div>
        </div>
      </div>

      {/* Redes y Contacto */}
      <div className="md:grid md:grid-rows-2 md:row-start-1 md:col-start-5 md:col-span-2 ml-20">
        <div>
          <span className="font-notethis md:text-3xl">Redes</span>
          <div className="flex flex-row pt-5">
            <a className="ml-6" href="#"><BsInstagram className="h-10 w-10 hover:scale-150 transition-all"/></a>
            <a className="ml-6" href="#"><BsWhatsapp className="h-10 w-10 hover:scale-150 transition-all"/></a>            
            <a className="ml-6" href="#"><BsPinterest className="h-10 w-10 hover:scale-150 transition-all"/></a>
          </div>
          </div>   
        <div>
          <span className="font-notethis md:text-3xl">Contactos</span>
          <div className="flex flex-col pl-2 ml-5">
            <span className="hover:scale-150 transition-all"><a className="relative" href="https://www.instagram.com/alwatoba"><BsFillChatRightTextFill className="absolute -left-8 bottom-0 h-5 w-10"/>alwatoba@gmail.com</a></span>
            <span className="hover:scale-150 transition-all"><a className="relative" href="https://www.instagram.com/alwatoba"><BsFillTelephoneFill className="absolute -left-8 bottom-0 h-5 w-10"/>+5493704413281</a></span>
            <span className="hover:scale-150 transition-all"><a className="relative" href="https://www.instagram.com/alwatoba"><HiLocationMarker className="absolute -left-8 bottom-0 h-5 w-10"/>560 Av. Maradona</a></span>
            <span className="hover:scale-150 transition-all"><a className="relative" href="https://www.instagram.com/alwatoba"><HiReceiptRefund className="absolute -left-8 bottom-0 h-5 w-10"/>Boton de arrepentimiento</a></span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
