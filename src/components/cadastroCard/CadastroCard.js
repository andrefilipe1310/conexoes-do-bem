import React from "react";
import './CadastroCard.css'
import axios from "axios";
const CadastroCard = () => {
    return (
        <div className="cadastro-card bg-light">
            <form>
                <h2 className="titulo-card">Cadastre sua Ong</h2>
                <label>Nome da sua Ong: </label>
                <input placeholder="Seu nome completo aqui" />
                <label>CNPJ: </label>
                <input placeholder="Seu CNPJ aqui" />
                <label>Email: </label>
                <input placeholder="Seu Email aqui" />
                <label>Nome de Reponsavel: </label>
                <input placeholder="EX: Felipe123" />
                
                <div>
                    <button className="btn">Cadastrar</button>
                </div>




            </form>
        </div>
    )
}


export default CadastroCard