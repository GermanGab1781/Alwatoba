import React, { useState } from 'react'
import {motion} from 'framer-motion'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AlwatobaImg from '../media/AlwatobaBrand.png'
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
    <motion.div className="grid grid-cols-5 bg-amber-500 pt-20 text-center" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      {/* Titulo */}
      <span className="row-start-1 col-span-6">NOMBRE DEL PRODUCTO</span>
      {/* Viewer */}
      <div className="row-start-2 col-start-2 col-span-4 w-3/5 h-full">
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
      <div className="flex flex-col row-start-2 col-start-6 place-content-center ml-5">
        <button className="p-5 border border-neutral-800">Scroll test right</button>
        <button className="p-5 border border-neutral-800">Scroll test left</button> 
        <button className="p-5 border border-neutral-800">Boton3</button> 
        <button className="p-5 border border-neutral-800">Boton4</button> 
      </div>
      {/* Descripcion */}
      <div className="row-start-3 col-start-2 col-end-6 mb-5 mt-10">
        <p className="border border-black text-lg font-semibold">DESCRIPCION</p>
        <p className="border border-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      {/* Viewer */}
      <Viewer visible={showViewer} activeIndex={indexId} images={imagesUrls} onClose={()=>setShowViewer(false)}/> 
    </motion.div>

  )
}
