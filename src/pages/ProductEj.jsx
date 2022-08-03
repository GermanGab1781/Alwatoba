import React from 'react'
import {motion} from 'framer-motion'
import AlwatobaImg from '../media/AlwatobaBrand.png'

export default function ProductEj() {
  return (
    <motion.div className="grid-cols-5 gap-y-11 grid h-screen" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      {/* Titulo */}
      <div className="grid justify-evenly text-center col-start-1 col-end-6 row-start-1 ">
        <h1 className="mt-5 row-start-1">Nombre del Producto</h1>
        <p className="mt-5 row-start-1">Stock: 5</p>
      </div>
      {/* Mini Imagenes */}
      <div className="grid justify-end col-start-1 col-end-3 row-start-2">
        <img className="h-32 w-32 cursor-pointer" src={AlwatobaImg} alt="Imagen del Producto"/>
        <img className="h-32 w-32 cursor-pointer" src={AlwatobaImg} alt="Imagen del Producto"/>
        <img className="h-32 w-32 cursor-pointer" src={AlwatobaImg} alt="Imagen del Producto"/>
      </div>
      {/* Imagen Principal */}
      <div className="grid col-start-3 col-end-5 row-start-2 ">
        <img className="h-96 w-96 cursor-pointer" src={AlwatobaImg} alt="Imagen del Producto"/>
      </div>
      {/* Botones */}
      <div className="grid justify-start col-start-5 row-start-2 content-center text-center">
        <div className="row-start-1 py-2 mb-1 px-6 w-36 h-fit hover:scale-110 transition rounded-lg cursor-pointer border border-amber-900 bg-amber-500">Boton1</div>
        <div className="row-start-2 py-2 mb-1 px-6 w-36 h-fit hover:scale-110 transition rounded-lg cursor-pointer border border-amber-900 bg-amber-500">Boton2</div>
        <div className="row-start-3 py-2 mb-1 px-6 w-36 h-fit hover:scale-110 transition rounded-lg cursor-pointer border border-amber-900 bg-amber-500">Boton3</div>
        <div className="row-start-4 py-2 mb-1 px-6 w-36 h-fit hover:scale-110 transition rounded-lg cursor-pointer border border-amber-900 bg-amber-500">Boton4</div>
        <div className="row-start-5 py-2 px-6 w-36 h-fit hover:scale-110 transition rounded-lg cursor-pointer border border-amber-900 bg-amber-500">Boton5</div>
      </div>
      {/* Descripcion */}
      <div className="grid col-start-2 col-end-5 row-start-3 border border-amber-500">
        <h1 className="mx-auto">Descripcion</h1>
        <p className="mx-auto ">Lorem ipsumm pariatur maiores consequuntur, tempora illo accusantium quibusdam architecto distinctio dicta consectetur perferendis magnam fuga odio in esse obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut libero alias harum! Exercitationem mollitia pariatur tempora vitae quidem, eum quasi similique et. Dolor rem qui sequi fuga dolore similique asperiores?</p>
      </div>

    </motion.div>
  )
}
