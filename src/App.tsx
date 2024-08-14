import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import RouterApp from './router/RouterApp';

export default function App() {
  
  return (
    <div style={{minHeight: '100vh', height: '100vh', background: 'gray'}}>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </div>
  );
}


