import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import HomePage from '../pages/Home';
import CatalogPage from '../pages/Catalog';
import ProductEj from '../pages/ProductEj';


function AnimatedRoutes() {
  const location= useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/Alwatoba' element={<HomePage/>}/>
        <Route path='/Catalog' element={<CatalogPage/>}/>
        <Route path='/Product' element={<ProductEj/>}/>
        <Route path='*' element={<HomePage/>}/>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes