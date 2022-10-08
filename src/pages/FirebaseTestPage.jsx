import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import { doc, setDoc, collection } from 'firebase/firestore';
import { storage,db } from '../firebase';
import { useState } from 'react';
import { v4 } from 'uuid';
import Swal from 'sweetalert2'


const FirebaseTestPage = () => {

  const [images, setImages] = useState([])
  const [product,setProduct] = useState({})
  const [productMainCateg, setProductMainCateg] = useState(null)
  const [productCateg, setProductCateg] =useState(null)
  const [toggleAutoctona, setToggleAutoctona]= useState(true)
  const [toggleColec, setToggleColec]= useState(true)
  const [toggleArte, setToggleArte]= useState(true)
  const newDocProducto = doc(collection(db,"Productos"))

  const uploadImages = () => {
    return new Promise((resolve,reject)=>{
      if(images.length === 0){
        Swal.fire({icon:'error',title:'Subir minimo una imagen'})
        reject(new Error('Imagenes Vacias'))
      }else{
        Swal.fire({icon:'info',title:'Archivo subiendo',showConfirmButton:false})
        let index = 0
        let Urls= []
        images.forEach((image)=>{
          let pathName = `images/${image.name +v4()}`
          let storageRef= ref(storage,pathName)
          uploadBytes(storageRef,image.file)
            .then(()=>{
              getDownloadURL(storageRef)
                .then((res)=>{
                  Urls.push(res)
                  index++
                  if(index === images.length){
                    Swal.fire({icon:'success',title:'Subido',text:'Ir a catalogo para ver'})
                    resolve(Urls)
                  }     
                })
            })
        })
      }
    })
  }

  const handleAdd = e =>{
    e.preventDefault()
    if((product.nombre === '')||(product.nombre === undefined)){
      Swal.fire({icon:'error',title:'Falta el nombre'})
      return
    }else if((product.descripcion === '')||(product.descripcion === undefined)){
      Swal.fire({icon:'error',title:'Falta la Descripcion'})
      return
    }else if((product.stock === '')||(product.stock === undefined)){
      Swal.fire({icon:'error',title:'Falta la stock'})
      return
    }else if(productCateg === null){
      Swal.fire({icon:'error',title:'Elegir categoria'})
      return
    }else if(images.length === 0){
      Swal.fire({icon:'error',title:'Minimo una imagen'})
      return
    }
    uploadImages().then((res)=>{
      setDoc((newDocProducto),{id:newDocProducto.id, info:product, imgsSrc:res, categoria:productMainCateg ,direccion:productCateg})
    })

  }
  const handleInput = e =>{
    const id = e.target.id
    const value = e.target.value
    setProduct({...product, [id]:value})
  }

  function handleCategorySelect (categ,toggleIndex){
    if(toggleIndex===1){
      setToggleAutoctona(!toggleAutoctona)
      setProductCateg(categ)
      setProductMainCateg('Autoctona')
    }else if(toggleIndex===2){
      setToggleColec(!toggleColec)
      setProductCateg(categ)
      setProductMainCateg('ColeccionesCapsula')
    }else{
      setToggleArte(!toggleArte)
      setProductCateg(categ)
      setProductMainCateg('ArteYDiseño')
    }
    Swal.fire('Elegiste la direccion',categ)
  }

  function readmultifiles(e,indexInicial){
    const files = e.currentTarget.files
    const arrayImages =[]
    Object.keys(files).forEach((i)=>{
      const file = files[i]
      let url = URL.createObjectURL(file);
      arrayImages.push({
        index:indexInicial,
        name: file.name,
        url,
        file
      })
      indexInicial++
    })
    return arrayImages
  }
  function deleteImg(index){
    const newImgs = images.filter(function(element){
      return element.index !== index
    })
    setImages(newImgs)
  }

  const changeInput = (e) => {
    let indexImg;
    if (images.length > 0) {
      indexImg = images[images.length - 1].index + 1;
    } else {
      indexImg = 0;
    }
    if(images.length >= 5){
      alert('Solo 5 imagenes permitidas, borre otra para intentar')
    }else{
      let newImgsToState = readmultifiles(e, indexImg);
      let newImgsState = [...images, ...newImgsToState];
      setImages(newImgsState);
    }
    

  };

  return (
    <div className='flex flex-col text-center pt-20 mb-60'>
      <span className='text-4xl'>Crear Nuevo Producto</span>
      {/* Form */}
      <form className='flex flex-col md:px-44 sm:px-12 px-3 gap-y-2' onSubmit={handleAdd}>
        {/* Nombre */}
        <label>Nombre</label><br/>
        <input className='border border-black' type="text" id="nombre" onChange={handleInput}/><br/>
        {/* Precio */}
        <label>Precio</label><br/>
        <input className='border border-black' type="number" id="precio" onChange={handleInput}/><br/>
        {/* stock */}
        <label>Stock</label><br/>
        <input className='border border-black' type="number" id="stock" onChange={handleInput}/><br/>
        {/* Descripcion */}
        <label>Descripcion</label><br/>
        <textarea className='border border-black' type="text" id="descripcion" onChange={handleInput} rows="7"/><br/>
        {/* Caracteristicas */}
        <label>Caracteristicas [no es obligatorio] (cuanto mide , de que esta hecho, etc)</label><br/>
        <textarea className='border border-black' type="text" id="caracteristicas" onChange={handleInput} rows="3"/><br/>
        {/* Anotacion Especial */}
        <label>Anotacion Especial [no es obligatorio] <br/> (Ejemplo "En exposición Museo de Arte Popular José Hernández")</label><br/>
        <textarea className='border border-black' type="text" id="anotacionEsp" onChange={handleInput} rows="3"/><br/>
        {/* Categorias */}
        <label className='pt-10'>Categoria del producto (hacer click en nombre para abrir categorias)</label>
        <div className='flex flex-col gap-y-10 place-content-center border border-teal-300'>
          {/* Autoctona */}
          <div className='grid grid-cols-5 place-content-start mx-8'>
            <span onClick={()=>setToggleAutoctona(!toggleAutoctona)} className='col-span-5 text-2xl m-auto pr-3 w-96 cursor-pointer'>AUTOCTONA</span>
            <div className={toggleAutoctona ?'opacity-0 invisible h-2 col-start-3 flex flex-col transition-all' :'h-full visible opacity-1 col-start-3 flex flex-col transition-all'}>
              <div className='grid border-l-2 border-black'>
                <span className='col-start-1 row-start-2 border-b-2 border-black px-2'>COMPLEMENTOS</span>
                <div className='col-start-2 row-start-1 border-l-2 border-y-2 border-black row-span-3 flex flex-col'>
                  <span className='hover:underline cursor-pointer' onClick={()=>handleCategorySelect("Autoctona/Complementos/LineaMate",1)}>Linea Mate</span>
                  <span className='hover:underline cursor-pointer' onClick={()=>handleCategorySelect("Autoctona/Complementos/Accesorios",1)}>Accesorios</span>
                  <span className='hover:underline cursor-pointer' onClick={()=>handleCategorySelect("Autoctona/Complementos/Bags",1)}>Bags</span>
                </div>
              </div>
              <span onClick={()=>handleCategorySelect("Autoctona/JoyeriaTemporanea")} className='pt-5 mr-auto hover:underline cursor-pointer border-b-2 border-l-2 border-black'>Joyeria Temporanea</span>
              <span onClick={()=>handleCategorySelect("Autoctona/Indumentaria")} className='pt-5 mr-auto hover:underline cursor-pointer border-b-2 border-l-2 border-black'>Indumentaria</span>
              <div className=' pt-5 grid border-l-2 border-black'>
                <span className='col-start-1 row-start-2 border-b-2 border-black px-2'>LIFESTYLE</span>
                <div className='col-start-2 row-start-1 border-l-2 border-y-2 border-black row-span-3 flex flex-col'>
                  <span className='hover:underline cursor-pointer' onClick={()=>handleCategorySelect("Autoctona/Lifestyle/Chaguar",1)}>Chaguar</span>
                  <span className='hover:underline cursor-pointer' onClick={()=>handleCategorySelect("Autoctona/Lifestyle/Carandillo",1)}>Carandillo</span>
                  <span className='hover:underline cursor-pointer' onClick={()=>handleCategorySelect("Autoctona/Lifestyle/PalmaYTotora",1)}>Palma y Totora</span>
                  <span className='hover:underline cursor-pointer' onClick={()=>handleCategorySelect("Autoctona/Lifestyle/PaloSanto",1)}>Palo Santo</span>
                  <span className='hover:underline cursor-pointer' onClick={()=>handleCategorySelect("Autoctona/Lifestyle/Diseño",1)}>Diseño</span>
                </div>
              </div>
            </div>
          </div>
          {/* Colecciones Capsula */}
          <div className='grid grid-cols-5 place-content-start mx-8'>
            <span onClick={()=>setToggleColec(!toggleColec)} className='col-span-5 text-2xl m-auto pr-3 w-96 cursor-pointer'>COLECCIONES CAPSULA</span>
            <div className={toggleColec ?'opacity-0 invisible h-2 col-start-3 flex flex-col transition-all' :'h-full visible opacity-1 col-start-3 flex flex-col transition-all'}>
              <div className='grid border-l-2 border-black'>
                <span className='col-start-1 row-start-2 border-b-2 border-black px-2'>ESCENCIA IMPERFECTA</span>
                <div className='col-start-2 row-start-1 border-l-2 border-y-2 border-black row-span-3 flex flex-col'>
                  <span className='hover:underline cursor-pointer' onClick={()=>handleCategorySelect("ColeccionesCapsula/EscenciaImperfecta/Indumentaria",2)}>Indumentaria</span>
                  <span className='hover:underline cursor-pointer' onClick={()=>handleCategorySelect("ColeccionesCapsula/EscenciaImperfecta/JoyeriaContemporanea",2)}>Joyeria Contemporanea</span>
                  <span className='hover:underline cursor-pointer' onClick={()=>handleCategorySelect("ColeccionesCapsula/EscenciaImperfecta/Complementos",2)}>Complementos</span>
                </div>
              </div>
            </div>

          </div>

          {/* Arte y Diseño */}
          <div className='grid grid-cols-5 place-content-start mx-8'>
              <span onClick={()=>setToggleArte(!toggleArte)} className='col-span-5 text-2xl m-auto pr-3 w-96 cursor-pointer'>ARTE Y DISEÑO</span>
              <div className={toggleArte ?'opacity-0 invisible h-2 col-start-3 flex flex-col transition-all' :'h-full visible opacity-1 col-start-3 flex flex-col transition-all'}>
                <div className='border-l-2  border-black row-span-3 flex flex-col'>
                  <span className='hover:underline cursor-pointer' onClick={()=>handleCategorySelect("ArteYDiseño/Indumentaria")}>Indumentaria</span>
                  <span className='hover:underline cursor-pointer' onClick={()=>handleCategorySelect("ArteYDiseño/JoyeriaContemporanea")}>Joyeria Contemporanea</span>
                  <span className='hover:underline cursor-pointer' onClick={()=>handleCategorySelect("ArteYDiseño/Complementos")}>Complementos</span>
                </div>
              </div>
          </div>
          {productCateg && <span className='font-bold text-2xl border border-red-500'>El producto tendra la direccion: {productCateg}</span>}
        </div>
        {/* Imagenes */}
        <label>Imagenes (minimo 1 maximo 5)</label>
        <div className='border border-teal-500 p-20'>
          <input type="file" onChange={changeInput}/>
          <div className='flex flex-row flex-wrap gap-x-5 gap-y-7 p-5'>
          {images.map((image)=>{
            return(
              <div className='relative w-fit h-fit' key={image.index}> 
                <img className='h-32 w-32' src={image.url} alt='owo'/>
                <button className='absolute -bottom-3 bg-slate-500' onClick={deleteImg.bind(this,image.index)}>BORRAR IMAGEN</button>
                <span className='absolute bg-green-700 p-1 -top-2 -right-2'>{image.index+1}</span>
              </div>
            )
          })}
          </div>
        </div>
        

        <button className='border border-black scale-90 hover:scale-100 hover:bg-black hover:text-slate-200 transition-all p-5' type='submit'>SUBIR</button>
      </form>
      
        
      
      
    </div>
  );
}

export default FirebaseTestPage;
