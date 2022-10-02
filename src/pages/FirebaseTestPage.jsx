import React, { useEffect } from 'react';
import {ref, uploadBytes, getDownloadURL, uploadBytesResumable} from 'firebase/storage'
import { addDoc, doc, setDoc, collection } from 'firebase/firestore';
import { storage,db } from '../firebase';
import { useState } from 'react';
import { v4 } from 'uuid';


const FirebaseTestPage = () => {

  const [images, setImages] = useState([])
  const [product,setProduct] =useState({})
  const [test, settest] = useState([])
  const [imgsPaths, setImgsPaths]=useState({})
  const [imgsUrls,setImgsUrls]=useState([])
  const productosCollectionRef = collection(db,"Productos")
  const newDocProducto = doc(collection(db,"Productos"))

  const uploadImages = () => {
    return new Promise((resolve,reject)=>{
      if(images.length === 0){
        reject(new Error('Imagenes Vacias'))
      }
      let index = 0
      let Urls= []
      images.forEach((image)=>{
        let pathName = `images/${image.name +v4()}`
        let storageRef= ref(storage,pathName)
        uploadBytes(storageRef,image.file)
          .then(()=>{
            getDownloadURL(storageRef)
              .then((res)=>{
                console.log(res)
                Urls.push(res)
                console.log(Urls)
                index++
                console.log(index)
                if(index === images.length){
                  console.log('done for good')
                  resolve(Urls)
                }     
              })
          })
      })
    })
  }

  const handleAdd = e =>{
    e.preventDefault()
    uploadImages().then((res)=>{
      setDoc((newDocProducto),{product, res})
    })

  }
  const handleInput = e =>{
    const id = e.target.id
    const value = e.target.value
    setProduct({...product, [id]:value})
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
    if(images.length >= 4){
      alert('Solo 4 imagenes permitidas, borre otra para intentar')
    }else{
      let newImgsToState = readmultifiles(e, indexImg);
      let newImgsState = [...images, ...newImgsToState];
      setImages(newImgsState);
    }
    

  };

  return (
    <div className='pt-60 mb-60'>
      <form onSubmit={handleAdd}>
        <input type="text" id="nombre" onChange={handleInput} placeholder='nombre'/>
        <input type="text" id="descripcion" onChange={handleInput} placeholder='descripcion'/>
        <input type="file" onChange={changeInput} multiple/>
        <button type='submit'>Send</button>
      </form>
      {test && <img src={test}/>}
      <div className='flex flex-row gap-x-5'>
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
  );
}

export default FirebaseTestPage;
