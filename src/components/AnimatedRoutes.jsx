import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import HomePage from '../pages/Home';
import Product from '../pages/Product';
import Blogs from '../pages/Blogs';
import TestPage from '../pages/TestPage';



//Imports para Admin
import Admin from '../pages/Admin/Admin';
import AdminUploadProduct from '../pages/Admin/Upload';
import EditDelete from '../pages/Admin/EditDelete';
import AdminUploadChanges from '../pages/Admin/UploadChanges';
import Login from '../pages/Admin/Login';
import PrivateRoute from './PrivateRoute';
import AlreadyLogin from './AlreadyLogin';

//Imports Catalogo
import CatalogPage from '../pages/Catalog/Catalog';
import CatalogAll from './CatalogAll';

//Imports para Seccion Autoctona
import Autoctona from '../pages/Catalog/Autoctona';
import AutoctonaComplementos from '../pages/Catalog/AutoctonaComplementos';
import AutoctonaLifestyle from '../pages/Catalog/AutoctonaLifestyle';
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
import ColeccionesEscencia from '../pages/Catalog/ColeccionesEscencia';
import Colecciones from '../pages/Catalog/Colecciones';
import ColeccionesAll from './ColeccionesOutlets/ColeccionesAll';
import EscenciaAll from './ColeccionesOutlets/EscenciaAll';
import EscenciaComplementos from './ColeccionesOutlets/EscenciaComplementos';
import EscenciaIndumentaria from './ColeccionesOutlets/EscenciaIndumentaria';
import EscenciaJoyeria from './ColeccionesOutlets/EscenciaJoyeria';

//Importas para Seccion Arte y Diseño
import ArteYDiseño from '../pages/Catalog/ArteYDiseño';
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
        {/* Tests */}
        <>
        <Route path='/test' element={<TestPage/>}>
          <Route path='All' element={<CatalogAll/>}/>
        </Route>
        </>
        {/* Catalogo */}
        <>
        <Route path='/Catalog/*' element={<CatalogPage/>}>
          <Route path='All' element={<CatalogAll/>}/>
        </Route>
          {/* Seccion Autoctona */}
        <>
        <Route path='/Catalog/Autoctona/*' element={<Autoctona/>}>
          <Route path='JoyeriaTemporanea' element={<AutoctonaJoyeria/>}/>
          <Route path='Indumentaria' element={<AutoctonaIndumentaria/>}/>
          <Route path='All' element={<AutoctonaAll/>}/>
        </Route>
        <Route path='/Catalog/Autoctona/Lifestyle/*' element={<AutoctonaLifestyle/>}>
          <Route path='Chaguar' element={<LifestyleChaguar/>}/>
          <Route path='Carandillo' element={<LifestyleCarandillo/>}/>
          <Route path='PalmaYTotora' element={<LifestylePalmaYTotora/>}/>
          <Route path='PaloSanto' element={<LifestylePaloSanto/>}/>
          <Route path='Disenio' element={<LifestyleDisenio/>}/>
          <Route path='All' element={<LifestyleAll/>}/>
        </Route>
        <Route path='/Catalog/Autoctona/Complementos/*' element={<AutoctonaComplementos/>}>
          <Route path='LineaMate' element={<ComplementosLineaMate/>}/>
          <Route path='Accesorios' element={<ComplementosAccesorios/>}/>
          <Route path='Bags' element={<ComplementosBags/>}/>
          <Route path='All' element={<ComplementosAll/>}/>
        </Route>
        </>
          {/* Seccion Colecciones */}
        <>
        <Route path='/Catalog/Colecciones/*' element={<Colecciones/>}>
          <Route path='All' element={<ColeccionesAll/>}/>
        </Route>
        <Route path='/Catalog/Colecciones/Escencia/*' element={<ColeccionesEscencia/>}>
          <Route path='Indumentaria' element={<EscenciaIndumentaria/>}/>
          <Route path='JoyeriaContemporanea' element={<EscenciaJoyeria/>}/>
          <Route path='Complementos' element={<EscenciaComplementos/>}/>
          <Route path='All' element={<EscenciaAll/>}/>
        </Route>
        </>
          {/* Seccion Arte y Diseño */}
        <>
        <Route path='/Catalog/ArteyDisenio/*'element={<ArteYDiseño/>}>
          <Route path='Indumentaria' element={<ArteIndumentaria/>}/>
          <Route path='JoyeriaContemporanea' element={<ArteJoyeria/>}/>
          <Route path='Complementos' element={<ArteComplementos/>}/>
          <Route path='All' element={<ArteAll/>}/>
        </Route>
        </>
        </>
        {/* Blogs */}
        <>
        <Route path="/Blogs" element={<Blogs/>}/>
        </>
        {/* Producto */}
        <>
        <Route path='/Product/:id' element={<Product/>}/>
        <Route path='*' element={<HomePage/>}/>
        </>
        {/* Admin */}
        <>
        <Route path='/Login' element={<AlreadyLogin><Login/></AlreadyLogin>}/>
        <Route path='/Admin' element={<PrivateRoute><Admin/></PrivateRoute>}/>
        <Route path='/Admin/Upload' element={<PrivateRoute><AdminUploadProduct/></PrivateRoute>}/>
        <Route path='/Admin/EditOrDelete' element={<PrivateRoute><EditDelete/></PrivateRoute>}/>
        <Route path='/Admin/EditOrDelete/:id' element={<PrivateRoute><AdminUploadChanges/></PrivateRoute>}/>
        </>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes