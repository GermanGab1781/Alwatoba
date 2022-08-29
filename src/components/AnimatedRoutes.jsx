import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import HomePage from '../pages/Home';
import CatalogPage from '../pages/Catalog';
import ProductEj from '../pages/ProductEj';
import CatalogCateg1 from './CatalogCateg1';
import CatalogCateg2 from './CatalogCateg2';
import Blogs from '../pages/Blogs';


function AnimatedRoutes() {
  const location= useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/Alwatoba' element={<HomePage/>}/>
        <Route path='/Catalog/*' element={<CatalogPage/>}>
          <Route path='Categ1' element={<CatalogCateg1/>}/>
          <Route path='Categ2' element={<CatalogCateg2/>}/>
        </Route>
        <Route path="/Blogs" element={<Blogs/>}/>
        <Route path='/Product' element={<ProductEj/>}/>
        <Route path='*' element={<HomePage/>}/>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes