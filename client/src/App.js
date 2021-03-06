import React, { useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aside from './components/Aside';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import TblGlobal from './components/TblGlobal';
import FrmEditGlobal from './components/FrmEditGlobal';
import TblSucursales from './components/TblSucursales';

function App() {

  const [editing,setEditing]=useState(false);

  return (
    // <div className="App">
    <BrowserRouter>
      <Header />
      <Aside />  

      <Routes>
        <Route path="/Global" element={<TblGlobal/>} />
        <Route path="/Sucursal" element={<TblSucursales/>} />
      </Routes>  
      <Footer />
    </BrowserRouter>
  );
}

export default App;
