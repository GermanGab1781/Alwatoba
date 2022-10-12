import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import HomePage from '../pages/Home';
import CatalogPage from '../pages/Catalog';
import ProductEj from '../pages/ProductEj';
import Blogs from '../pages/Blogs';
import TestPage from '../pages/TestPage';
import FirebaseTestPage from '../pages/FirebaseTestPage';

import CatalogAll from './CatalogAll'

//Imports para Seccion Autoctona
import CatalogAutoctona from '../pages/CatalogAutoctona';
import CatalogAutoctonaComplementos from '../pages/CatalogAutoctonaComplementos';
import CatalogAutoctonaLifestyle from '../pages/CatalogAutoctonaLifestyle';
import AutoctonaAll from './AutoctonaOutlets/AutoctonaAll';
import ComplementosAll from './AutoctonaOutlets/ComplementosAll';
import ComplementosLineaMate from './AutoctonaOutlets/ComplementosLineaMate';
import ComplementosAccesorios from './AutoctonaOutlets/ComplementosAccesorios'
import AutoctonaJoyeria from './AutoctonaOutlets/AutoctonaJoyeria';
import AutoctonaIndumentaria from './AutoctonaOutlets/AutoctonaIndumentaria';
import ComplementosBags from './AutoctonaOutlets/ComplementosBags';
import LifestyleAll from './AutoctonaOutlets/LifestyleAll';
import LifestyleChaguar from './AutoctonaOutlets/LifestyleChaguar';
import LifestyleCarandillo from './AutoctonaOutlets/LifestyleCarandillo';
import LifestylePalmaYTotora from './AutoctonaOutlets/LifestylePalmaYTotora';
import LifestylePaloSanto from './AutoctonaOutlets/LifestylePaloSanto';
import LifestyleDisenio from './AutoctonaOutlets/LifestyleDisenio';

//Imports para Seccion Colecciones Capsula
import CatalogColeccionesEscencia from '../pages/CatalogColeccionesEscencia';
import CatalogColecciones from '../pages/CatalogColecciones';
import ColeccionesAll from './ColeccionesOutlets/ColeccionesAll';
import EscenciaAll from './ColeccionesOutlets/EscenciaAll';
import EscenciaComplementos from './ColeccionesOutlets/EscenciaComplementos';
import EscenciaIndumentaria from './ColeccionesOutlets/EscenciaIndumentaria';
import EscenciaJoyeria from './ColeccionesOutlets/EscenciaJoyeria';

//Importas para Seccion Arte y Diseño
import CatalogArteYDiseño from '../pages/CatalogArteYDiseño';
import ArteAll from './ArteYDiseñoOutlets/ArteAll';
import ArteComplementos from './ArteYDiseñoOutlets/ArteComplementos';
import ArteJoyeria from './ArteYDiseñoOutlets/ArteJoyeria';
import ArteIndumentaria from './ArteYDiseñoOutlets/ArteIndumentaria';

function AnimatedRoutes() {
  const location= useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/Alwatoba' element={<HomePage/>}/>
        {/* test */}
        <Route path='/test' element={<TestPage/>}>
          <Route path='All' element={<CatalogAll/>}/>
        </Route>
        {/* Catalogo */}
        <Route path='/Catalog/*' element={<CatalogPage/>}>
          <Route path='All' element={<CatalogAll/>}/>
        </Route>
          {/* Seccion Autoctona */}
        <>
        <Route path='/Catalog/Autoctona/*' element={<CatalogAutoctona/>}>
          <Route path='JoyeriaTemporanea' element={<AutoctonaJoyeria/>}/>
          <Route path='Indumentaria' element={<AutoctonaIndumentaria/>}/>
          <Route path='All' element={<AutoctonaAll/>}/>
        </Route>
        <Route path='/Catalog/Autoctona/Lifestyle/*' element={<CatalogAutoctonaLifestyle/>}>
          <Route path='Chaguar' element={<LifestyleChaguar/>}/>
          <Route path='Carandillo' element={<LifestyleCarandillo/>}/>
          <Route path='PalmaYTotora' element={<LifestylePalmaYTotora/>}/>
          <Route path='PaloSanto' element={<LifestylePaloSanto/>}/>
          <Route path='Disenio' element={<LifestyleDisenio/>}/>
          <Route path='All' element={<LifestyleAll/>}/>
        </Route>
        <Route path='/Catalog/Autoctona/Complementos/*' element={<CatalogAutoctonaComplementos/>}>
          <Route path='LineaMate' element={<ComplementosLineaMate/>}/>
          <Route path='Accesorios' element={<ComplementosAccesorios/>}/>
          <Route path='Bags' element={<ComplementosBags/>}/>
          <Route path='All' element={<ComplementosAll/>}/>
        </Route>
        </>
          {/* Seccion Colecciones */}
        <>
        <Route path='/Catalog/Colecciones/*' element={<CatalogColecciones/>}>
          <Route path='All' element={<ColeccionesAll/>}/>
        </Route>
        <Route path='/Catalog/Colecciones/Escencia/*' element={<CatalogColeccionesEscencia/>}>
          <Route path='Indumentaria' element={<EscenciaIndumentaria/>}/>
          <Route path='JoyeriaContemporanea' element={<EscenciaJoyeria/>}/>
          <Route path='Complementos' element={<EscenciaComplementos/>}/>
          <Route path='All' element={<EscenciaAll/>}/>
        </Route>
        </>
          {/* Seccion Arte y Diseño */}
        <>
        <Route path='/Catalog/ArteyDisenio/*'element={<CatalogArteYDiseño/>}>
          <Route path='Indumentaria' element={<ArteIndumentaria/>}/>
          <Route path='JoyeriaContemporanea' element={<ArteJoyeria/>}/>
          <Route path='Complementos' element={<ArteComplementos/>}/>
          <Route path='All' element={<ArteAll/>}/>
        </Route>
        </>
        {/* Blogs */}
        <Route path="/Blogs" element={<Blogs/>}/>
        {/* Producto */}
        <Route path='/Product/:id' element={<ProductEj/>}/>
        <Route path='*' element={<HomePage/>}/>
        {/* Firebase Test */}
        <Route path="/Firebase" element={<FirebaseTestPage/>}/>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes