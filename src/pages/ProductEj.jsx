import React, { useState } from 'react'
import {motion} from 'framer-motion'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Viewer from 'react-viewer'

export default function ProductEj() {
  const [showViewer, setShowViewer] = useState(false)
  const imagesUrls = [{src:require("../media/AlwatobaBrand.png"),alt:"ImagenPrueba1"},
                      {src:require("../media/AlwatobaBrand.png"),alt:"ImagenPrueba2"},
                      {src:require("../media/AlwatobaBrand.png"),alt:"ImagenPrueba3"},
                      {src:require("../media/AlwatobaBrand.png"),alt:"ImagenPrueba4"},
  ]
  const [indexId, setIndexId]= useState(0);
  function openImgViewer(index){
    setIndexId(index);
    setShowViewer(true);
  }
  return (
    <motion.div className="grid grid-cols-6 bg-amber-500 pt-20 text-center" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      {/* Titulo */}
      <span className="row-start-1 col-span-6 text-2xl font-semibold mb-10">NOMBRE DEL PRODUCTO</span>
      {/* Imagenes del Producto */}
      <div className="row-start-2 w-full col-start-2 sm:col-end-5 col-end-6 h-full border border-black">
        <Carousel showThumbs={false} infiniteLoop={true} emulateTouch={true}>
        {imagesUrls.map((img,index)=>{
          return(
            <div className="w-full h-full">
              <img className="w-full h-full" id={index} key={index} src={img.src} alt={img.alt}/> 
              <button onClick={()=>openImgViewer(index)} className="absolute z-10 w-full h-full"></button>      
            </div>  
          )
        })}
        </Carousel>      
      </div>
      {/* Botones */}
      <div className="flex flex-col sm:col-start-5 row-start-2 col-start-6 sm:gap-y-2 gap-y-3 place-content-center sm:ml-10 ml-1 sm:-mr-10 mr-4">
        <button className="sm:py-5 py-2 sm:text-base text-xs font-bold border border-neutral-800">Boton1</button>
        <button className="sm:py-5 py-2 sm:text-base text-xs font-bold border border-neutral-800">Boton2</button> 
        <button className="sm:py-5 py-2 sm:text-base text-xs font-bold border border-neutral-800">Boton3</button> 
        <button className="sm:py-5 py-2 sm:text-base text-xs font-bold border border-neutral-800">Boton4</button> 
      </div>
      {/* Descripcion */}
      <div className="row-start-3 sm:col-start-2 sm:col-end-6 col-start-1 col-end-7 mb-5 mt-10">
        <p className="border border-black text-lg font-semibold">DESCRIPCION</p>
        <p className="border border-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      {/* Viewer */}
      <Viewer visible={showViewer} activeIndex={indexId} images={imagesUrls} onClose={()=>setShowViewer(false)}/> 
    </motion.div>

  )
}
