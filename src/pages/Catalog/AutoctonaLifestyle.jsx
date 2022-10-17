import React, { useState } from 'react';
import { useEffect } from 'react';
import CatalogComp from '../../components/CatalogComp';

export default function AutoctonaLifestyle() {
  const categorias = [
    {nombre: 'Chaguar',pathTo: 'Chaguar'},
    {nombre: 'Carandillo',pathTo: 'Carandillo'},
    {nombre: 'Palma y Totora',pathTo: 'PalmayTotora'},
    {nombre: 'Palo Santo',pathTo: 'PaloSanto'},
    {nombre: 'Diseño',pathTo: 'Disenio'}
  ]
  const tree=[
    {nombre: 'Inicio', pathTo:'/Catalog/all'},
    {nombre: 'Autoctona', pathTo:'/Catalog/Autoctona/all'}
  ] 
  const goBack ={nombre: 'Volver',pathTo: '/Catalog/Autoctona/all'}
  const titulo = 'Lifestyle'
  const [menuButton, setMenuButton] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  
  return (
    <CatalogComp titulo={titulo} categorias={categorias} tree={tree} goBack={goBack} close={()=>setMenuButton(!menuButton)} buttonState={menuButton}/>
  )
}
