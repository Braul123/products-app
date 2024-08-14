import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import RouterApp from './router/RouterApp';
import { useColors } from './services/utils/colors';

export default function App() {

  const colors = useColors(); // Obtiene los colores principales
  
  return (
    <div style={{...colors.backgroundStyle, minHeight: '100vh', height: '100vh'}}>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </div>
  );
}


