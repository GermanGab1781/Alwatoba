import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import HomePage from '../pages/Home';
import CatalogPage from '../pages/Catalog';
import ProductEj from '../pages/ProductEj';
import CatalogAll from './CatalogAll'
import CatalogCateg1 from './CatalogCateg1';
import CatalogCateg2 from './CatalogCateg2';
import Blogs from '../pages/Blogs';
import CatalogAutoctona from '../pages/CatalogAutoctona';
import CatalogArteYDiseño from '../pages/CatalogArteYDiseño';
import CatalogAutoctonaComplementos from '../pages/CatalogAutoctonaComplementos';
import CatalogAutoctonaLifestyle from '../pages/CatalogAutoctonaLifestyle';
import CatalogColecciones from '../pages/CatalogColecciones';
import TestPage from '../pages/TestPage';
import CatalogColeccionesEscencia from '../pages/CatalogColeccionesEscencia';
import FirebaseTestPage from '../pages/FirebaseTestPage';


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
        <Route path='/Catalog/Autoctona/*' element={<CatalogAutoctona/>}>
          <Route path='JoyeriaTemporanea' element={<CatalogAll/>}/>
          <Route path='Indumentaria' element={<CatalogAll/>}/>
          <Route path='All' element={<CatalogAll/>}/>
        </Route>
        <Route path='/Catalog/Autoctona/Lifestyle/*' element={<CatalogAutoctonaLifestyle/>}>
          <Route path='Chaguar' element={<CatalogAll/>}/>
          <Route path='Carandillo' element={<CatalogAll/>}/>
          <Route path='PalmaYTotora' element={<CatalogAll/>}/>
          <Route path='PaloSanto' element={<CatalogAll/>}/>
          <Route path='Disenio' element={<CatalogAll/>}/>
          <Route path='All' element={<CatalogAll/>}/>
        </Route>
        <Route path='/Catalog/Autoctona/Complementos/*' element={<CatalogAutoctonaComplementos/>}>
          <Route path='LineaMate' element={<CatalogAll/>}/>
          <Route path='Accesorios' element={<CatalogAll/>}/>
          <Route path='Bags' element={<CatalogAll/>}/>
          <Route path='All' element={<CatalogAll/>}/>
        </Route>
           {/* Seccion Colecciones */}
        <Route path='/Catalog/Colecciones/*' element={<CatalogColecciones/>}>
          <Route path='All' element={<CatalogAll/>}/>
        </Route>
        <Route path='/Catalog/Colecciones/Escencia/*' element={<CatalogColeccionesEscencia/>}>
          <Route path='Indumentaria' element={<CatalogAll/>}/>
          <Route path='JoyeriaContemporanea' element={<CatalogAll/>}/>
          <Route path='Complementos' element={<CatalogAll/>}/>
          <Route path='All' element={<CatalogAll/>}/>
        </Route>
            {/* Seccion Arte y Diseño */}
        <Route path='/Catalog/ArteyDisenio/*'element={<CatalogArteYDiseño/>}>
          <Route path='Indumentaria' element={<CatalogAll/>}/>
          <Route path='JoyeriaContemporanea' element={<CatalogAll/>}/>
          <Route path='Complementos' element={<CatalogAll/>}/>
          <Route path='All' element={<CatalogAll/>}/>
        </Route>
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