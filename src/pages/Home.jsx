import { motion } from 'framer-motion'
import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import ReactPlayer from 'react-player'
import { NavLink } from 'react-router-dom'
import AlwatobaImg from '../media/AlwatobaBrand.png'

export default function Home() {
  const imagesUrls = [{original:require("../media/GaleriaEj/Galeria1.jpg"),alt:"ImagenPrueba1",originalClass:"xl:w-96 xl:h-96 sm:w-64 w-48 h-48 cursor-default"},
                      {original:require("../media/GaleriaEj/Galeria2.jpg"),alt:"ImagenPrueba2",originalClass:"xl:w-96 xl:h-96 sm:w-64 w-48 h-48 cursor-default"},
                      {original:require("../media/GaleriaEj/Galeria4.jpg"),alt:"ImagenPrueba4",originalClass:"xl:w-96 xl:h-96 sm:w-64 w-48 h-48 cursor-default"},
                      {original:require("../media/GaleriaEj/Galeria5.jpg"),alt:"ImagenPrueba5",originalClass:"xl:w-96 xl:h-96 sm:w-64 w-48 h-48 cursor-default"},
                      {original:require("../media/GaleriaEj/Galeria6.jpg"),alt:"ImagenPrueba6",originalClass:"xl:w-96 xl:h-96 sm:w-64 w-48 h-48 cursor-default"}
  ]
  function clickEvHome() {
    window.scrollTo(0, 0);
  }
  return (
    <motion.div className="custom-BgColorMain grid gap-y-10 grid-cols-6 pt-24 place-items-center " initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      
      {/* Presentacion */}
      <div className="row-start-1 col-start-3 col-span-2 custom-BgColor2 border custom-BorderColor2 p-5 rounded-2xl">
        <ReactPlayer width={"80vw"} height={"35vw"} url='www.youtube.com/watch?v=cFPkypL_ap8'/>
      </div>
      {/* Frase 1 */}
      <div className="relative row-start-2 col-start-3 col-span-2 h-32 w-1/2">
        <img className="h-full w-full rounded-full" src={AlwatobaImg} alt="Imagen fondo"/>
        <span className="absolute custom-BgColor2 bottom-1/3 left-1/2 -translate-x-1/2 whitespace-nowrap sm:text-2xl text-xs font-bold custom-ColorMain">"Conscientes de nuestro impacto en la Cultura"</span>
      </div>
      {/* Collage fotos */}
      <div className="row-start-3 xl:col-start-2 xl:col-span-4 col-start-1 col-span-6 mb-16">
        <div className="grid gap-x-3 gap-y-2">
          <img className="xl:col-start-1 xl:col-span-1 xl:row-start-1 col-start-1 col-span-2 row-start-1 sm:w-60 sm:h-60 w-40 h-40 custom-BgColor2 border custom-BorderColor3 xl:p-3 p-2 rounded-2xl"src={require("../media/GaleriaEj/Galeria7.jpg")} alt={"imagenPrueba"}/>
          <img className="xl:col-start-1 xl:col-span-1 xl:row-start-2 col-start-3 col-span-2 row-start-1 sm:w-60 sm:h-60 w-40 h-40 custom-BgColor2 border custom-BorderColor3 xl:p-3 p-2 rounded-2xl"src={require("../media/GaleriaEj/Galeria10.jpg")} alt={"imagenPrueba"}/>

          <div className="xl:col-start-2 xl:col-span-1 xl:row-start-1 col-start-1 col-span-4 row-start-2 xl:row-span-2 custom-BgColor2 border custom-BorderColor3 xl:m-0 m-auto xl:p-8 p-3 rounded-2xl sm:w-fit sm:h-fit w-fit h-fit">
            <ReactImageGallery items={imagesUrls} showFullscreenButton={false} showNav={false} showPlayButton={false} autoPlay={true}/>
          </div>

          <img className="xl:col-start-3 xl:col-span-1 xl:row-start-1 col-start-1 col-span-2 row-start-3 sm:w-60 sm:h-60 w-40 h-40 custom-BgColor2 border custom-BorderColor3 xl:p-3 p-2 rounded-2xl" src={require("../media/GaleriaEj/Galeria8.jpg")} alt={"imagenPrueba"}/>
          <img className="xl:col-start-3 xl:col-span-1 xl:row-start-2 col-start-3 col-span-2 row-start-3 sm:w-60 sm:h-60 w-40 h-40 custom-BgColor2 border custom-BorderColor3 xl:p-3 p-2 rounded-2xl" src={require("../media/GaleriaEj/Galeria3.jpg")} alt={"imagenPrueba"}/>
          <NavLink className="xl:row-start-4 xl:col-start-2 xl:col-span-1 row-start-4 col-start-1 col-span-4 text-center custom-BgColor2 font-semibold hover:scale-110 border custom-BorderColor2 xl:p-3 p-5 rounded-xl transition-all" onClick={()=>clickEvHome()} to="/Catalog"><span className="">VER CATÁLOGO</span></NavLink>
        </div>
        
      </div>      
      {/* Frase 2 */}
      <div className="relative row-start-5 col-start-3 col-span-2 h-32 w-1/2">
        <img className="h-full w-full rounded-full" src={AlwatobaImg} alt="Imagen fondo"/>
        <span className="absolute custom-BgColor2 bottom-1/3 left-1/2 -translate-x-1/2 whitespace-nowrap sm:text-2xl text-xs font-bold custom-ColorMain">"Trabajando de la mano de las comunidades locales"</span>
      </div>

    </motion.div>
  )
}
