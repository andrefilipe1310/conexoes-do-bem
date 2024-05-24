import React, { useState } from "react";
import './CadastroCard.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CadastroCard = () => {
    const [formData, setFormData] = useState({
        nomeOng: "",
        cnpj: "",
        email: "",
        nomeResponsavel: "", // Corrigido o nome do campo
        senha: ""
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Enviar os dados do formulário para a API
            await axios.post('http://localhost:4000/ongs', formData);
            // Redirecionar para outra página após o cadastro
            navigate('/');
        } catch (error) {
            console.error('Error creating NGO:', error);
            // Lidar com erros de forma adequada, como exibir uma mensagem para o usuário
        }
    };

    return (
        <div className="cadastro-card bg-light">
            <form onSubmit={handleSubmit}>
                <h2 className="titulo-card">Cadastre sua Ong</h2>
                <label>Nome da sua Ong: </label>
                <input
                    type="text"
                    name="nomeOng"
                    placeholder="Nome da ONG"
                    value={formData.nomeOng}
                    onChange={handleInputChange}
                />
                <label>CNPJ: </label>
                <input
                    type="text"
                    name="cnpj"
                    placeholder="CNPJ"
                    value={formData.cnpj}
                    onChange={handleInputChange}
                />
                <label>Email: </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <label>Nome de Responsável: </label> {/* Corrigido o nome do campo */}
                <input
                    type="text"
                    name="nomeResponsavel" // Corrigido o nome do campo
                    placeholder="Nome do Responsável"
                    value={formData.nomeResponsavel} // Corrigido o nome do campo
                    onChange={handleInputChange}
                />
                <label>Senha: </label>
                <input
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    value={formData.senha}
                    onChange={handleInputChange}
                />
                <div>
                    <button type="submit" className="btn">Cadastrar</button>
                </div>
            </form>
        </div>
    );
};

export default CadastroCard;
