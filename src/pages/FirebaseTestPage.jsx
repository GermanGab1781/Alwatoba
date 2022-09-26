import React, { useState } from 'react'
import { storage } from '../firebase';
import { ref, uploadBytes ,getDownloadURL, listAll } from 'firebase/storage';
import { db } from '../firebase';
import { collection , doc , getDoc,getDocs, setDoc} from 'firebase/firestore'
import { v4 } from 'uuid';
import { useEffect } from 'react';
import ReactImageGallery from 'react-image-gallery';
import { auth } from '../firebase';
import { onAuthStateChanged, signInWithEmailAndPassword,signOut } from 'firebase/auth';
import ProductMini from '../components/ProductMini';


export default function FirebaseTestPage() {

  const [productMiniImgs,setProductMiniImgs] = useState([])
  const newProductRef = doc(collection(db, "Productos"))
  const productsRef = collection(db,"Productos")
  const [userLoged, setUserLoged] = useState("")
  const [imgPrev1, setimgPrev1] = useState(null)
  const [imgPrev2, setimgPrev2] = useState(null)
  const [imgPrev3, setimgPrev3] = useState(null)
  const [imgPrev4, setimgPrev4] = useState(null)
  const docRef= doc(db,"Productos","b13B868VcMLa90Sggwg0")
  const [allDocs, setAllDocs] = useState([])

  useEffect(()=>{
    const getImgsDocs = async ()=>{
    try{
        const data = await getDoc(docRef)
        data.data().Imagenes.forEach((path)=>{
          (getDownloadURL(ref(storage,path)))
            .then((url)=>{
              setProductMiniImgs({...url, original:url,alt:"Img del producto"})
            })
        })
      }catch(err){
        console.log(err)
      }
    }
    const getDocsProd = async () =>{
      try{
        const data = await getDocs(productsRef)
        setAllDocs(data.docs.map((doc)=>({ ...doc.data()})))
        allDocs.forEach((arr)=>{
          getDownloadURL(ref(storage,arr.imgPath[0]))
            .then((url)=>{
              setProductMiniImgs((prev) => [...prev,url]) 
            })
        })
      }catch(err){
        alert(err)
      }
    }
    getDocsProd()
  },[])


  //onAuthStateChanged(auth, (currentUser)=>{
  // setUserLoged(currentUser);
  //})
  const login = async e => {
    e.preventDefault()
    try{
      const user = await signInWithEmailAndPassword(auth, e.target.userLogin.value, e.target.userPass.value )
      alert('login exitoso!!!')
    }catch(err){
      alert(err)
    }
  }
  const logout = async() =>{
    await signOut(auth)
  }
  const uploadProduct = async e =>{
    e.preventDefault()
    const Nombre = e.target.nombre.value
    const Descripcion = e.target.desc.value
    const Img1 =  e.target.img1.files[0]
    const Img2 =  e.target.img2.files[0]
    const Img3 =  e.target.img3.files[0]
    const Img4 =  e.target.img4.files[0]
    let Paths = []
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
    
    ImgsUploaded.forEach((img)=>{
      let nameDir = `images/${img.name +v4()}`
      let imgRef = ref(storage,nameDir)
      uploadBytes(imgRef,img)
      Paths.push(nameDir)
    })
    await setDoc(newProductRef,{Id:newProductRef.id,Nombre:Nombre,Descripcion:Descripcion,imgPath:Paths})
    alert('SE SUBIO')
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
      {console.log(productMiniImgs,"owo")}
      {/* Login */}
      <form onSubmit={login}>
        <input className="mb-6 mt-6 border border-black" type="text" name="userLogin"/>
        <input className="mb-6 mt-6 border border-black" type="password" name="userPass"/>
        <button type="submit">Login</button><br/>
      </form>
      {userLoged?.email}<button onClick={logout}>SIGN OUT</button>
      {/* Producto Upload */}
      <form className="ml-6 mb-60" onSubmit={uploadProduct}>
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
      {/* Producto component */}
      {allDocs && allDocs.map((doc,index)=>{
        return(
          <ProductMini key={index} nombre={doc.Nombre} id={doc.Id} imgPath={productMiniImgs[index]} />
        )
      })}
    </div>
  )
}
