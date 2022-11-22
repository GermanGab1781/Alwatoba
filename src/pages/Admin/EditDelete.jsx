import { collection, doc , getDocs, query, where, deleteDoc } from "firebase/firestore";
import {ref, deleteObject} from 'firebase/storage'
import { db,storage } from "../../firebase";
import { useState,useEffect } from 'react'
import ProductMini from "../../components/ProductMini";
import { NavLink } from "react-router-dom";
import ReactSelect from "react-select";
import Swal from 'sweetalert2'



export default function AdminEditDelete() {
  const [docs, setDocs] = useState(undefined)
  const [category, setCategory] = useState("Todos")
  const options = [
    {value:"Todos", label:"Todos"},
    {value:"Autoctona", label:"Autoctona"},
    {value:"Colecciones", label:"Colecciones"},
    {value:"Arte", label:"Arte y Diseño"}
  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  useEffect(()=>{
    const getAllDocs = async () =>{
      if(category === "Todos"){
        const q = collection(db,"Productos")
        const data = await getDocs(q)
        setDocs(data.docs.map((doc)=>({...doc.data()})))
      }else if (category === "Autoctona"){
        const q = query(collection(db,"Productos"), where("info.categoria","==","Autoctona"))
        const data = await getDocs(q)
        setDocs(data.docs.map((doc)=>({...doc.data()})))
      }else if (category === "Arte"){
        const q = query(collection(db,"Productos"), where("info.categoria","==","ArteYDiseño"))
        const data = await getDocs(q)
        setDocs(data.docs.map((doc)=>({...doc.data()})))
      }else if (category === "Colecciones"){
        const q = query(collection(db,"Productos"), where("info.categoria","==","ColeccionesCapsula"))
        const data = await getDocs(q)
        setDocs(data.docs.map((doc)=>({...doc.data()})))
      }
      
    }
    getAllDocs()
  },[category])

  const setQuery = (value)=>{
    console.log(value)
    setCategory(value.value)
  }

  function deleteDocument (idDoc,imgs){
    imgs.forEach((img)=>{
      const imgRef = ref(storage, img.path)
      deleteObject(imgRef).then(()=>{
        let newArray = docs.filter(doc => doc.id !== idDoc)
        setDocs(newArray)
      })
      
    })
    deleteDoc(doc(db,'Productos', idDoc)).then(()=>{
      Swal.fire({icon:'success',title:'Producto borrado exitosamente'})
    })
    
  }

  return (
    <div className='py-20'>
      <div className="flex xl:gap-x-9 xl:flex-row flex-col">
        <NavLink className='text-3xl xl:pl-8 text-amber-900 xl:m-0 m-auto' to='/Admin'>Volver</NavLink>
        <label className='text-3xl xl:m-0 m-auto'>Categoria:</label>
        <ReactSelect onChange={setQuery} className="xl:w-1/4 mx-2 xl:mx-0" options={options}/>
      </div>
      {docs &&
        <div className="flex flex-row flex-wrap gap-16 place-content-center mt-6">
          {docs.map((doc,index)=>{
            return(
              <div  key={index} className="flex flex-col text-center place-items-center"> 
                <ProductMini nombre={doc.info.nombre} id={doc.id} imgPath={doc.imgsSrc[0].Url} />
                <div className="mt-9 flex flex-wrap gap-x-5">
                  <NavLink to={doc.id} className="bg-green-500 text-white p-4">EDITAR</NavLink> 
                  <span onClick={()=>deleteDocument(doc.id,doc.imgsSrc)} className="bg-red-800 text-white p-4 cursor-pointer">ELIMINAR</span>
                </div>
              </div>
            )
          })}
        </div>
      }
      {!docs &&
      <div className="m-auto py-56 text-center text-6xl">Cargando Productos</div>}
      {(docs && docs.length === 0) && <div className="m-auto text-center text-6xl">No hay Productos subidos :P<br/> <br/>
      <NavLink className='border border-black rounded-lg' to='/Admin/Upload'>SUBIR PRODUCTO</NavLink>
        
      </div>}
    </div>

  )
}
