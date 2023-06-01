import React from 'react';
import './App.scss';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';
import Coupons from './Pages/Coupons';
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/coupons' element={<Coupons />}/>
    </Routes>
    </>
  );
}

export default App;
