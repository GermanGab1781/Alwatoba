import React, { useState } from 'react'
import { storage } from '../firebase';
import { ref, uploadBytes , listAll ,getDownloadURL } from 'firebase/storage';
import { db } from '../firebase';
import { collection , getDocs, doc , addDoc, getDoc, setDoc} from 'firebase/firestore'
import { v4 } from 'uuid';
import { useEffect } from 'react';


export default function FirebaseTestPage() {
  /*const imagesUrls = [{original:require("../media/ProductoEj/ProdImg1.jpg"),alt:"ImagenPrueba1"},
                      {original:require("../media/ProductoEj/ProdImg2.jpg"),alt:"ImagenPrueba2"},
                      {original:require("../media/ProductoEj/ProdImg3.jpg"),alt:"ImagenPrueba3"},
                      {original:require("../media/ProductoEj/ProdImg4.jpg"),alt:"ImagenPrueba4"},
  ]*/

  const imagesUrls=[];

  const productsRef = collection(db, "Productos")
  const [imgPrev1, setimgPrev1] = useState(null);
  const [imgPrev2, setimgPrev2] = useState(null);
  const [imgPrev3, setimgPrev3] = useState(null);
  const [imgPrev4, setimgPrev4] = useState(null);
  const [docTest,setDocTest] = useState(null)

  /* Fetch Data 
  useEffect(()=>{
    const getImgsDocs = async () =>{
      const data = await getDocs(imgsProdRef)
      setImagesList(data.docs.map((doc)=>({...doc.data()})))
    }
    getImgsDocs()
    imagesList.forEach((item)=>{
      (getDownloadURL(ref(storage,item.url)))
        .then((url)=>{
          setImagesUrlList((prev)=>[...prev,url])
        })
    })
  },[]) */
  useEffect(()=>{
    const getImgsDocs = async ()=>{
      const docRef= doc(db,"Productos","b13B868VcMLa90Sggwg0")
      const data = await getDoc(docRef)
      setDocTest(data.data())
      console.log(docTest.Imagenes)
      docTest.Imagenes.forEach((url,index)=>{
        imagesUrls.push({original:url, alt:'imagen Numero'+ index})
      })
      console.log(imagesUrls)
    }
    getImgsDocs()
  },[])


  
  const uploadProduct= e =>{
    e.preventDefault()
    const Nombre = e.target.nombre.value
    const Descripcion = e.target.desc.value
    const Img1 =  e.target.img1.files[0]
    const Img2 =  e.target.img2.files[0]
    const Img3 =  e.target.img3.files[0]
    const Img4 =  e.target.img4.files[0]
    console.log(Img1+Img2+Img3+Img4)
    console.log(Nombre +'/////////////'+ Descripcion)
    const Urls = []
    const ImgsUploaded =[]
    if(Img1){
      ImgsUploaded.push(Img1)
    }
    if(Img2){
      ImgsUploaded.push(Img2)
    }
    if(Img3){
      ImgsUploaded.push(Img3)
    }
    if(Img4){
      ImgsUploaded.push(Img4)
    }
    console.log(ImgsUploaded)
    ImgsUploaded.forEach((img)=>{
      let nameDir = `images/${img.name +v4()}`
      let imgRef = ref(storage,nameDir)
      uploadBytes(imgRef,img)
      Urls.push(nameDir)
    })
    console.log(Urls)
    addDoc(productsRef,{Nombre:Nombre,Descripcion:Descripcion,Imagenes:Urls})
  }

  const showPreview1 = e => {
      if (e.target.files && e.target.files.length > 0) {
        setimgPrev1(e.target.files[0]);
    }
  }
  const showPreview2 = e => {
      if (e.target.files && e.target.files.length > 0) {
        setimgPrev2(e.target.files[0]);
    }
  }
  const showPreview3 = e => {
      if (e.target.files && e.target.files.length > 0) {
        setimgPrev3(e.target.files[0]);
    }
  }
  const showPreview4 = e => {
      if (e.target.files && e.target.files.length > 0) {
        setimgPrev4(e.target.files[0]);
    }
  }

  return (
    <div className="pt-20 mb-96">
      <form className="ml-6" onSubmit={uploadProduct}>
        <label>Nombre</label><br/>
        <input className="mb-6 mt-6 border border-black" name="nombre" type="text" placeholder="Nombre"/><br/>
        <label>Descripcion</label><br/>
        <textarea className="mb-6 border border-black" cols="50" rows="10" name="desc" type="text" placeholder="Descripicion" /><br/>
        <div className="flex text-center place-content-evenly">
          <div>
            <label>Imagen1</label><br/>
            <input className="mb-6 border border-black" onChange={showPreview1} name="img1" type="file"/><br/>
            {imgPrev1 && <img className="w-40 h-40" alt="imgPreview" src={URL.createObjectURL(imgPrev1)}/>}
          </div>
          <div>
            <label>Imagen2</label><br/>
            <input className="mb-6 border border-black" onChange={showPreview2} name="img2" type="file"/><br/>
            {imgPrev2 && <img className="w-40 h-40" alt="imgPreview" src={URL.createObjectURL(imgPrev2)}/>}
          </div>
          <div>
            <label>Imagen3</label><br/>
            <input className="mb-6 border border-black" onChange={showPreview3} name="img3" type="file"/><br/>
            {imgPrev3 && <img className="w-40 h-40" alt="imgPreview" src={URL.createObjectURL(imgPrev3)}/>}
          </div>
          <div>
            <label>Imagen4</label><br/>
            <input className="mb-6 border border-black" onChange={showPreview4} name="img4" type="file"/><br/>
            {imgPrev4 && <img className="w-40 h-40" alt="imgPreview" src={URL.createObjectURL(imgPrev4)}/>}
          </div>
        </div>
        <button className="bg-slate-500 mt-6" type="submit">Subir Producto</button>
      </form>
    </div>
  )
}
