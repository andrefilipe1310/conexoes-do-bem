import React, { useState } from "react";
import './CadastroCard.css'
import axios from "axios";
import { Link } from 'react-router-dom'

const CadastroCard = () => {

    const [formData, setFormData] = useState({
        nomeOng: "",
        cnpj: "",
        email: "",
        responsavel: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const jsonData = JSON.stringify(formData);

        localStorage.setItem('dadosOng', jsonData);

        window.location.href = "/Perfil";
    };

    return (
        <div className="cadastro-card bg-light">
            <form onSubmit={handleSubmit}>
                <h2 className="titulo-card">Cadastre sua Ong</h2>
                <label>Nome da sua Ong: </label>
                <input
                    type="text"
                    name="nomeOng"
                    placeholder="Seu nome completo aqui"
                    value={formData.nomeOng}
                    onChange={handleInputChange}
                />
                <label>CNPJ: </label>
                <input
                    type="text"
                    name="cnpj"
                    placeholder="Seu CNPJ aqui"
                    value={formData.cnpj}
                    onChange={handleInputChange}
                />
                <label>Email: </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Seu Email aqui"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <label>Nome de Reponsável: </label>
                <input
                    type="text"
                    name="responsavel"
                    placeholder="EX: Felipe123"
                    value={formData.responsavel}
                    onChange={handleInputChange}
                />
                <div>
                    <button type="submit" className="btn">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default CadastroCard;
