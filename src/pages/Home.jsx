import { motion } from 'framer-motion'
import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import ReactPlayer from 'react-player'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react';
export default function Home() {
  const imagesUrls = [{original:require("../media/GaleriaEj/Galeria1.jpg"),alt:"ImagenCollage1",originalClass:"xl:w-96 xl:h-96 sm:w-64 w-48 h-48 cursor-default"},
                      {original:require("../media/GaleriaEj/Galeria2.jpg"),alt:"ImagenCollage2",originalClass:"xl:w-96 xl:h-96 sm:w-64 w-48 h-48 cursor-default"},
                      {original:require("../media/GaleriaEj/Galeria4.jpg"),alt:"ImagenCollage4",originalClass:"xl:w-96 xl:h-96 sm:w-64 w-48 h-48 cursor-default"},
                      {original:require("../media/GaleriaEj/Galeria5.jpg"),alt:"ImagenCollage5",originalClass:"xl:w-96 xl:h-96 sm:w-64 w-48 h-48 cursor-default"},
                      {original:require("../media/GaleriaEj/Galeria6.jpg"),alt:"ImagenCollage6",originalClass:"xl:w-96 xl:h-96 sm:w-64 w-48 h-48 cursor-default"}
  ]
  useEffect(() => {
    //window.scrollTo(0, 0);
  },[])
  return (
    <motion.div className="grid bg-slate-100 md:gap-y-4 gap-y-5 md:pt-15 pt-20 place-items-center" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
 
      {/* Presentacion */}
      <div className="flex flex-col text-center">
          <span className="pb-4 pt-1 xl:text-8xl text-6xl">Alwatoba</span>
          <span className="pt-2 xl:text-2xl text-1xl custom-ColorMain ">Quienes somos y que nos inspira</span>
            <ReactPlayer width='60vw' height='27vw' url='www.youtube.com/watch?v=cFPkypL_ap8'/>
          <NavLink className="mt-2 text-center md:text-3xl text-2xl custom-Color4 transition-all delay-75 " to="/Blogs">Leer más</NavLink>
        </div>
      {/* Collage fotos */}
      <div className='row-start-2 custom-BgColor4 w-full text-center py-16 my-10'>
        <span className="xl:text-7xl md:text-6xl sm:text-5xl text-4xl custom-ColorMain text-center">Indumentaria</span>
        <div className='flex flex-row place-content-center mt-5 lg:gap-x-7 xl:gap-x-10 2xl:gap-x-32 gap-x-2'>

          <div className=''>
            <div>
              <img className='md:w-60 md:h-60 h-32 w-32 shadow-lg shadow-black md:border-r-0 md:border-b border-b-0 border custom-BorderColorMain m-auto' src={require("../media/GaleriaEj/Galeria7.jpg")} alt={"imagenPrueba"}/>
              <div className='flex md:flex-row flex-col md:mt-10 border custom-BorderColorMain md:border-t border-t-0 shadow-lg shadow-black'>
                <img className='md:w-52 md:h-52 h-32 w-32' src={require("../media/GaleriaEj/Galeria3.jpg")} alt={"imagenPrueba"}/>
                <img className='md:w-52 md:h-52 h-32 w-32' src={require("../media/GaleriaEj/Galeria10.jpg")} alt={"imagenPrueba"}/>
              </div>
            </div>
          </div>

          <div className='my-auto shadow-lg shadow-black border custom-BorderColorMain border-x-0'>
            <ReactImageGallery items={imagesUrls} showFullscreenButton={false} showNav={false} showPlayButton={false} autoPlay={true}/>
          </div>

          <div className=''>
            <div>
              <img className='md:w-60 md:h-60 h-32 w-32 shadow-lg shadow-black md:border-l-0 md:border-b border-b-0 border custom-BorderColorMain m-auto ' src={require("../media/GaleriaEj/Galeria8.jpg")} alt={"imagenPrueba"}/>
              <div className='flex md:flex-row flex-col md:mt-10 border custom-BorderColorMain md:border-t border-t-0 shadow-lg shadow-black'>
                <img className='md:w-52 md:h-52 h-32 w-32' src={require("../media/GaleriaEj/Galeria9.jpg")} alt={"imagenPrueba"}/>
                <img className='md:w-52 md:h-52 h-32 w-32' src={require("../media/GaleriaEj/Galeria8.jpg")} alt={"imagenPrueba"}/>
              </div>
            </div>
          </div>

        </div>
        <div className='mt-10'>
          <NavLink className="hover:shadow-xl hover:shadow-black text-center custom-BgColor3 custom-ColorMain xl:text-2xl font-semibold  xl:mt-10 mt-5 xl:p-5 p-5 rounded-xl" to="/Catalog/All">Ver Catálogo</NavLink>
        </div>
      </div>

    </motion.div>
  )
}
