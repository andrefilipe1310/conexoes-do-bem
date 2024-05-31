import React, { useState } from "react";
import './CadastroCard.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CadastroCard = () => {
    const [formData, setFormData] = useState({
        nomeOng: "",
        cnpj: "",
        email: "",
        responsavel: "",
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
            console.log(formData)
            const response = await axios.post('http://localhost:4000/ongs', {
                nome: formData.nomeOng,
                email: formData.email,
                senha: formData.senha,
                cnpj:formData.cnpj,
                nomeResponsavel:formData.responsavel
            });
            console.log(response.data)
            localStorage.setItem("ongId",response.data.ong.id)
            alert('Usuário cadastrado com sucesso!');
            navigate('/perfil');
        } catch (error) {
            alert('Erro ao cadastrar usuário');
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
                <label>Nome de Responsável: </label>
                <input
                    type="text"
                    name="responsavel"
                    placeholder="Nome do Responsável"
                    value={formData.responsavel}
                    onChange={handleInputChange}
                />
                <label>Senha: </label> {/* Adicionei o campo senha */}
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
