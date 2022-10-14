import React, { useState } from 'react';
import { useEffect } from 'react';
import CatalogComp from '../../components/CatalogComp';

export default function Autoctona() {
  const categorias = [
    {nombre: 'Complementos',pathTo: '/Catalog/Autoctona/Complementos/all'},
    {nombre: 'Joyeria Temporanea',pathTo: 'JoyeriaTemporanea'},
    {nombre: 'Indumentaria',pathTo: 'Indumentaria'},
    {nombre: 'Lifestyle',pathTo: '/Catalog/Autoctona/Lifestyle/all'}
  ]
  const tree=[
    {nombre: 'Inicio', pathTo:'/Catalog/all'}
  ] 
  const goBack ={nombre: 'Volver',pathTo: '/Catalog/all'}
  const titulo = 'Autoctona'
  const [menuButton, setMenuButton] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  
  return (
    <CatalogComp titulo={titulo} categorias={categorias} goBack={goBack} tree={tree} close={()=>setMenuButton(!menuButton)} buttonState={menuButton}/>
  )
}
