import React from "react";
import './CadastroCard.css'
import axios from "axios";
const CadastroCard = () => {
    return (
        <div className="cadastro-card bg-light">
            <form>
                <label>Nome completo: </label>
                <input placeholder="Seu nome completo aqui" />
                <label>CPF: </label>
                <input placeholder="Seu CPF  aqui" />
                <label>CNPJ: </label>
                <input placeholder="Seu CNPJ aqui" />
                <label>Nome de Usuario: </label>
                <input placeholder="EX: Felipe123" />
                <label>Senha: </label>
                <input placeholder="senha aqui" />
                <label>Confirme sua senha: </label>
                <input placeholder="senha aqui novamente" />
                <div>
                    <button className="btn btn-success">Cadastrar</button>
                </div>




            </form>
        </div>
    )
}


export default CadastroCard