import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import HomePage from '../pages/Home';
import CatalogPage from '../pages/Catalog';
import ProductEj from '../pages/ProductEj';
import CatalogCateg1 from './CatalogCateg1';
import CatalogCateg2 from './CatalogCateg2';
import Blogs from '../pages/Blogs';
import CatalogAutoctona from '../pages/CatalogAutoctona';
import CatalogArteYDiseño from '../pages/CatalogArteYDiseño';
import CatalogAutoctonaComplementos from '../pages/CatalogAutoctonaComplementos';
import CatalogAutoctonaLifestyle from '../pages/CatalogAutoctonaLifestyle';
import CatalogColecciones from '../pages/CatalogColecciones';
import CatalogColeccionesEscencia from '../pages/CatalogColeccionesEscencia';


function AnimatedRoutes() {
  const location= useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/Alwatoba' element={<HomePage/>}/>
        
        {/* Catalogo */}
        <Route path='/Catalog/*' element={<CatalogPage/>}>
          <Route path='Categ1' element={<CatalogCateg1/>}/>
          <Route path='Categ2' element={<CatalogCateg2/>}/>
        </Route>
            {/* Seccion Autoctona */}
        <Route path='/Catalog/Autoctona/*' element={<CatalogAutoctona/>}>
          <Route path='Categ1' element={<CatalogCateg1/>}/>
          <Route path='Categ2' element={<CatalogCateg2/>}/>
        </Route>
        <Route path='/Catalog/Autoctona/Lifestyle/*' element={<CatalogAutoctonaLifestyle/>}>
          <Route path='Categ1' element={<CatalogCateg1/>}/>
          <Route path='Categ2' element={<CatalogCateg2/>}/>
        </Route>
        <Route path='/Catalog/Autoctona/Complementos/*' element={<CatalogAutoctonaComplementos/>}>
          <Route path='Categ1' element={<CatalogCateg1/>}/>
          <Route path='Categ2' element={<CatalogCateg2/>}/>
        </Route>
           {/* Seccion Colecciones */}
        <Route path='/Catalog/Colecciones' element={<CatalogColecciones/>}/>
        <Route path='/Catalog/Colecciones/Escencia/*' element={<CatalogColeccionesEscencia/>}>
          <Route path='Categ1' element={<CatalogCateg1/>}/>
          <Route path='Categ2' element={<CatalogCateg2/>}/>
          </Route>
            {/* Seccion Arte y Diseño */}
        <Route path='/Catalog/ArteyDisenio/*'element={<CatalogArteYDiseño/>}>
          <Route path='Categ1' element={<CatalogCateg1/>}/>
          <Route path='Categ2' element={<CatalogCateg2/>}/>
        </Route>
        {/* Blogs */}
        <Route path="/Blogs" element={<Blogs/>}/>
        {/* Producto */}
        <Route path='/Product' element={<ProductEj/>}/>
        <Route path='*' element={<HomePage/>}/>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes