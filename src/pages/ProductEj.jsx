import {motion} from 'framer-motion'
import ReactImageGallery from 'react-image-gallery';

export default function ProductEj() {
  const imagesUrls = [{id:0,original:require("../media/ProductoEj/ProdImg1.jpg"),alt:"ImagenPrueba1"},
                      {id:1,original:require("../media/ProductoEj/ProdImg2.jpg"),alt:"ImagenPrueba2"},
                      {id:2,original:require("../media/ProductoEj/ProdImg3.jpg"),alt:"ImagenPrueba3"},
                      {id:3,original:require("../media/ProductoEj/ProdImg4.jpg"),alt:"ImagenPrueba4"},
  ]

  return (
    <motion.div className="grid grid-cols-6 bg-amber-500 pt-20 text-center" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      {/* Titulo */}
      <span className="row-start-1 col-span-6 text-2xl font-semibold mb-10">NOMBRE DEL PRODUCTO</span>
      {/* Imagenes del Producto */}
      <div className="row-start-2 w-full  col-start-2 sm:col-end-5 col-end-6 border border-black">
        <ReactImageGallery items={imagesUrls} showPlayButton={false} showIndex={true}/>
      </div>
      {/* Botones */}
      <div className="flex flex-col sm:col-start-5 row-start-2 col-start-6 sm:gap-y-2 gap-y-3 place-content-center sm:ml-10 ml-1 sm:-mr-10 mr-4">
        <button className="sm:py-5 py-2 sm:text-base text-xs font-bold border border-neutral-800">Boton1</button>
        <button className="sm:py-5 py-2 sm:text-base text-xs font-bold border border-neutral-800">Boton2</button> 
        <button className="sm:py-5 py-2 sm:text-base text-xs font-bold border border-neutral-800">Boton3</button> 
        <button className="sm:py-5 py-2 sm:text-base text-xs font-bold border border-neutral-800">Boton4</button> 
      </div>
      {/* Descripcion */}
      <div className="row-start-3 sm:col-start-2 sm:col-end-6 col-start-1 col-end-7 mb-5 mt-10">
        <p className="border border-black text-lg font-semibold">DESCRIPCION</p>
        <p className="border border-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </motion.div>

  )
}
