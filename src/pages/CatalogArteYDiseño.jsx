import React, { useState } from 'react';
import { useEffect } from 'react';
import CatalogComp from '../components/CatalogComp';

export default function CatalogArteYDiseño() {
  const categorias = [
    {nombre: 'Complementos',pathTo: 'Complementos'},
    {nombre: 'Indumentaria',pathTo: 'Indumentaria'},
    {nombre: 'Joyeria Contemporanea',pathTo: 'JoyeriaContemporanea'}
  ]
  const tree =[
    {nombre: 'Inicio', pathTo: '/Catalog/all'}
  ]
  const goBack ={nombre: 'Volver',pathTo: '/Catalog/All'}
  const titulo = 'Arte Y Diseño'
  const [menuButton, setMenuButton] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  
  return (
    <CatalogComp titulo={titulo} categorias={categorias} tree={tree} goBack={goBack} close={()=>setMenuButton(!menuButton)} buttonState={menuButton}/>
  )
}
