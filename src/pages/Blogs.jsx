import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function Blogs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  return (
    <motion.div className="grid pt-24 custom-Color3">
      {/* Titulo */}
      <span className="row-start-1 text-center text-6xl font-bold pb-4 font-notethis custom-ColorMain">HISTORIA</span>
      <div className="flex flex-col  gap-y-3 relative row-start-2 md:mx-20 mx-10 h-fit p-4 my-1 font-notethis md:text-3xl text-xl"> 
        <span>
          <span className="ml-3 font-bold custom-ColorMain">Somos Mariana y Yandyra Chagra</span>
          , crecimos en Formosa, con el sol como regente y la naturaleza a cada paso en siestas eternas de juegos sin tiempo, en una familia de artistas donde floreció nuestro gusto por el arte y el diseño. Entre pinceles, telas y máquinas de coser el arte de “hacer a mano” se desarrollaba diariamente entre juegos y creación de atuendos para usar en fiestas o eventos.
        </span>
        {/* Imagenes Nosotras */}
        <div className="flex flex-row">
          <img className="h-1/2 w-1/2 rounded-full shadow shadow-black" src={require("../media/Nosotras/Nosotras1.jpg")} alt="Imagen fondo"/>
          <img className=" w-2/5 h-2/5  shadow shadow-black" src={require("../media/Nosotras/Nosotras3.jpg")} alt="Imagen fondo"/>
        </div>
        <span>
          <span className="ml-3 font-bold custom-ColorMain">La valoración</span> de las artesanías indígenas vendría por añadidura, por ser expresión cultural de pueblos ancestrales de la zona.
        </span>
        <span>
          <span className="ml-3 font-bold custom-ColorMain">En el año 1995</span> nace en la imaginación de una visionaria, nuestra Madre "Susana Enriqueta Brunatti", la creación de sastrería con apliques de tejido de chaguar. Ella es la precursora de nuestra marca y la que nos llevó a andar por los caminos del arte indígena. Así como nosotras, estuvo teñida por grandes artistas como su abuelo José Speroni, reconocido pintor argentino de la cultura gauchesca e indígena y paisajes, como así también destacado en las artes visuales, artes decorativas e intervencionistas, perteneciente a la Escuela Argentina 1875 - 1951 y de sus Tías Mariana y Juana Brunatti, grandes diseñadoras de alta costura de la ciudad de La Plata en los años 30’ y 40’.
        </span>
        <span>
          <span className="ml-3 font-bold custom-ColorMain">Luego de emigrar</span> y vivir en diferentes países y ciudades, cada una a su tiempo, volvimos a instalarnos en Formosa. Transitando diferentes derroteros laborales, Mariana como licenciada en informática y diplomada en diseño de modas y Yandyra como arquitecta, nos encontramos ante el desafío de elegir hacer lo que más disfrutamos, diseñar y trabajar con artesanías indígenas… para llevar al público objetos únicos que fusionen diseño contemporáneo y el valor cultural de nuestra región, trabajando artesanalmente materiales naturales, nobles, durables, que al cabo de su vida útil vuelvan a la naturaleza sin generar impacto.
        </span>
        <span>
          <span className="ml-3 font-bold custom-ColorMain">Es así que en el año 2018 fundamos AlwaToba</span>, un marca de diseño de autor donde convergen las diferentes culturas de la región y el entorno natural que nos rodea, fuentes indispensables de inspiración para el desarrollo de nuestros diseños.El proceso que llevamos a cabo, representa una conexión del pasado con el presente y con nuevas maneras de concebir la actividad creativa entre nosotras y las comunidades originarias, poniendo en valor la cultura originaria y fomentando de esa manera el trabajo artesanal indígena y el precio justo por ese trabajo.
        </span>
      
        <span>
          <span className="ml-3 font-bold custom-ColorMain">El nombre AlwaToba</span>, está formado por dos vocablos: Alwa, que significa tierra en lengua qom, también posee su definición en lengua aymara, que significa “Nuevos comienzos”. Para nosotras retomar el arte materno era volver al pasado pero con nueva forma, era comenzar de nuevo algo nuestro que amábamos pero que por distintas razones habíamos dejado suspendido en el tiempo. Y Toba que es la manera en que llamaban de forma despectiva los guaraníes a los “guerreros qom” y que quedó como denominación del pueblo entero… pero que fue acuñado por nosotras con el fin de representar nuestra alma “guerrera” en estas tierras, de pelear la vida constantemente. El momento en el que elegimos el nombre estábamos ambas luchando nuestras guerras internas. 
        </span>
        <span>
          <span className="ml-3 font-bold custom-ColorMain">Fue así</span> que nos identificamos con la definición “Tierra de Guerreros” - “Tierra Toba” - “AlwaToba” y un “Nuevo comienzo” de la herencia materna. 
        </span>
        <span>
          <span className="ml-3 font-bold custom-ColorMain">Amamos</span> diseñar y crear con las manos, nos fascinan las artesanías como expresión cultural de los pueblos originarios. Aspiramos a revalorizar la cultura indígena de nuestra zona incorporándola a objetos de lujo sustentables, entendiendo el lujo como la valoración de la cultura, del trabajo artesanal y del diseño como expresión.
        </span>
        <span>
          <span className="ml-3 font-bold custom-ColorMain">Queremos</span> llegar con una marca de diseño de autor a personas que valoren y usen objetos únicos. Que estos productos tengan un valor intrínseco a la manera en que fueron concebidos y materializados. Trabajar y vivir dejando de lado la vorágine que nos rodea, tal como lo hicimos mientras crecíamos, crear objetos que por su concepción reflejen el concepto de disfrute del momento presente.
        </span>
        <span>
          <span className="ml-3 font-bold custom-ColorMain">Diseñamos</span> inspiradas en la naturaleza que nos rodea, creando y co-creando con las artesanas indígenas, objetos de lujo con diseño contemporáneo y siempre vigente, realizados con materiales naturales, durables y sustentables.
        </span>
        {/* Imagen Naturaleza y Co-creadora */}
        <div className="flex flex-row ">
          <img className="h-2/5 w-2/5 mt-auto ml-auto rounded-xl shadow shadow-black" src={require("../media/BlogEj/Blog1.jpg")} alt="Imagen fondo"/>
          <img className="h-1/5 w-1/2 mt-auto mr-auto ml-1 rounded-xl shadow shadow-black" src={require("../media/BlogEj/Blog2.jpg")} alt="Imagen fondo"/>
        </div>
        <span>
          <span className="ml-3 font-bold custom-ColorMain">Nuestro propósito</span> es transmitir los valores en los que crecimos, la naturaleza y la cultura de nuestra provincia. Las ricas vivencias de nuestra crianza, que determinaron las mujeres en que nos transformamos.
        </span>
        <NavLink className="text-center text-5xl custom-Color4 hover:scale-110 hover:font-bold transition-all delay-75" to="/Alwatoba">Volver</NavLink>
      </div>
    </motion.div>
  )
}