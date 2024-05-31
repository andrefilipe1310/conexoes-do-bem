import React, { useState, useEffect } from "react";
import './CardEditarOng.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const CardEditarOng = () => {
    const [dadosOng, setDadosOng] = useState({
        nomeOng: "",
        nomeResponsavel: "",
        email: "",
        cnpj: "",
        senha: ""
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const ongId = localStorage.getItem('ongId');

    useEffect(() => {
        const fetchData = async () => {
            if (!ongId) {
                setError("ID da ONG não encontrado no localStorage.");
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(`http://localhost:4000/ongs/${ongId}`);
                setDadosOng(response.data);
                setLoading(false);
            } catch (error) {
                setError("Erro ao buscar informações da ONG.");
                setLoading(false);
            }
        };

        fetchData();
    }, [ongId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDadosOng({
            ...dadosOng,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:4000/ongs/${ongId}`, dadosOng);
            alert('Alterações salvas com sucesso!');
            navigate('/perfil');
        } catch (error) {
            setError("Erro ao salvar alterações. Por favor, tente novamente.");
        }
    };

    const handleExcluirPerfil = async () => {
        try {
            await axios.delete(`http://localhost:4000/ongs/${ongId}`);
            localStorage.removeItem('ongId');
            alert('Perfil excluído com sucesso.');
            navigate('/');
        } catch (error) {
            setError("Erro ao excluir perfil. Por favor, tente novamente.");
        }
    };

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="container">
            <div className="perfil-container">
                <h2 className="titulo-card">Perfil da sua Ong</h2>
                {dadosOng ? (
                    <div className="dados-ong">
                        <p><strong>Nome da Ong:</strong> {dadosOng.nomeOng}</p>
                        <p><strong>CNPJ:</strong> {dadosOng.cnpj}</p>
                        <p><strong>Email:</strong> {dadosOng.email}</p>
                        <p><strong>Responsável:</strong> {dadosOng.nomeResponsavel}</p>
                    </div>
                ) : (
                    <p>Ainda não há dados cadastrados para a Ong.</p>
                )}
            </div>
            <div className="editar-card bg-light">
                <form onSubmit={handleSubmit}>
                    <h2 className="titulo-card">Editar Perfil da ONG</h2>
                    <label>Nome da Ong: </label>
                    <input
                        type="text"
                        name="nomeOng"
                        placeholder="Nome da ONG"
                        value={dadosOng.nomeOng}
                        onChange={handleInputChange}
                    />
                    <label>CNPJ: </label>
                    <input
                        type="text"
                        name="cnpj"
                        placeholder="CNPJ"
                        value={dadosOng.cnpj}
                        onChange={handleInputChange}
                    />
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={dadosOng.email}
                        onChange={handleInputChange}
                    />
                    <label>Nome de Responsável: </label>
                    <input
                        type="text"
                        name="nomeResponsavel"
                        placeholder="Nome do Responsável"
                        value={dadosOng.nomeResponsavel}
                        onChange={handleInputChange}
                    />
                    <label>Senha: </label>
                    <input
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        value={dadosOng.senha}
                        onChange={handleInputChange}
                    />
                    <div>
                        <button type="submit" className="btn btn-primary">Salvar Alterações</button>
                        <Link to="/"><button type="button" onClick={handleExcluirPerfil} className="btn btn-danger">Excluir Perfil</button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CardEditarOng;
