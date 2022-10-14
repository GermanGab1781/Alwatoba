import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useState,useEffect } from 'react'
import ProductMini from "../../components/ProductMini";
import { NavLink } from "react-router-dom";



export default function AdminEditDelete() {
  const [docs, setDocs] = useState(undefined)

  useEffect(()=>{
    const getAllDocs = async () =>{
      const q = collection(db,"Productos")
      const data = await getDocs(q)
      setDocs(data.docs.map((doc)=>({...doc.data()})))
    }
    getAllDocs()
  },[])

  return (
    <div className='py-20'>
      <NavLink className='text-3xl pl-8 hover:text-amber-900' to='/Admin'>Volver</NavLink>
      {docs &&
        <div className="flex flex-row flex-wrap gap-16 place-content-center mt-6">
          {docs.map((doc,index)=>{
            return(
              <div  key={index} className="flex flex-col text-center"> 
                <ProductMini nombre={doc.info.nombre} id={doc.id} imgPath={doc.imgsSrc[0].Url} />
                <div className="mt-9 flex flex-wrap place-content-center gap-x-5">
                  <NavLink to={doc.id} className="bg-green-500 text-white p-4">EDITAR</NavLink> 
                  <NavLink to={doc.id} className="bg-red-800 text-white p-4">ELIMINAR</NavLink>
                </div>
              </div>
            )
          })}
        </div>
      }
      {!docs &&
      <div className="m-auto py-56 text-center text-6xl">Cargando Productos</div>}
    </div>

  )
}
