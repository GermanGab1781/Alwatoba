import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
const SliderItem = ( h ) => {
  return (
    <motion.div className='relative cursor-default'>
      <img src={require("../media/NubeAlwaHorizontal.png")} alt="XD" style={{ height: '90vh' }} className='object-fill cursor-default w-screen relative'></img>
      <motion.span className='absolute flex flex-col gap-y-16 top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 p-5 border h-fit w-fit'>
        <motion.span initial={{ opacity: 0, y: -300 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1 }} className='text-3xl font-bold text-slate-700'>
          Nuestra Pasión y Herencia
        </motion.span>
        <motion.span initial={{ opacity: 0, y: 300 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1 }}>
          <NavLink className='p-5 border border-black bg-slate-700 w-full text-end cursor-pointer' to="/Blogs">
            &#10132;Conocenos
          </NavLink>
        </motion.span>
      </motion.span>
    </motion.div>
  );
}

export default SliderItem;
