import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import RouterApp from './router/RouterApp';
import { getProductsStorage, useColors } from './services/utils/colors';
import { useDispatch } from 'react-redux';
import { setAllProducts } from './interface/stateApp/slices/productsSlice';

export default function App() {
  const dispatch = useDispatch();

  const colors = useColors(); // Obtiene los colores principales
  useEffect(() => {
    const _products = getProductsStorage();
    if (_products) {
      dispatch(setAllProducts(_products));
    }
    
  }, []);
  
  return (
    <div className='containerApp' style={{...colors.backgroundStyle}}>
      <div className='subConatainer' style={{...colors.backgroundStyle}}>
        <BrowserRouter>
          <RouterApp />
        </BrowserRouter>
      </div>
    </div>
  );
}


