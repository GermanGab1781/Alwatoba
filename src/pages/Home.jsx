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
    <motion.div className="grid bg-slate-100 md:gap-y-4 gap-y-5 grid-cols-6 md:pt-12 pt-20 place-items-center" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      
      {/* Presentacion */}
      <div className="grid row-start-1 col-start-1 col-span-6 text-center ">
        <motion.div className="flex flex-col" initial={{x:"5%",opacity:0,scale:.7}} animate={{x:0,opacity:1,scale:1,transition:{duration:4}}}exit={{opacity:0}}>
          <span className="font-bold pb-4 pt-1 xl:text-8xl sm:text-6xl text-5xl custom-Color3 font-mathlete ">Alwatoba</span>
          <span className="font-semibold pt-2 xl:text-2xl text-1xl custom-ColorMain font-notethis ">Quienes somos y que nos inspira</span>
          <div className="custom-BgColorMain ">
            <ReactPlayer width='50vw' height='27vw' url='www.youtube.com/watch?v=cFPkypL_ap8'/>
          </div>
          <NavLink className="mt-2 text-center text-3xl custom-Color4 hover:scale-110 hover:font-bold font-notethis transition-all delay-75" to="/Blogs">Leer más</NavLink>
        </motion.div>

      </div>
      {/* Collage fotos */}
      <div className="custom-BgColor4 col-span-6 row-start-3 w-full xl:py-20 py-10">
        <div className="grid gap-x-3 gap-y-2">
          <span className="xl:col-start-1 xl:col-span-6 xl:row-start-1 col-start-1 col-span-5 row-start-1  xl:text-8xl md:text-7xl sm:text-6xl text-5xl custom-ColorMain text-center mb-10 font-notethis">INDUMENTARIA</span>
          <img className="xl:col-start-1 xl:col-span-2 xl:row-start-2 m-auto col-start-1 col-span-2 row-start-2 sm:w-60 sm:h-60 w-40 h-40 xl:p-3 p-2 shadow-lg shadow-black rounded-2xl"src={require("../media/GaleriaEj/Galeria7.jpg")} alt={"imagenPrueba"}/>
          <img className="xl:col-start-1 xl:col-span-2 xl:row-start-3 m-auto col-start-4 col-span-2 row-start-2 sm:w-60 sm:h-60 w-40 h-40 xl:p-3 p-2 shadow-lg shadow-black rounded-2xl"src={require("../media/GaleriaEj/Galeria10.jpg")} alt={"imagenPrueba"}/>

          <div className="xl:col-start-3 xl:col-span-2 xl:row-start-2 col-start-1 col-end-6 row-start-3 xl:row-span-2 shadow-lg shadow-black m-auto xl:p-8 p-3 rounded-2xl sm:w-fit sm:h-fit w-fit h-fit">
            <ReactImageGallery items={imagesUrls} showFullscreenButton={false} showNav={false} showPlayButton={false} autoPlay={true}/>
          </div>

          <img className="xl:col-start-5 xl:col-span-2 xl:row-start-2 m-auto col-start-1 col-span-2 row-start-4 sm:w-60 sm:h-60 w-40 h-40 xl:p-3 p-2 shadow-lg shadow-black rounded-2xl" src={require("../media/GaleriaEj/Galeria8.jpg")} alt={"imagenPrueba"}/>
          <img className="xl:col-start-5 xl:col-span-2 xl:row-start-3 m-auto col-start-4 col-span-2 row-start-4 sm:w-60 sm:h-60 w-40 h-40 xl:p-3 p-2 shadow-lg shadow-black rounded-2xl" src={require("../media/GaleriaEj/Galeria3.jpg")} alt={"imagenPrueba"}/>
          <NavLink className="xl:col-start-1 xl:col-span-6 xl:row-start-4 row-start-5 col-start-1 col-span-5 m-auto mt-6 shadow-xl shadow-black hover:scale-110 transition-all" onClick={()=>clickEvHome()} to="/Catalog"><span className="text-center custom-BgColor1 custom-ColorMain xl:text-2xl font-semibold border custom-BorderColor2 xl:mt-10 mt-5 xl:p-5 p-5 rounded-xl font-whatever">VER CATÁLOGO</span></NavLink>
        </div>
      </div>      
      {/* Frase 2 */}     
      <div className="relative row-start-4 col-start-1 col-span-6 xl:h-4/6 sm:h-4/6 w-1/2">
        <img className="h-full w-full rounded-full shadow shadow-black" src={require("../media/Naturaleza/Naturaleza1.JPG")} alt="Imagen fondo"/>
        <span className="absolute bg-slate-100 bottom-1/3 left-1/2 -translate-x-1/2 whitespace-nowrap md:text-5xl sm:text-2xl text-xl font-bold custom-ColorMain font-notethis">"Conscientes de nuestro impacto en la Cultura"</span>
      </div>

    </motion.div>
  )
}
