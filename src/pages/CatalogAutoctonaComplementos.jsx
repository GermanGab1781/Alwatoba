import React, { useState } from 'react';
import { useEffect } from 'react';
import CatalogComp from '../components/CatalogComp';

export default function CatalogAutoctonaComplementos() {
  const categorias = [
    {nombre: 'Linea Mate',pathTo: 'LineaMate'},
    {nombre: 'Accesorios',pathTo: 'Accesorios'},
    {nombre: 'Bags',pathTo: 'Bags'}
  ]
  const tree=[
    {nombre: 'Inicio', pathTo:'/Catalog/all'},
    {nombre: 'Autoctona', pathTo:'/Catalog/Autoctona/all'}
  ] 
  const goBack ={nombre: 'Volver',pathTo: '/Catalog/Autoctona/all'}
  const titulo = 'Complementos'
  const [menuButton, setMenuButton] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  
  return (
    <CatalogComp titulo={titulo} categorias={categorias} tree={tree} goBack={goBack} close={()=>setMenuButton(!menuButton)} buttonState={menuButton}/>
  )
}
