import { motion } from 'framer-motion'
import React from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AlwatobaImg from '../media/AlwatobaBrand.png'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { useState } from 'react'
import ProductMini from './ProductMini'



export default function CatalogAll() {
  const [docs, setDocs] = useState([])

  useEffect(()=>{
   
    const getAllDocs = async () =>{
      const q = collection(db,"Productos")
      const data = await getDocs(q)
      setDocs(data.docs.map((doc)=>({...doc.data()})))
    }
    getAllDocs()
  },[])
  return (
    <>
    {docs.length > 1 && 
    <motion.div className="flex flex-wrap gap-y-10 gap-x-5 mt-5 max-h-full max-w-full sm:place-content-start place-content-center sm:text-xl custom-Color4 font-semibold px-10 py-5 " initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>   
      {docs.map((doc,index)=>{
        return(
          <ProductMini key={index} nombre={doc.info.nombre} id={doc.id} imgPath={doc.imgsSrc[0]} />
        )
      })}
    </motion.div>}
    </>
   
  )
}
