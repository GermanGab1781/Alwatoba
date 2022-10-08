import {motion, SwitchLayoutGroupContext} from 'framer-motion'
import { useEffect } from 'react';
import ReactImageGallery from 'react-image-gallery';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import {doc ,getDoc} from 'firebase/firestore'
import { useState } from 'react'
import Swal from 'sweetalert2'

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

  function paymentMethods (){
    Swal.fire({
      html:`
      <div style="display:flex;flex-wrap:wrap; justify-content:center;"> 
        <img src="https://firebasestorage.googleapis.com/v0/b/alwatoba-store.appspot.com/o/paymentMethods%2Famerican-express.png?alt=media&token=7cf72c4e-9bdd-4c79-bcde-2ff9ec0d76b1" alt="American Express" />
        <img src="https://firebasestorage.googleapis.com/v0/b/alwatoba-store.appspot.com/o/paymentMethods%2Fargencard.png?alt=media&token=984977c5-e47a-4664-9f88-5f289ca3fcac" alt="Argencard" />
        <img src="https://firebasestorage.googleapis.com/v0/b/alwatoba-store.appspot.com/o/paymentMethods%2Fcabal.png?alt=media&token=6b89e396-bac2-4204-8a0c-340be0c7529b" alt="Cabal" />
        <img src="https://firebasestorage.googleapis.com/v0/b/alwatoba-store.appspot.com/o/paymentMethods%2Fdiners-club.png?alt=media&token=d4113368-5214-4015-bd9b-4b521dba5dee" alt="Metodo de pago" />
        <img src="https://firebasestorage.googleapis.com/v0/b/alwatoba-store.appspot.com/o/paymentMethods%2Fmaestro.png?alt=media&token=7e936dd1-1bc3-4ea5-a10a-b1e97c28fa43" alt="Maestro" />
        <img src="https://firebasestorage.googleapis.com/v0/b/alwatoba-store.appspot.com/o/paymentMethods%2Fmastercard.png?alt=media&token=e7e7a024-bb43-4953-869f-f7bc75077365" alt="Mastercard" />
        <img src="https://firebasestorage.googleapis.com/v0/b/alwatoba-store.appspot.com/o/paymentMethods%2Fmercadopago.png?alt=media&token=0bbd6280-20fc-44ae-b6d0-2ebb881487f7" alt="Mercado Pago" />
        <img src="https://firebasestorage.googleapis.com/v0/b/alwatoba-store.appspot.com/o/paymentMethods%2Fnaranja.png?alt=media&token=2e92d9df-caf7-44e5-bb49-c218ec48438f" alt="Tarjeta Naranja" />
        <img src="https://firebasestorage.googleapis.com/v0/b/alwatoba-store.appspot.com/o/paymentMethods%2Fnativa.png?alt=media&token=bb0a786a-b004-4b9b-b8af-d8cb7d63e9c1" alt="Nativa" />
        <img src="https://firebasestorage.googleapis.com/v0/b/alwatoba-store.appspot.com/o/paymentMethods%2Frapipago.png?alt=media&token=bc215f15-a8df-4562-b85a-9323458b2abb" alt="Rapipago" />
        <img src="https://firebasestorage.googleapis.com/v0/b/alwatoba-store.appspot.com/o/paymentMethods%2Fpagofacil.png?alt=media&token=9bfe03e8-6629-4360-addc-09cf837b5534" alt="Pagofacil" />
        <img src="https://firebasestorage.googleapis.com/v0/b/alwatoba-store.appspot.com/o/paymentMethods%2Fvisa.png?alt=media&token=8fda1adf-91a1-419d-95e9-65fd09c7a484" alt="Visa" />
        <img src="https://firebasestorage.googleapis.com/v0/b/alwatoba-store.appspot.com/o/paymentMethods%2Facordar.png?alt=media&token=5706fa6e-fbed-4008-95ab-f489d6587b6f" alt="Acordar" />
        <img src="https://firebasestorage.googleapis.com/v0/b/alwatoba-store.appspot.com/o/paymentMethods%2Fdeposito.png?alt=media&token=a90208c8-a257-4376-ae41-01020e31a41d" alt="Deposito" />
      </div>
      `
    })
  }

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
          <button onClick={paymentMethods} className="custom-Color4 font-comfortaa sm:text-xl text-base hover:scale-110 font-bold transition-all delay-75">Ver formas de pago</button>
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
