import React, { useState } from 'react'
import { storage } from '../firebase';
import { ref, uploadBytes , listAll ,getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { useEffect } from 'react';


export default function FirebaseTestPage() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([])

  useEffect(()=>{
    const imageListRef = ref(storage,"images/")
    listAll(imageListRef)
      .then((res)=>{
        res.items.forEach((item)=>{
          getDownloadURL(item)
            .then((url)=>{
              setImageList((prev)=> [...prev, url])
            })
        })
      })
  },[])

  const uploadImg = () =>{
    if(imageUpload == null){
      return
    }else{
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
      uploadBytes(imageRef, imageUpload)
        .then(()=>{
          alert("image upload uwu")
        })
    }
  }
  return (
    <div className="pt-20 mb-96">
      <input type="file" onChange={(event) => {setImageUpload(event.target.files[0])}}/>
      <button onClick={uploadImg}>Upload IMAGE XDDD</button>

      <div>
        {imageList.map((url,index)=>{
          return(
            <div key={index}>
              <img className="w-20 h-20" src={url} alt="Imgprueba"/>
            </div>
          )
        })}
      </div>
    </div>
  )
}
