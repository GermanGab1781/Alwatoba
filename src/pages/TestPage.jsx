import React from 'react'
import { useState } from 'react'
import CatalogComp from '../components/CatalogComp'

export default function TestPage() {
  const categorias = [{nombre: 'Autoctona', pathTo:'/Catalog/Autoctona'},{nombre:'bruh', pathTo:'/Alwatoba'}]
  const titulo = 'Nuestros Productos'
  const [test, setTest] = useState(false)
  return (
    <div>
      <CatalogComp titulo={titulo} categorias={categorias} close={()=>setTest(!test)} buttonState={test}/>
    </div>
  )
}
