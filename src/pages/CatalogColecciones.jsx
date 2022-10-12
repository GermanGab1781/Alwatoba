import React, { useState } from 'react';
import { useEffect } from 'react';
import CatalogComp from '../components/CatalogComp';

export default function CatalogColecciones() {
  const categorias = [
    {nombre: 'Escencia Imperfecta',pathTo: 'Escencia/all'},
  ]
  const tree =[
    {nombre: 'Inicio',pathTo: '/Catalog/all'}
  ]
  const goBack ={nombre: 'Volver',pathTo: '/Catalog/all'}
  const titulo = 'Colecciones'
  const [menuButton, setMenuButton] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  
  return (
    <CatalogComp titulo={titulo} categorias={categorias} tree={tree} goBack={goBack} close={()=>setMenuButton(!menuButton)} buttonState={menuButton}/>
  )
}
