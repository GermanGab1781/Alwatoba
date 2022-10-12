import React, { useState } from 'react';
import { useEffect } from 'react';
import CatalogComp from '../components/CatalogComp';

export default function CatalogColeccionesEscencia() {
  const categorias = [
    {nombre: 'Indumentaria',pathTo: 'Indumentaria'},
    {nombre: 'Joyeria Contemporanea',pathTo: 'JoyeriaContemporanea'},
    {nombre: 'Complementos',pathTo: 'Complementos'}
  ]
  const tree =[
    {nombre: 'Inicio',pathTo: '/Catalog/all'},
    {nombre: 'Colecciones', pathTo: '/Catalog/Colecciones/all'}
  ]
  const goBack ={nombre: 'Volver',pathTo: '/Catalog/Colecciones/all'}
  const titulo = 'Escencia'
  const [menuButton, setMenuButton] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  
  return (
    <CatalogComp titulo={titulo} categorias={categorias} tree={tree} goBack={goBack} close={()=>setMenuButton(!menuButton)} buttonState={menuButton}/>
  )
}
