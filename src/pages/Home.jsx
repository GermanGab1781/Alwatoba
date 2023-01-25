import { motion } from 'framer-motion'
import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'
import SvgImg from '../media/UNO.svg'
import SvgImg2 from '../media/DOS.svg'
import SvgImg3 from '../media/TRES.svg'
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
      return <motion.div className='relative cursor-default custom-ColorMain custom-ColorMain custom-minH90'>
        <img src={SvgImg2} alt="Cargando Imagen" style={{ height: "100%" }} className='cursor-default w-screen relative'></img>
        <motion.span
          className='absolute flex flex-col gap-y-16 bottom-1/4 right-10 transform -translate-x-1/2 -translate-y-1/2 p-5 h-fit w-fit'
          initial={{ opacity: 0, y: -800 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
        >
          <NavLink className='p-4 text-xl border border-black custom-BgColor3 w-full text-end cursor-pointer' to="/Blogs">
            &#10132;Conocenos
          </NavLink>
        </motion.span>
      </motion.div>
    }
    return <motion.div className='relative cursor-default custom-ColorMain custom-minH90'>
      <img src={SvgImg2} alt="Cargando Imagen" style={{ height: "100%" }} className='cursor-default w-screen relative'></img>
      <motion.span
        className='absolute flex flex-col gap-y-10 transform bottom-5 right-7 -translate-y-1/2 '
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.9 }}>
        <NavLink className='p-4 text-md border border-black custom-BgColor3 w-full text-end cursor-pointer' to="/Blogs">
          &#10132;Conocenos
        </NavLink>
      </motion.span>
    </motion.div>
  }

  function SecondSlide() {
    if (!isMobile) {
      return <motion.div className='relative cursor-default custom-ColorMain custom-ColorMain custom-minH90'>
        <img src={SvgImg} alt="Cargando Imagen" style={{ height: "100%" }} className='cursor-default w-screen relative'></img>
        <motion.span
          className='absolute flex flex-col gap-y-16 bottom-1/4 right-10 transform -translate-x-1/2 -translate-y-1/2 p-5 h-fit w-fit'
          initial={{ opacity: 0, y: -800 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
        >
          <NavLink className='p-4 text-xl border border-black custom-BgColor3 w-full text-end cursor-pointer' to="/Blogs">
            &#10132;Conocenos
          </NavLink>
        </motion.span>
      </motion.div>
    }
    return <motion.div className='relative cursor-default custom-ColorMain custom-minH90'>
      <img src={SvgImg} alt="Cargando Imagen" style={{ height: "100%" }} className='cursor-default w-screen relative'></img>
      <motion.span
        className='absolute flex flex-col gap-y-10 transform bottom-5 right-7 -translate-y-1/2 '
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.9 }}>
        <NavLink className='p-4 text-md border border-black custom-BgColor3 w-full text-end cursor-pointer' to="/Blogs">
          &#10132;Conocenos
        </NavLink>
      </motion.span>
    </motion.div>
  }

  function ThirdSlide() {
    if (!isMobile) {
      return <motion.div className='relative cursor-default custom-ColorMain custom-ColorMain custom-minH90'>
        <img src={SvgImg3} alt="Cargando Imagen" style={{ height: "100%" }} className='cursor-default w-screen relative'></img>
        <motion.span
          className='absolute flex flex-col gap-y-16 bottom-1/4 right-10 transform -translate-x-1/2 -translate-y-1/2 p-5 h-fit w-fit'
          initial={{ opacity: 0, y: -800 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
        >
          <NavLink className='p-4 text-xl border border-black custom-BgColor3 w-full text-end cursor-pointer' to="/Blogs">
            &#10132;Conocenos
          </NavLink>
        </motion.span>
      </motion.div>
    }
    return <motion.div className='relative cursor-default custom-ColorMain custom-minH90'>
      <img src={SvgImg3} alt="Cargando Imagen" style={{ height: "100%" }} className='cursor-default w-screen relative'></img>
      <motion.span
        className='absolute flex flex-col gap-y-10 transform bottom-5 right-7 -translate-y-1/2 '
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.9 }}>
        <NavLink className='p-4 text-md border border-black custom-BgColor3 w-full text-end cursor-pointer' to="/Blogs">
          &#10132;Conocenos
        </NavLink>
      </motion.span>
    </motion.div>
  }
  const imagesUrls2 = [
    { original: require("../media/NubeAlwaHorizontal.jpg"), alt: "ImagenCollage1", renderItem: FirstSlide },
    { original: require("../media/GaleriaEj/Galeria2.jpg"), alt: "ImagenCollage2", renderItem: SecondSlide },
    { original: require("../media/GaleriaEj/Galeria2.jpg"), alt: "ImagenCollage2", renderItem: ThirdSlide }
  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <motion.div className="grid bg-slate-100 md:gap-y-4 gap-y-5 md:pt-15 pt-16 place-items-center " initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Main Slider */}
      <ReactImageGallery items={imagesUrls2} showThumbnails={false} showFullscreenButton={false} showPlayButton={true} slideInterval={9000} autoPlay={false} additionalClass={''} />
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
