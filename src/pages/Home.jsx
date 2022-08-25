import { motion } from 'framer-motion'
import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import ReactPlayer from 'react-player'
import { NavLink } from 'react-router-dom'
import AlwatobaImg from '../media/AlwatobaBrand.png'

export default function Home() {
  const imagesUrls = [{original:require("../media/GaleriaEj/Galeria1.jpg"),alt:"ImagenPrueba1",originalClass:"w-96 h-96 cursor-default"},
                      {original:require("../media/GaleriaEj/Galeria2.jpg"),alt:"ImagenPrueba2",originalClass:"w-96 h-96 cursor-default"},
                      {original:require("../media/GaleriaEj/Galeria4.jpg"),alt:"ImagenPrueba4",originalClass:"w-96 h-96 cursor-default"},
                      {original:require("../media/GaleriaEj/Galeria5.jpg"),alt:"ImagenPrueba5",originalClass:"w-96 h-96 cursor-default"},
                      {original:require("../media/GaleriaEj/Galeria6.jpg"),alt:"ImagenPrueba6",originalClass:"w-96 h-96 cursor-default"}
  ]
  function clickEvHome() {
    window.scrollTo(0, 0);
  }
  return (
    <motion.div className="custom-BgColorMain grid gap-y-10 grid-cols-6 pt-24 place-items-center " initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      
      {/* Presentacion */}
      <div className="row-start-1 col-start-3 col-span-2 custom-BgColor2 border custom-BorderColor2 p-5 rounded-2xl">
        <ReactPlayer width={"70vw"} height={"35vw"} url='www.youtube.com/watch?v=cFPkypL_ap8'/>
      </div>
      {/* Frase 1 */}
      <div className="relative row-start-2 col-start-3 col-span-2 h-32 w-1/2">
        <img className="h-full w-full rounded-full" src={AlwatobaImg} alt="Imagen fondo"/>
        <span className="absolute custom-BgColor2 bottom-1/3 left-1/2 -translate-x-1/2 whitespace-nowrap sm:text-2xl text-xs font-bold custom-ColorMain">"Conscientes de nuestro impacto en la Cultura"</span>
      </div>
      {/* Collage fotos */}
      <div className="row-start-3 sm:col-start-2 sm:col-span-4 col-start-1 col-span-6 mb-16">
        <div className="grid gap-x-3 gap-y-2">
          <img className="col-start-1 row-start-1 w-60 h-60 custom-BgColor2 border custom-BorderColor3 p-3 rounded-2xl"src={require("../media/GaleriaEj/Galeria7.jpg")} alt={"imagenPrueba"}/>
          <img className="col-start-1 row-start-2 w-60 h-60 custom-BgColor2 border custom-BorderColor3 p-3 rounded-2xl"src={require("../media/GaleriaEj/Galeria10.jpg")} alt={"imagenPrueba"}/>

          <div className="col-start-2 row-start-1 row-span-2 custom-BgColor2 border custom-BorderColor3 sm:p-8 p-3 rounded-2xl w-fit h-fit ">
            <ReactImageGallery items={imagesUrls} showFullscreenButton={false} showNav={false} showPlayButton={false} autoPlay={true}/>
          </div>

          <img className="col-start-3 w-60 h-60 custom-BgColor2 border custom-BorderColor3 p-3 rounded-2xl" src={require("../media/GaleriaEj/Galeria8.jpg")} alt={"imagenPrueba"}/>
          <img className="col-start-3 w-60 h-60 custom-BgColor2 border custom-BorderColor3 p-3 rounded-2xl" src={require("../media/GaleriaEj/Galeria3.jpg")} alt={"imagenPrueba"}/>
          
        </div>
        <NavLink className="absolute text-center custom-BgColor2 inset-x-64 mt-5 p-4 rounded-2xl hover:scale-125 custom-ColorMain hover:text-lg font-semibold border custom-BorderColor1 transition-all duration-500" onClick={()=>clickEvHome()} to="/Catalog"><span className="">VER CATÁLOGO</span></NavLink>
      </div>      
      {/* Frase 2 */}
      <div className="relative row-start-5 col-start-3 col-span-2 h-32 w-1/2">
        <img className="h-full w-full rounded-full" src={AlwatobaImg} alt="Imagen fondo"/>
        <span className="absolute custom-BgColor2 bottom-1/3 left-1/2 -translate-x-1/2 whitespace-nowrap sm:text-2xl text-xs font-bold custom-ColorMain">"Trabajando de la mano de las comunidades locales"</span>
      </div>

    </motion.div>
  )
}
