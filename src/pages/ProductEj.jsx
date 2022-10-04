import {motion, SwitchLayoutGroupContext} from 'framer-motion'
import { useEffect } from 'react';
import ReactImageGallery from 'react-image-gallery';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import {doc ,getDoc} from 'firebase/firestore'
import { useState } from 'react'

export default function ProductEj() {
  const params = useParams()
  const [product, setProduct] = useState(null)
  const [imagesCarousel, setImagesCarousel] = useState({})
  const keyword = params.id

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(keyword)
    const getProductDoc = async ()=>{
      const id = doc(db,"Productos",keyword)
      const data = await getDoc(id)
      setImagesCarousel(setImagesForCarousel(data.data().imgsSrc))
      setProduct(data.data())
    }
    getProductDoc()
  },[])

  function setImagesForCarousel(list){
    let result= []
    list.forEach((img)=>{
      result.push({original: img,alt: "cargando Imagen"})
    })
    return result
  }
  return (
    <motion.div className="grid pt-20 text-center" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      {!product && <motion.div className='w-screen h-screen relative font-comfortaa'  initial={{opacity:0}} animate={{opacity:1}}>
        <span className='absolute top-2/4 bottom-2/4'>Cargando</span>
      </motion.div>}

      {product && <motion.div  initial={{opacity:0}} animate={{opacity:1}}>
      <div className="grid grid-cols-7 row-start-2">
        {/* ImageViewer */}
        <div className="sm:col-start-2 col-start-1 sm:col-end-4 col-end-4 row-start-3 row-span-1 sm:ml-6 ml-4 w-full h-full ">
          <ReactImageGallery items={imagesCarousel} showPlayButton={false} showIndex={true}/>
        </div>
        {/* Informacion */}
        <div className="flex flex-col sm:col-start-4 sm:col-span-3 row-start-2 row-end-5 col-start-4 col-span-3 sm:gap-y-4 gap-y-3 sm:ml-20 ml-8 place-content-start">
          {/* Nombre */}
          <span className="custom-Color3 md:text-4xl sm:text-3xl text-xl font-semibold pt-5 font-comfortaa border-b-2 custom-BorderColor3 whitespace-nowrap">{product.info.nombre}</span>
          {/* Precio */}
          <span className="sm:text-4xl text-xl text-start font-bold font-comfortaa custom-Color3">${product.info.precio}</span>
          {/* stock */}
          <span className="sm:text-2xl text-md text-start font-bold font-comfortaa custom-Color4">Stock:{product.info.stock}</span>
          {/* Oferta */}
          <span className="custom-Color3 font-notethis sm:text-xl text-xs text-start"><span className="font-bold">5%</span> de descuento pagando por transferencia bancaria</span>
          {/* Modal */}
          <button className="custom-Color4 font-comfortaa sm:text-xl text-base hover:scale-110 font-bold transition-all delay-75">Ver formas de pago</button>
          {/* Input cantidad */}
          <form className="text-start font-comfortaa">
            <label>Cantidad</label><br/>
            <input className='w-full p-2 rounded-xl custom-BgColorMain border border-black mb-3' defaultValue="1" type="number"/>
            <button className="custom-BgColor4 custom-Color3 scale-90 hover:text-white border py-2 w-full text-2xl rounded-full font-comfortaa transition-all delay-75" type="submit">Consultar</button>
          </form>
        </div>
      </div>
      {/* Descripcion */}
      <div className="col-start-1 w-full row-start-3 border-y-2 mt-10 mb-16 custom-BorderColor4 custom-Color4">
        <p className="md:text-4xl sm:text-3xl text-2xl font-semibold font-comfortaa">{product.info.descripcion}</p>
        {/* Caracteristicas */}
        <p className="sm:text-2xl text-base text-center font-oregano custom-Color3">{product.info.caracteristicas && product.info.caracteristicas}</p>
        {/* Anotacion especial */}
        <p className="md:text-2xl text-xl mt-10 custom-Color4 font-comfortaa">{product.info.anotacionEsp && product.info.anotacionEsp}</p>
      </div>
      </motion.div>
      }
    </motion.div>

  )
}
