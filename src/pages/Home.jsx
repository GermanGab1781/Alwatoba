import { motion } from 'framer-motion'
import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import ReactPlayer from 'react-player'
import { NavLink } from 'react-router-dom'

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
    <motion.div className="grid bg-slate-100 gap-y-5 grid-cols-6 pt-20 place-items-center" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      
      {/* Presentacion */}
      <div className="z-10 md:grid flex flex-wrap justify-center relative row-start-1 col-start-3 col-span-2 custom-BgColor4 xl:px-0 px-7 xl:rounded-full rounded-3xl text-center ">
        <span className="z-10 xl:row-start-1 font-semiboldbold xl:text-4xl text-3xl custom-ColorMain">Nosotras</span>
        <span className="z-10 xl:row-start-2 font-semibold xl:text-xl text-1xl custom-ColorMain">Quienes somos y que nos inspira</span>
        <div className="z-10 xl:row-start-3 xl:col-start-1 custom-BgColorMain mt-4 p-5 border custom-BorderColor4 rounded-2xl">
          <ReactPlayer width={"50vw"} height={"30vw"} url='www.youtube.com/watch?v=cFPkypL_ap8'/>
        </div>
        <img className="xl:absolute xl:-left-72  xl:w-1/2 xl:h-3/4 w-full h-60 xl:mt-0 mt-2 border xl:border-0 custom-BorderColorMain rounded-full" src={require("../media/Nosotras/Nosotras1.jpg")} alt="imgPresentacion" />
        <img className="xl:absolute xl:top-12 xl:-right-80 xl:w-5/12 xl:h-full w-full h-60 mt-2 mb-2 border xl:border-0 custom-BorderColorMain rounded-full" src={require("../media/Nosotras/Nosotras2.jpg")} alt="imgPresentacion" />       
      </div>

      {/* Frase 1 */}
      <div className="relative row-start-2 col-start-3 col-span-2 h-4/6 w-full">
        <img className="h-full w-full rounded-full" src={require("../media/Naturaleza/Naturaleza1.JPG")} alt="Imagen fondo"/>
        <span className="absolute custom-BgColorMain bottom-1/3 left-1/2 -translate-x-1/2 whitespace-nowrap sm:text-2xl text-xs font-bold custom-Color2">"Conscientes de nuestro impacto en la Cultura"</span>
      </div>

      {/* Collage fotos */}
      <div className="custom-BgColor4 col-span-6 row-start-3 w-full xl:py-20 py-10">
        <div className="grid gap-x-3 gap-y-2">
          <span className="xl:col-start-1 xl:col-span-6 xl:row-start-1 col-start-1 col-span-5 row-start-1 text-3xl custom-ColorMain text-center mb-10">INDUMENTARIA</span>
          <img className="xl:col-start-1 xl:col-span-2 xl:row-start-2 m-auto col-start-1 col-span-2 row-start-2 sm:w-60 sm:h-60 w-40 h-40 xl:p-3 p-2 custom-BgColorMain border custom-BorderColor2 rounded-2xl"src={require("../media/GaleriaEj/Galeria7.jpg")} alt={"imagenPrueba"}/>
          <img className="xl:col-start-1 xl:col-span-2 xl:row-start-3 m-auto col-start-4 col-span-2 row-start-2 sm:w-60 sm:h-60 w-40 h-40 xl:p-3 p-2 custom-BgColorMain border custom-BorderColor2 rounded-2xl"src={require("../media/GaleriaEj/Galeria10.jpg")} alt={"imagenPrueba"}/>

          <div className="xl:col-start-3 xl:col-span-2 xl:row-start-2 col-start-1 col-end-6 row-start-3 xl:row-span-2 custom-BgColorMain border custom-BorderColor2 m-auto xl:p-8 p-3 rounded-2xl sm:w-fit sm:h-fit w-fit h-fit">
            <ReactImageGallery items={imagesUrls} showFullscreenButton={false} showNav={false} showPlayButton={false} autoPlay={true}/>
          </div>

          <img className="xl:col-start-5 xl:col-span-2 xl:row-start-2 m-auto col-start-1 col-span-2 row-start-4 sm:w-60 sm:h-60 w-40 h-40 xl:p-3 p-2 custom-BgColorMain border custom-BorderColor2 rounded-2xl" src={require("../media/GaleriaEj/Galeria8.jpg")} alt={"imagenPrueba"}/>
          <img className="xl:col-start-5 xl:col-span-2 xl:row-start-3 m-auto col-start-4 col-span-2 row-start-4 sm:w-60 sm:h-60 w-40 h-40 xl:p-3 p-2 custom-BgColorMain border custom-BorderColor2 rounded-2xl" src={require("../media/GaleriaEj/Galeria3.jpg")} alt={"imagenPrueba"}/>
          <NavLink className="xl:col-start-2 xl:col-span-4 xl:row-start-4 row-start-5 col-start-1 col-span-5 text-center custom-BgColor1 xl:text-2xl font-semibold hover:scale-110 border custom-BorderColor2 xl:mt-10 mt-5 xl:p-5 p-5 rounded-xl transition-all" onClick={()=>clickEvHome()} to="/Catalog"><span className="">VER CATÁLOGO</span></NavLink>
        </div>
      </div>      
      {/* Frase 2 */}
      <div className="relative row-start-5 col-start-3 col-span-2 h-4/6 w-full">
        <img className="h-full w-full rounded-full" src={require("../media/Naturaleza/Naturaleza2.JPG")} alt="Imagen fondo"/>
        <span className="absolute custom-BgColorMain bottom-1/3 left-1/2 -translate-x-1/2 whitespace-nowrap sm:text-2xl text-xs font-bold custom-Color2">"Trabajando de la mano de las comunidades locales"</span>
      </div>

    </motion.div>
  )
}
