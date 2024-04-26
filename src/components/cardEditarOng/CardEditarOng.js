import React, { useState, useEffect } from "react";
import './CardEditarOng.css';
import { Link } from 'react-router-dom';

const CardEditarOng = () => {
    const [dadosOng, setDadosOng] = useState(null);

    
    useEffect(() => {
        const dadosSalvos = localStorage.getItem('dadosOng');
        if (dadosSalvos) {
            setDadosOng(JSON.parse(dadosSalvos));
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDadosOng({
            ...dadosOng,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('dadosOng', JSON.stringify(dadosOng));
        alert('Alterações salvas com sucesso!');
    };

    
    const handleExcluirPerfil = () => {
        
        localStorage.removeItem('dadosOng');
        alert('Perfil excluído com sucesso.');
    
    };

    return (
        <div className="container">
            <div className="perfil-container">
                <h2>Perfil da sua Ong</h2>
                {dadosOng ? (
                    <div className="dados-ong">
                        <p><strong>Nome da Ong:</strong> {dadosOng.nomeOng}</p>
                        <p><strong>CNPJ:</strong> {dadosOng.cnpj}</p>
                        <p><strong>Email:</strong> {dadosOng.email}</p>
                        <p><strong>Responsável:</strong> {dadosOng.responsavel}</p>
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
                        name="responsavel"
                        placeholder="EX: Felipe123"
                        value={dadosOng ? dadosOng.responsavel : ""}
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
