import { motion } from 'framer-motion'
import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import ReactPlayer from 'react-player'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'
export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const imagesUrls = [{ original: require("../media/GaleriaEj/Galeria1.jpg"), alt: "ImagenCollage1", originalClass: "xl:w-96 xl:h-96 sm:w-64 w-48 h-48 cursor-default" },
  { original: require("../media/GaleriaEj/Galeria2.jpg"), alt: "ImagenCollage2", originalClass: "xl:w-96 xl:h-96 sm:w-64 w-48 h-48 cursor-default" },
  { original: require("../media/GaleriaEj/Galeria4.jpg"), alt: "ImagenCollage4", originalClass: "xl:w-96 xl:h-96 sm:w-64 w-48 h-48 cursor-default" },
  { original: require("../media/GaleriaEj/Galeria5.jpg"), alt: "ImagenCollage5", originalClass: "xl:w-96 xl:h-96 sm:w-64 w-48 h-48 cursor-default" },
  { original: require("../media/GaleriaEj/Galeria6.jpg"), alt: "ImagenCollage6", originalClass: "xl:w-96 xl:h-96 sm:w-64 w-48 h-48 cursor-default" }
  ]


  function FirstSlide() {
    if (!isMobile) {
      return <motion.div className='relative cursor-default custom-ColorMain custom-ColorMain'>
        <img src={require("../media/NubeAlwaHorizontal.png")} alt="XD" style={{ height: '90vh' }} className='object-fill cursor-default w-screen relative'></img>
        <motion.span className='absolute flex flex-col gap-y-16 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5  h-fit w-fit'>
          <motion.span initial={{ opacity: 0.8, y: -700 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.9 }} className='text-5xl p-2 rounded-md custom-BgColor3 font-bold'>
            Nuestra Pasión y Herencia
          </motion.span>
          <motion.span initial={{ opacity: 0.8, y: 300 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.9 }}>
            <NavLink className='p-5 border border-black custom-BgColor3 w-full text-end cursor-pointer' to="/Blogs">
              &#10132;Conocenos
            </NavLink>
          </motion.span>
        </motion.span>
      </motion.div>
    }
    return <motion.div className='relative cursor-default custom-Color1'>
      <img src={require("../media/NubeAlwaHorizontal.png")} alt="XD" style={{ height: '60vh' }} className='object-fill cursor-default w-screen relative'></img>
      <motion.span className='absolute flex flex-col gap-y-10 transform bottom-5 left-7 -translate-y-1/2 '>
        <motion.span initial={{ opacity: 0.8, y: -700 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.9 }} className='text-xl p-2 rounded-md custom-BgColorMain font-bold'>
          Nuestra Pasión y Herencia
        </motion.span>
        <motion.span initial={{ opacity: 0.8, y: 300 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.9 }}>
          <NavLink className='p-3 text-md border border-black custom-BgColor3 w-full text-end cursor-pointer' to="/Blogs">
            &#10132;Conocenos
          </NavLink>
        </motion.span>
      </motion.span>
    </motion.div>
  }

  function SecondSlide() {
    if (!isMobile) {
      return <div className=''>
        <ReactPlayer width='100vw' height='90vh' url='www.youtube.com/watch?v=cFPkypL_ap8' />
        <span className='absolute bottom-10 left-10 custom-BgColorMain p-1 rounded-md text-5xl'>¿Quienes Somos?</span>
      </div>
    }
    return <div className='h-full'>
      <ReactPlayer width='100vw' height='60vh' url='www.youtube.com/watch?v=cFPkypL_ap8' />
      <span className='absolute bottom-10 left-10 custom-BgColorMain p-1 rounded-md text-3xl'>¿Quienes Somos?</span>
    </div>
  }
  const imagesUrls2 = [
    { original: require("../media/NubeAlwaHorizontal.png"), alt: "ImagenCollage1", renderItem: FirstSlide },
    { original: require("../media/GaleriaEj/Galeria2.jpg"), alt: "ImagenCollage2", renderItem:  SecondSlide }
  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <motion.div className="grid bg-slate-100 md:gap-y-4 gap-y-5 md:pt-15 pt-16 place-items-center " initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Main Slider */}
      <ReactImageGallery items={imagesUrls2} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} slideInterval={6000} autoPlay={true} additionalClass={''} />
      {/* Presentacion */}

      <div className="flex flex-col my-5 text-center custom-BgColor4 w-screen place-items-center">
        <span className="py-2 xl:text-3xl text-1xl custom-Color3 ">Quienes somos y que nos inspira</span>
        {/* Video Nosotras */}
        {isMobile
          ? <ReactPlayer width='100vw' height='50vw' url='www.youtube.com/watch?v=cFPkypL_ap8' />
          : <ReactPlayer width='60vw' height='27vw' url='www.youtube.com/watch?v=cFPkypL_ap8' />
        }
        <NavLink className="mt-2 text-center md:text-3xl text-2xl custom-ColorMain transition-all delay-75 " to="/Blogs">Leer más</NavLink>
      </div>
      {/* Collage fotos */}
      <div className='row-start-3 custom-BgColor4 w-full text-center py-16 mb-10'>
        <span className="xl:text-7xl md:text-6xl sm:text-5xl text-4xl custom-ColorMain text-center">Indumentaria</span>
        <div className='flex flex-row place-content-center mt-5 lg:gap-x-7 xl:gap-x-10 2xl:gap-x-32 gap-x-2'>

          <div className=''>
            <div>
              <img className='md:w-60 md:h-60 h-32 w-32 shadow-lg shadow-black md:border-r-0 md:border-b border-b-0 border custom-BorderColorMain m-auto' src={require("../media/GaleriaEj/Galeria7.jpg")} alt={"imagenPrueba"} />
              <div className='flex md:flex-row flex-col md:mt-10 border custom-BorderColorMain md:border-t border-t-0 shadow-lg shadow-black'>
                <img className='md:w-52 md:h-52 h-32 w-32' src={require("../media/GaleriaEj/Galeria3.jpg")} alt={"imagenPrueba"} />
                <img className='md:w-52 md:h-52 h-32 w-32' src={require("../media/GaleriaEj/Galeria10.jpg")} alt={"imagenPrueba"} />
              </div>
            </div>
          </div>

          <ReactImageGallery items={imagesUrls} showFullscreenButton={false} showNav={false} showPlayButton={false} autoPlay={true} additionalClass={'my-auto shadow-lg shadow-black border custom-BorderColorMain border-x-0'} />

          <div className=''>
            <div>
              <img className='md:w-60 md:h-60 h-32 w-32 shadow-lg shadow-black md:border-l-0 md:border-b border-b-0 border custom-BorderColorMain m-auto ' src={require("../media/GaleriaEj/Galeria8.jpg")} alt={"imagenPrueba"} />
              <div className='flex md:flex-row flex-col md:mt-10 border custom-BorderColorMain md:border-t border-t-0 shadow-lg shadow-black'>
                <img className='md:w-52 md:h-52 h-32 w-32' src={require("../media/GaleriaEj/Galeria9.jpg")} alt={"imagenPrueba"} />
                <img className='md:w-52 md:h-52 h-32 w-32' src={require("../media/GaleriaEj/Galeria8.jpg")} alt={"imagenPrueba"} />
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
