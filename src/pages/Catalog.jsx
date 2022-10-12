import React, { useState } from 'react';
import { useEffect } from 'react';
import CatalogComp from '../components/CatalogComp';

export default function Catalog() {
  const categorias = [
    {nombre: 'Autoctona',pathTo: 'Autoctona/all'},
    {nombre: 'Colecciones Capsula',pathTo: 'Colecciones/all'},
    {nombre: 'Arte y Diseño',pathTo: 'ArteYDisenio/all'}
  ]
  const goBack ={nombre: 'Volver a Inicio',pathTo: '/Alwatoba'}
  const titulo = 'Nuestros Productos'
  const [menuButton, setMenuButton] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  
  return (
    <CatalogComp titulo={titulo} categorias={categorias} goBack={goBack} close={()=>setMenuButton(!menuButton)} buttonState={menuButton}/>
  )
}
