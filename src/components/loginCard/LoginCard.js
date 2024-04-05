import React from 'react';
import './LoginCard.css';

const LoginCard = () => {
    return (
        <div className='login-card-container'>
            <div className='login-card'>
                <form>
                    <div className='form-group'>
                        <label>Usuário:</label>
                        <input type='text' placeholder='Digite seu usuário aqui' />
                    </div>
                    <div className='form-group'>
                        <label>Senha:</label>
                        <input type='password' placeholder='Digite sua senha aqui' />
                    </div>
                    
                    <button className='btn entrar btn-success'>Entrar</button>
                    <button className='btn esqueci btn-danger'>Esqueci minha senha</button>
                </form>
            </div>
        </div>
    );
};

export default LoginCard;
