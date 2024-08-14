
import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import HomeApp from '../home/Home';
import { useNavigate } from 'react-router-dom';

export default function RouterApp() {

  return (
    <Routes>
      <Route path='/' element={<HomeApp />}></Route>
    </Routes>
  )
}
