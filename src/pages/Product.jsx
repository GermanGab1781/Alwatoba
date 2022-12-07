import {motion} from 'framer-motion'
import { useEffect } from 'react';
import ReactImageGallery from 'react-image-gallery';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import {doc ,getDoc} from 'firebase/firestore'
import { useState } from 'react'
import Swal from 'sweetalert2'

export default function Product() {
  const [product, setProduct] = useState(null)
  const [imagesCarousel, setImagesCarousel] = useState({})
  const params = useParams()
  const [productContact, setProductContact] =useState(undefined)

  useEffect(() => {
    window.scrollTo(0, 0);
    const keyword = params.id
    const getProductDoc = async ()=>{
      const id = doc(db,"Productos",keyword)
      const data = await getDoc(id)
      setImagesCarousel(setImagesForCarousel(data.data().imgsSrc))
      setProduct(data.data())
      setProductContact({link:`https://alwatoba.com/Product/${params.id}`,name:data.data().info.nombre})
    }
    getProductDoc()
  },[params])

  function contactMethods(){
    Swal.fire({
      html:`
        <span style="font-family:'COMFORTAA';font-size:30px;">Contactanos</span>
        <div style="display:flex;flex-wrap:wrap; gap:5px; justify-content:center; margin-top:20px;"> 
          
          <a class="customButtonSwal" href="https://wa.me/5493704413281?text=Hola, queria consultar sobre el producto ${productContact.link}" target="_blank" rel='noreferrer'>Mensaje por Whatsapp</a>
          <a class="customButtonSwal" href="https://www.instagram.com/alwatoba" target="_blank" rel='noreferrer'>Nuestro Instagram</a>
          <a class="customButtonSwal" href="mailto:alwatoba@gmail.com?subject=Consulta sobre ${productContact.name}&body=Hola, queria consultar sobre el producto ${productContact.link}" target="_blank" rel='noreferrer'>Envianos un Mail</a>
        </div>
      `
    })
  }

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
      result.push({original: img.Url,thumbnail:img.Url,loading:"lazy",alt: "cargando Imagen",originalClass:"xl:w-full xl:h-full md:w-64 w-48 h-full cursor-default"})
    })
    return result
  }
  return (
    <motion.div className="grid pt-20 text-center" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      {!product && <motion.div className='w-screen h-screen relative font-comfortaa'  initial={{opacity:0}} animate={{opacity:1}}>
        <span className='absolute top-2/4 bottom-2/4'>Cargando</span>
      </motion.div>}

      {product && <motion.div  initial={{opacity:0}} animate={{opacity:1}}>
      <div className="grid grid-cols-7 row-start-2 font-comfortaa">
        {/* ImageViewer */}
        <div className="md:col-start-2 md:col-end-4 md:row-start-3 col-span-7 row-start-1 m-auto col-start-2 row-span-1 md:ml-6 ml-4">
          <ReactImageGallery thumbnailPosition='left' items={imagesCarousel} showPlayButton={false} showIndex={true}/>
        </div>
        {/* Informacion */}
        <div className="flex flex-col md:col-start-4 md:col-span-3 row-start-2 md:row-end-5 col-span-7 md:gap-y-4 gap-y-3 md:ml-20 md:mx-0 mx-3">

          {/* Nombre */}
          <span className="w-full text-black md:text-6xl text-4xl font-semibold pt-5 border-b-2 custom-BorderColor3">{product.info.nombre}</span>
          {/* Precio */}
          <span className="md:text-5xl text-3xl custom-Color3"><span className='text-slate-300'>$</span>{product.info.precio}</span>
          {/* Stock */}
          {(product.info.stock > "0") &&
            <span className="md:text-3xl text-xl font-bold custom-Color4">Stock:{product.info.stock}</span>}
          {(product.info.stock === "0") &&
            <span className="md:text-3xl text-xl font-bold custom-Color4">Stock:Solo por pedido</span>}
          {console.log(product.info.stock)}
          {/* Oferta */}
          <span className="custom-Color3 md:text-xl text-sm"><span className="font-bold">5%</span> de descuento pagando por transferencia bancaria</span>
          {/* Metodos de Pago */}
          <button onClick={paymentMethods} className="custom-Color4 md:text-2xl text-xl hover:text-slate-300 hover:rounded-full p-3 font-bold transition-all delay-75">Ver formas de pago</button>
          {/* Metodos de Contacto */}
          <button to="/" onClick={contactMethods} className="custom-BgColor4 custom-Color3 scale-90 hover:text-white border w-96 py-2 text-2xl place-self-center rounded-full transition-all delay-75">Consultar</button>
        </div>
      </div>
      {/* Descripcion */}
      <div className="col-start-1 w-full row-start-3 border-y-2 mt-10 mb-16 custom-BorderColor4 custom-Color4">
        <p className="md:text-5xl sm:text-3xl text-2xl font-semibold">{product.info.descripcion}</p>
        {/* Caracteristicas */}
        <p className="md:text-3xl text-base text-center custom-Color3">{product.info.caracteristicas && product.info.caracteristicas}</p>
        {/* Anotacion especial */}
        <p className="md:text-3xl text-xl mt-10 custom-Color4">{product.info.anotacionEsp && product.info.anotacionEsp}</p>
      </div>
      </motion.div>
      }
    </motion.div>

  )
}
