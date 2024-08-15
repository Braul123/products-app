
import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomeApp from '../components/home/Home';

export default function RouterApp() {

  return (
      <Routes>
        <Route path='/' element={<HomeApp />}></Route>
      </Routes>
  )
}
