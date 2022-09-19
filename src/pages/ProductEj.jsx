import {motion} from 'framer-motion'
import { useEffect } from 'react';
import ReactImageGallery from 'react-image-gallery';


export default function ProductEj() {
  const imagesUrls = [{original:require("../media/ProductoEj/ProdImg1.jpg"),alt:"ImagenPrueba1"},
                      {original:require("../media/ProductoEj/ProdImg2.jpg"),alt:"ImagenPrueba2"},
                      {original:require("../media/ProductoEj/ProdImg3.jpg"),alt:"ImagenPrueba3"},
                      {original:require("../media/ProductoEj/ProdImg4.jpg"),alt:"ImagenPrueba4"},
  ]
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  return (
    <motion.div className="grid pt-20 text-center" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      {/* Wrapper */}
      <div className="grid grid-cols-6 row-start-2">
        {/* ImageViewer */}
        <div className="sm:col-start-2 col-start-1 sm:col-end-4 col-end-4 row-start-3 row-span-1 sm:ml-6 ml-4 w-full h-full ">
          <ReactImageGallery items={imagesUrls} showPlayButton={false} showIndex={true}/>
        </div>
        {/* Informacion */}
        <div className="flex flex-col sm:col-start-4 sm:col-span-2 row-start-2 row-end-5 col-start-4 col-span-3 sm:gap-y-4 gap-y-3 sm:ml-20 ml-8 place-content-start">
          {/* Nombre */}
          <span className="custom-Color3 md:text-4xl sm:text-3xl text-xl font-semibold pt-5 font-notethis border-b-2 custom-BorderColor3">Cartera Cuero edicion</span>
          {/* Precio */}
          <span className="sm:text-4xl text-xl text-start font-bold custom-Color3">$15.500</span>
          {/* Oferta */}
          <span className="custom-Color3 font-notethis sm:text-xl text-xs text-start"><span className="font-bold">5%</span> de descuento pagando por transferencia bancaria</span>
          {/* Modal */}
          <button className="custom-Color4 font-notethis sm:text-xl text-base hover:scale-110 font-bold transition-all delay-75">Ver formas de pago</button>
          {/* Input cantidad */}
          <form className="text-start font-oregano">
            <label>Cantidad</label><br/>
            <input className='w-full p-2 rounded-xl custom-BgColorMain border border-black mb-3' defaultValue="1" type="number"/>
            <button className="custom-BgColor4 custom-Color3 scale-90 hover:scale-100 hover:text-white border py-2 w-full text-2xl rounded-full font-whatever transition-all delay-75" type="submit">Consultar</button>
          </form>
        </div>
      </div>
      {/* Descripcion */}
      <div className="col-start-1 w-full row-start-3 border-y-2 mt-10 mb-16 custom-BorderColorMain custom-Color4 ">
        <p className="md:text-4xl sm:text-3xl text-2xl font-semibold font-notethis">Caracteristicas</p>
        <p className="sm:text-2xl text-base text-center font-oregano custom-Color3">Sobre de cuero curtido vegetal con apliques de chaguar. Tamaño A4. Ancho 29 cm, Alto 45 cm.</p>
        {/* Anotacion especial */}
        <p className="md:text-3xl text-xl mt-10 custom-Color4 font-oregano">En exposición Museo de Arte Popular José Hernández</p>
      </div>
    </motion.div>

  )
}
