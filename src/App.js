import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login"

import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importe BrowserRouter e Routes

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login/>}></Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
