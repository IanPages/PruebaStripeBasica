import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import CheckoutButton from './component/CheckoutButton';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CheckoutButton />} />
        <Route path="/success" element={<h2>¡Pago exitoso!</h2>} />
        <Route path="/cancel" element={<h2>Pago cancelado</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
