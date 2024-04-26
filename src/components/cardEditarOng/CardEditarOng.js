import React from "react";
import './CardEditarOng.css'
import axios from "axios";



const CardEditarOng = () => {
    return (
        <div className="editar-card bg-light">
            <form>
                <h2 className="titulo-card">Perfil da ONG</h2>
                <label>Nome da Ong: </label>
                <input placeholder="Nome" />
                <label>CNPJ: </label>
                <input placeholder="CNPJ" />
                <label>Email cadastrado: </label>
                <input placeholder="Email" />
                <label>Nome de Reponsavel: </label>
                <input placeholder="EX: Felipe123" />
                
                <div>
                    <button className="btn btn-primary">Editar ONG</button>
                    <button className="btn btn-danger">Excluir ONG</button>
                </div>

            </form>
        </div>
    )
}


export default CardEditarOng