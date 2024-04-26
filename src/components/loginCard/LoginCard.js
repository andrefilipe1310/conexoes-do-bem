import React from 'react';
import './LoginCard.css';
import { Link } from 'react-router-dom'
const LoginCard = () => {
    return (
        <div className='login-card-container'>
            <div className='login-card'>
                <form>
                <h2 className="titulo-card">Login</h2>
                    <div className='form-group'>
                        <label>Email:</label>
                        <input type='text' placeholder='Digite seu email aqui' />
                    </div>
                    <div className='form-group'>
                        <label>CNPJ:</label>
                        <input type='password' placeholder='Digite seu CPNPJ aqui' />
                    </div>
                    
                    <Link to="/Perfil"><button className="btn entrar btn-success">Entrar</button></Link>
        
                </form>
            </div>
        </div>
    );
};

export default LoginCard;


