import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PerfilEditar from "./pages/perfil/PerfilEditar";
import PaginaONG from "./pages/paginaONG/PaginaONG";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Rota para o componente Home */}
          <Route path="/cadastro" element={<Cadastro />} /> {/* Rota para o componente Cadastro */}
          <Route path="/login" element={<Login />} /> {/* Rota para o componente Login */}
          <Route path="/perfil" element={<PerfilEditar />} />  {/* Rota para o perfil da ONG */}
          <Route path="/ong" element={<PaginaONG />} />  {/* Rota para a página da ONG */}
          <Route path="*" element={<h1>Not Found</h1>} /> {/* Rota para páginas não encontradas */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
