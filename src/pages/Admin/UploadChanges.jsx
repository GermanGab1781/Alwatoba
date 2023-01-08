import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { storage, db } from "../../firebase";
import { useState } from 'react';
import { v4 } from 'uuid';
import Swal from 'sweetalert2'
import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';


const UploadChanges = () => {

  const [images, setImages] = useState([])
  const [product, setProduct] = useState(undefined)
  const [productCateg, setProductCateg] = useState(null)
  const [toggleAutoctona, setToggleAutoctona] = useState(true)
  const [toggleColec, setToggleColec] = useState(true)
  const [toggleArte, setToggleArte] = useState(true)
  const params = useParams()
  const keyword = params.id
  const thisDocRef = doc(db, "Productos", keyword)

  useEffect(() => {
    window.scrollTo(0, 0);
    const keyword = params.id
    const getProductDoc = async () => {
      const id = doc(db, "Productos", keyword)
      const data = await getDoc(id)
      setProduct(data.data())
      setProductCateg(data.data().info.categoria)
    }
    getProductDoc()

  }, [params])


  const uploadImages = () => {
    return new Promise((resolve) => {
      let index = 0
      let Urls = []
      images.forEach((image) => {
        let pathName = `images/${image.name + v4()}`
        let storageRef = ref(storage, pathName)
        uploadBytes(storageRef, image.file)
          .then(() => {
            getDownloadURL(storageRef)
              .then((res) => {
                Urls.push({ Url: res, path: pathName })
                index++
                if (index === images.length) {
                  resolve(Urls)
                }
              })
          })
      })
    }
    )
  }

  const handleUpdate = e => {
    e.preventDefault()
    Swal.fire({ icon: "info", title: "Subiendo cambios", text: "Porfavor espere", showConfirmButton: false })
    if ((product.info.nombre === '') || (product.info.nombre === undefined)) {
      Swal.fire({ icon: 'error', title: 'Falta el nombre' })
      return
    } else if ((product.info.descripcion === '') || (product.info.descripcion === undefined)) {
      Swal.fire({ icon: 'error', title: 'Falta la Descripcion' })
      return
    } else if ((product.info.stock === '') || (product.info.stock === undefined)) {
      Swal.fire({ icon: 'error', title: 'Falta la stock' })
      return
    } else if (productCateg === null) {
      Swal.fire({ icon: 'error', title: 'Elegir categoria' })
      return
    } else if (images.length !== 0) {
      uploadImages().then((res) => {
        let newImgsSrc = [...product.imgsSrc, ...res]
        updateDoc((thisDocRef), {
          "info": product.info,
          "imgsSrc": newImgsSrc
        }).then(() => {
          Swal.fire({ icon: 'success', title: 'Producto actualizado', text: 'ir a catalogo para ver cambios' })
        })
      })
    } else {
      updateDoc((thisDocRef), {
        "info": product.info
      }).then(() => {
        Swal.fire({ icon: 'success', title: 'Producto actualizado', text: 'ir a catalogo para ver cambios' })
      })
    }

  }

  const handleInput = e => {
    const id = e.target.id
    const value = e.target.value
    setProduct({ ...product, info: { ...product.info, [id]: value } })
  }

  function deleteImage(path) {
    if (product.imgsSrc.length === 1) {
      Swal.fire({ icon: 'error', title: 'No se puede eliminar', text: 'Cada producto debe tener minimo una imagen, para borrarla se tiene que subir otra' })
      return
    }
    Swal.fire({
      title: 'Borrar Imagen???',
      text: 'Este cambio se realizara ahora mismo',
      icon: 'question',
      showDenyButton: true,
      denyButtonText: 'NO',
      showConfirmButton: true,
      confirmButtonText: 'SI',
    }).then((result) =>{
      if(result.isConfirmed === true){
        const imgRef = ref(storage, path)
        let newArray = product.imgsSrc.filter(img => img.path !== path)
        deleteObject(imgRef).then(() => {
          updateDoc(thisDocRef, {
            imgsSrc: newArray
          })
          setProduct({ ...product, imgsSrc: newArray })
        }) 
      }
    })
  }

  function handleCategorySelect(categ, toggleIndex) {
    if (toggleIndex === 1) {
      setToggleAutoctona(!toggleAutoctona)
      setProductCateg(categ)
      setProduct({ ...product, info: { ...product.info, categoria: 'Autoctona', direccion: categ } })
    } else if (toggleIndex === 2) {
      setToggleColec(!toggleColec)
      setProductCateg(categ)
      setProduct({ ...product, info: { ...product.info, categoria: 'ColeccionesCapsula', direccion: categ } })
    } else {
      setToggleArte(!toggleArte)
      setProductCateg(categ)
      setProduct({ ...product, info: { ...product.info, categoria: 'ArteYDiseño', direccion: categ } })
    }
    Swal.fire('Elegiste la direccion', categ)
  }

  function readmultifiles(e, indexInicial) {
    const files = e.currentTarget.files
    const arrayImages = []
    Object.keys(files).forEach((i) => {
      const file = files[i]
      let url = URL.createObjectURL(file);
      arrayImages.push({
        index: indexInicial,
        name: file.name,
        url,
        file
      })
      indexInicial++
    })
    return arrayImages
  }
  function deleteImg(index) {
    const newImgs = images.filter(function (element) {
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
    if (images.length >= 5) {
      alert('Solo 5 imagenes permitidas, borre otra para intentar')
    } else {
      let newImgsToState = readmultifiles(e, indexImg);
      let newImgsState = [...images, ...newImgsToState];
      setImages(newImgsState);
    }


  };

  return (
    <div className='flex flex-col text-center pt-20 mb-60'>
      {product === undefined && <div>CARGANDO</div>}
      {product &&
        <>
          <span className='text-5xl font-notethis mb-5'>Editar Producto</span>
          {/* Form */}
          <form className='flex flex-col md:px-44 sm:px-12 px-3 gap-y-5 text-center' onSubmit={handleUpdate}>
            <div className='flex flex-row place-content-center gap-x-1'>
              {/* Nombre */}
              <span>
                <label className='text-2xl font-bold'>Nombre</label><br />
                <input className='border border-black' type="text" id="nombre" defaultValue={product.info.nombre} onChange={handleInput} />
              </span>
              {/* Precio */}
              <span>
                <label className='text-2xl font-bold'>Precio</label><br />
                <input className='border border-black' type="number" id="precio" defaultValue={product.info.precio} onChange={handleInput} />
              </span>
              {/* stock */}
              <span>
                <label className='text-2xl font-bold'>Stock</label><br />
                <input className='border border-black' type="number" id="stock" defaultValue={product.info.stock} onChange={handleInput} />
              </span>
            </div>
            {/* Descripcion */}
            <label className='text-2xl font-bold'>Descripcion</label><br />
            <textarea className='border border-black w-2/3 m-auto' type="text" id="descripcion" defaultValue={product.info.descripcion} onChange={handleInput} rows="7" /><br />
            {/* Caracteristicas */}
            <label className='text-2xl font-bold'>Caracteristicas [no es obligatorio]</label>
            <label className='text-md'>(cuanto mide , de que esta hecho, etc)</label>
            <textarea className='border border-black w-2/3 m-auto' type="text" id="caracteristicas" defaultValue={product.info.caracteristicas && product.info.caracteristicas} onChange={handleInput} rows="3" /><br />
            {/* Anotacion Especial */}
            <label className='text-2xl font-bold'>Anotacion Especial [no es obligatorio]</label>
            <label className='text-md'>(Ejemplo "En exposición Museo de Arte Popular José Hernández")</label>
            <textarea className='border border-black w-2/3  m-auto' type="text" id="anotacionEsp" defaultValue={product.info.anotacionEsp && product.info.anotacionEsp} onChange={handleInput} rows="3" /><br />
            {/* Categorias */}
            <label className='text-2xl font-bold pt-10'>Categoria del producto</label>
            <label className='text-md'>(hacer click en nombre para abrir arbol de categorias)</label>
            <div className='flex flex-col gap-y-10 place-content-center border border-teal-300'>
              {/* Autoctona */}
              <div className='grid grid-cols-5 place-content-start mx-8'>
                <span onClick={() => setToggleAutoctona(!toggleAutoctona)} className='col-span-5 text-2xl m-auto pr-3 w-96 cursor-pointer'>AUTOCTONA</span>
                <div className={toggleAutoctona ? 'opacity-0 invisible h-2 col-start-3 flex flex-col transition-all' : 'h-full visible opacity-1 col-start-3 flex flex-col transition-all'}>
                  <div className='grid border-l-2 border-black'>
                    <span className='col-start-1 row-start-2 border-b-2 border-black px-2'>COMPLEMENTOS</span>
                    <div className='col-start-2 row-start-1 border-l-2 border-y-2 border-black row-span-3 flex flex-col'>
                      <span className='hover:underline cursor-pointer' onClick={() => handleCategorySelect("Autoctona/Complementos/LineaMate", 1)}>Linea Mate</span>
                      <span className='hover:underline cursor-pointer' onClick={() => handleCategorySelect("Autoctona/Complementos/Accesorios", 1)}>Accesorios</span>
                      <span className='hover:underline cursor-pointer' onClick={() => handleCategorySelect("Autoctona/Complementos/Bags", 1)}>Bags</span>
                    </div>
                  </div>
                  <span onClick={() => handleCategorySelect("Autoctona/JoyeriaTemporanea")} className='pt-5 mr-auto hover:underline cursor-pointer border-b-2 border-l-2 border-black'>Joyeria Temporanea</span>
                  <span onClick={() => handleCategorySelect("Autoctona/Indumentaria")} className='pt-5 mr-auto hover:underline cursor-pointer border-b-2 border-l-2 border-black'>Indumentaria</span>
                  <div className=' pt-5 grid border-l-2 border-black'>
                    <span className='col-start-1 row-start-2 border-b-2 border-black px-2'>LIFESTYLE</span>
                    <div className='col-start-2 row-start-1 border-l-2 border-y-2 border-black row-span-3 flex flex-col'>
                      <span className='hover:underline cursor-pointer' onClick={() => handleCategorySelect("Autoctona/Lifestyle/Chaguar", 1)}>Chaguar</span>
                      <span className='hover:underline cursor-pointer' onClick={() => handleCategorySelect("Autoctona/Lifestyle/Carandillo", 1)}>Carandillo</span>
                      <span className='hover:underline cursor-pointer' onClick={() => handleCategorySelect("Autoctona/Lifestyle/PalmaYTotora", 1)}>Palma y Totora</span>
                      <span className='hover:underline cursor-pointer' onClick={() => handleCategorySelect("Autoctona/Lifestyle/PaloSanto", 1)}>Palo Santo</span>
                      <span className='hover:underline cursor-pointer' onClick={() => handleCategorySelect("Autoctona/Lifestyle/Diseño", 1)}>Diseño</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Colecciones Capsula */}
              <div className='grid grid-cols-5 place-content-start mx-8'>
                <span onClick={() => setToggleColec(!toggleColec)} className='col-span-5 text-2xl m-auto pr-3 w-96 cursor-pointer'>COLECCIONES CAPSULA</span>
                <div className={toggleColec ? 'opacity-0 invisible h-2 col-start-3 flex flex-col transition-all' : 'h-full visible opacity-1 col-start-3 flex flex-col transition-all'}>
                  <div className='grid border-l-2 border-black'>
                    <span className='col-start-1 row-start-2 border-b-2 border-black px-2'>ESCENCIA IMPERFECTA</span>
                    <div className='col-start-2 row-start-1 border-l-2 border-y-2 border-black row-span-3 flex flex-col'>
                      <span className='hover:underline cursor-pointer' onClick={() => handleCategorySelect("ColeccionesCapsula/EscenciaImperfecta/Indumentaria", 2)}>Indumentaria</span>
                      <span className='hover:underline cursor-pointer' onClick={() => handleCategorySelect("ColeccionesCapsula/EscenciaImperfecta/JoyeriaContemporanea", 2)}>Joyeria Contemporanea</span>
                      <span className='hover:underline cursor-pointer' onClick={() => handleCategorySelect("ColeccionesCapsula/EscenciaImperfecta/Complementos", 2)}>Complementos</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Arte y Diseño */}
              <div className='grid grid-cols-5 place-content-start mx-8'>
                <span onClick={() => setToggleArte(!toggleArte)} className='col-span-5 text-2xl m-auto pr-3 w-96 cursor-pointer'>ARTE Y DISEÑO</span>
                <div className={toggleArte ? 'opacity-0 invisible h-2 col-start-3 flex flex-col transition-all' : 'h-full visible opacity-1 col-start-3 flex flex-col transition-all'}>
                  <div className='border-l-2  border-black row-span-3 flex flex-col'>
                    <span className='hover:underline cursor-pointer' onClick={() => handleCategorySelect("ArteYDiseño/Indumentaria")}>Indumentaria</span>
                    <span className='hover:underline cursor-pointer' onClick={() => handleCategorySelect("ArteYDiseño/JoyeriaContemporanea")}>Joyeria Contemporanea</span>
                    <span className='hover:underline cursor-pointer' onClick={() => handleCategorySelect("ArteYDiseño/Complementos")}>Complementos</span>
                  </div>
                </div>
              </div>
              {productCateg && <span className='font-bold text-2xl border border-red-500'>El producto tendra la direccion: {productCateg}</span>}
            </div>
            {/* Imagenes actuales */}
            <div className='my-12'>
              <label className='text-2xl font-bold '>Imagenes actuales</label>
              <div className='flex gap-x-5 place-content-center'>
                {product.imgsSrc.map((img, index) => {
                  return (
                    <div key={index}>
                      <img className='w-40 h-40' src={img.Url} alt='Cargando' />
                      <span className='cursor-pointer bg-red-600 p-5 font-bold' onClick={() => deleteImage(img.path)}>BORRAR</span>
                    </div>
                  )
                })}
              </div>
            </div>
            {/* Imagenes */}
            <label className='text-2xl font-bold'>Añadir Imagenes</label>
            <div className='border border-teal-500 p-20'>
              <input type="file" onChange={changeInput} />
              <div className='flex flex-row flex-wrap gap-x-5 gap-y-7 p-5'>
                {images.map((image) => {
                  return (
                    <div className='relative w-fit h-fit' key={image.index}>
                      <img className='h-32 w-32' src={image.url} alt='Cargando' />
                      <button className='absolute -bottom-3 bg-slate-500' onClick={deleteImg.bind(this, image.index)}>BORRAR IMAGEN</button>
                      <span className='absolute bg-green-700 p-1 -top-2 -right-2'>{image.index + 1}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            <button className='border border-black scale-90 hover:scale-100 hover:bg-black hover:text-slate-200 transition-all p-5 text-xl' type='submit'>Actualizar Cambios</button>
            <NavLink className='border border-stone-500 w-1/2 m-auto text-xl hover:bg-black hover:text-slate-200' to='/Admin/EditOrDelete'>Volver</NavLink>
            <NavLink className='border border-stone-500 w-1/2 m-auto text-xl hover:bg-black hover:text-slate-200' to='/Catalog/all'>Ir a Catalogo</NavLink>
          </form>
        </>}
    </div>
  );
}

export default UploadChanges;
