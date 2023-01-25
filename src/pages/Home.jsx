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
    </motion.div>
  )
}
