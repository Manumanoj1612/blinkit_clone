import { useState } from 'react'
import './App.css'
import HeaderPage from './components/header-page/HeaderPage'
import ContentPage from './components/content-page/ContentPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MyCart from './components/my-cart/MyCart';

function App() {
  

  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mycart" element={<MyCart />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
