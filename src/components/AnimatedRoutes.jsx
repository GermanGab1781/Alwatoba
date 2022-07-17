import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import HomePage from '../pages/Home';
import CatalogPage from '../pages/Catalog';


function AnimatedRoutes() {
  const location= useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Catalog' element={<CatalogPage/>}/>
        <Route path='*' element={<CatalogPage/>}/>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes