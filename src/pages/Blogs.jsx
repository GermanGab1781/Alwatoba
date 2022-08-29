import { motion } from 'framer-motion'
import React from 'react'

export default function Blogs() {
  return (
    <motion.div className="grid pt-24 custom-ColorMain">
      {/* Titulo */}
      <span className="row-start-1 text-center text-4xl font-bold pb-4">Vanguardia en Artesania Provincial</span>
      <div className="grid relative row-start-2 h-fit border custom-BorderColorMain rounded-xl p-4 mx-1 my-1">  
        {/* SubTitulo 1 */}      
        <span className="row-start-1 text-3xl underline">Subtitulo1</span>
        {/* Texto 1 */}
        <span className="row-start-2 row-span-1 h-full text-2xl ">Uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). alt="blogEjemplo"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). alt="blogEjemplo"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). alt="blogEjemplo"</span>
        {/* Imagen 1 */} 
        <img className="row-start-2 row-span-1 w-full h-full col-span-1 rounded-xl" src={require("../media/BlogEj/Blog1.jpg")} alt="blogEjemplo"/>
      </div>
      {/* Imagen Final */}
      <img className="row-start-3 w-screen h-full p-3" src={require("../media/BlogEj/Blog2.jpg")} alt="blogEjemplo"/>
    </motion.div>
  )
}
