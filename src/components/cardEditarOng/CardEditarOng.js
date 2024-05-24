import React, { useState, useEffect } from "react";
import './CardEditarOng.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CardEditarOng = () => {
    const [dadosOng, setDadosOng] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOngData = async () => {
            try {
                const userId = localStorage.getItem('userId');
                const response = await axios.get('http://localhost:4000/ongs/'+userId); // Substitua '123' pelo ID da ONG
                setDadosOng(response.data);
            } catch (error) {
                setError('Erro ao buscar dados da ONG. Por favor, tente novamente.');
            }
        };

        fetchOngData();
    }, []);

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
            await axios.put(`http://localhost:4000/ongs/${dadosOng._id}`, dadosOng);
            alert('Alterações salvas com sucesso!');
        } catch (error) {
            setError('Erro ao salvar alterações. Por favor, tente novamente.');
        }
    };

    const handleExcluirPerfil = async () => {
        try {
            await axios.delete(`http://localhost:4000/ongs/${dadosOng._id}`);
            localStorage.removeItem('dadosOng');
            alert('Perfil excluído com sucesso.');
        } catch (error) {
            setError('Erro ao excluir perfil. Por favor, tente novamente.');
        }
    };

    return (
        <div className="container">
            <div className="perfil-container">
                <h2 className="titulo-card">Perfil da sua Ong</h2>
                {error && <p className="error-message">{error}</p>}
                {dadosOng ? (
                    <div className="dados-ong">
                        <p><strong>Nome da Ong:</strong> {dadosOng.nomeOng}</p>
                        <p><strong>CNPJ:</strong> {dadosOng.cnpj}</p>
                        <p><strong>Email:</strong> {dadosOng.email}</p>
                        <p><strong>Responsável:</strong> {dadosOng.nomeResponsavel}</p> {/* Use o campo 'nomeResponsavel' retornado pela API */}
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
                        placeholder="Nome"
                        value={dadosOng ? dadosOng.nomeOng : ""}
                        onChange={handleInputChange}
                    />
                    <label>CNPJ: </label>
                    <input
                        type="text"
                        name="cnpj"
                        placeholder="CNPJ"
                        value={dadosOng ? dadosOng.cnpj : ""}
                        onChange={handleInputChange}
                    />
                    <label>Email cadastrado: </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={dadosOng ? dadosOng.email : ""}
                        onChange={handleInputChange}
                    />
                    <label>Nome de Reponsavel: </label>
                    <input
                        type="text"
                        name="nomeResponsavel"
                        placeholder="EX: Felipe123"
                        value={dadosOng ? dadosOng.nomeResponsavel : ""}
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
