import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App
