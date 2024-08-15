import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import RouterApp from './router/RouterApp';
import { useColors } from './services/utils/colors';

export default function App() {

  const colors = useColors(); // Obtiene los colores principales
  
  return (
    <div className='containerApp' style={{...colors.backgroundStyle}}>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </div>
  );
}


