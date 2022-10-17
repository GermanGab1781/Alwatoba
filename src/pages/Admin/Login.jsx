import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import { auth } from '../../firebase';

export default function Login() {
  const [userLogin, setUserLogin] = useState(undefined);

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  const handleInput = e =>{
    const id = e.target.id
    const value = e.target.value
    setUserLogin({...userLogin ,[id]:value})
    console.log(userLogin)
  }

  const handleSignIn = e =>{
    e.preventDefault()
    if(userLogin === undefined){
      Swal.fire({icon:'error',title:'Llenar los campos :P'})
      return
    }else if(userLogin.email === undefined){
      Swal.fire({icon:'error',title:'Falta Email'})
      return
    }else if(userLogin.password === undefined){
      Swal.fire({icon:'error',title:'Falta Contraseña'})
      return
    }

    signInWithEmailAndPassword(auth, userLogin.email,userLogin.password)
      .then(()=>{
        Swal.fire({icon:'success',title:'Logueo Exitoso'})
      })
      .catch((err)=>{
        Swal.fire(err)
      })
  }
  
  return (
    
    <div className='p-32 mb-20 text-center font-comfortaa'>
      <form onSubmit={handleSignIn}>
        <label className=''>Email</label><br/>
        <input className='border border-black' type="email" id="email" onChange={handleInput}/><br/>
        <label className=''>Contraseña</label><br/>
        <input className='border border-black' type="password" id="password" onChange={handleInput}/><br/>
        <button className='border p-3 hover:bg-green-600'>Loguearse</button>
      </form>
    </div>
  )
}
